import { useEffect, useRef, useState } from 'react'
import { useAudio, useUserProps } from '../../context';
import { setUpCanvas as setUpCanvasUtil, generateCanvasFillColor } from '../../utils';
import '../../styles/waveform.scss';

const BUFFER_VS_HTML_DURATION_DIFFERENCE = 0.06;

function Playback() {
  const [adjustedBars, setAdjustedBars] = useState<GraphDataType[]>([]);
  const { audioRecording, audioStatus, updateAudioStatus } = useAudio();
  const { graphColor, graphShaded } = useUserProps();
  const unplayedCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const playedCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressLineRef = useRef<HTMLCanvasElement  | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const interval = useRef<NodeJS.Timer>();

  const { blob, duration = 0, graphData = [] } = audioRecording || {};
  const graphDataContext = useRef<Array<GraphDataType>>(graphData);

  useEffect(() => {
    window.addEventListener("resize", drawUnplayedBars);
    () => {
      clearInterval(interval?.current);
      window.removeEventListener("resize", drawUnplayedBars);
    }
  }, []);

  useEffect(() => {
    if (!blob) return;
    /* why aren't we directly updating the status to PLATYING when the
    user clicks on the play button? BECAUSE: we need to SYNC the audio played
    with the 'played bars' getting drawn. Apparently, it takes time for the audio
    src tag to 'load' the blob we pass into it. After that it plays the audio. So we
    need to wait for it to load and THEN call the 'drawPlayedBars' function so that
    both events start TOGETHER  */
    if (audioStatus === PLAYING_REQUESTED) {
      playAudio();
    } else if (audioStatus === PLAYING) {
      drawPlayedBars();
    } else if (audioStatus === PAUSED_PLAYING) {
      pauseAudio();
      clearInterval(interval.current);
    } else if (audioStatus === STOPPED) {
      // remove the red light
      clearInterval(interval.current);
    }
  }, [audioStatus]);

  useEffect(() => {
    graphDataContext.current = graphData;
    try {
      if (graphData.length) {
        drawUnplayedBars();
      }
    } catch (error) {
      console.log('error', error)
    }
  }, [graphData]);

  const clearGraph = (ref: {current: HTMLCanvasElement | null}) => {
    const ctx = ref?.current?.getContext('2d');
    ctx?.clearRect(0, 0, ref?.current?.width ?? 1, ref?.current?.height ?? 1);
  };

  const setUpCanvas = () => {
    const canvasElements = setUpCanvasUtil([
      'waveformgraph-unplayed-graph',
      'waveformgraph-played-graph',
      'progressbar',
    ], '.voice-recorder_canvascontainer');

    unplayedCanvasRef.current = canvasElements?.find((elem) => elem.id === 'waveformgraph-unplayed-graph') as HTMLCanvasElement;
    playedCanvasRef.current = canvasElements?.find((elem) => elem.id === 'waveformgraph-played-graph') as HTMLCanvasElement;
    progressLineRef.current = canvasElements?.find((elem) => elem.id === 'progressbar') as HTMLCanvasElement;
  }
  
  const pauseAudio = () => audioRef?.current?.pause();

  const playAudio = () => {
    const audioELem = document.querySelector('#playback_audio') as HTMLAudioElement;
    /* play from start */
    if (audioELem.readyState !== 4) {
      const audioURL = window.URL.createObjectURL(new Blob([blob as BlobPart], {type: 'audio/mpeg'}));
      audioELem.src = audioURL;
      audioELem.onloadeddata = () => {
        audioELem.play();
        updateAudioStatus(PLAYING);
      }
    } else {
      /* resume */
      if (audioELem.paused) {
        audioELem.play();
        updateAudioStatus(PLAYING);
      } else { /* play audio again from the beginning (while it was already playing) */
        audioELem.currentTime = 0;
        audioELem.play();
        updateAudioStatus(PLAYING);
      }
    }
    audioELem.onended = () => {
      updateAudioStatus(STOPPED);
    }
  };

  const adjustBarsIntoView = () => {
    const zoomedGraphData: GraphDataType[] = [];
    if (!graphDataContext?.current.length) return zoomedGraphData;
    const offset = (unplayedCanvasRef?.current?.offsetWidth ?? 1) / graphDataContext?.current.length;
    graphDataContext?.current.forEach((bar: GraphDataType, i: number) => {
      const prevXValue = zoomedGraphData[i - 1]?.x || 0;
      zoomedGraphData.push({
        ...bar,
        x: prevXValue + offset,
        width: offset,
      })
    });
    setAdjustedBars(zoomedGraphData);
    return zoomedGraphData;
  };

  const drawUnplayedBars = () => {
    setUpCanvas();
    const ctx = unplayedCanvasRef?.current?.getContext('2d');
    if (ctx) {
      const bars = adjustBarsIntoView();
      for (let i=0; i < bars.length ; i++) {
        const bar = bars[i];
        ctx.fillStyle = generateCanvasFillColor(graphColor, bar.height, graphShaded).faded;
        ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
      }
    }
  };

  const drawPlayedBars = () => {
    const isPlaybackResumed = (audioRef?.current?.currentTime ?? 1) > 0;
    if (!isPlaybackResumed) clearGraph(playedCanvasRef); // only if playing from beginning
    const durationUpdated = Math.abs(duration - BUFFER_VS_HTML_DURATION_DIFFERENCE);
    const numberOfBars = graphData.length;
    const delay = (durationUpdated / numberOfBars) * 1000;
    let currentBar = 0, previousBar: number, previousTime: number | undefined;
    const progressBarCtx = progressLineRef?.current?.getContext('2d');
    const ctx = playedCanvasRef?.current?.getContext('2d');
    function drawBar() {
      if (!ctx || !progressBarCtx) return;
      currentBar = Math.round(numberOfBars * ((audioRef?.current?.currentTime ?? 1) / durationUpdated));
      if (previousTime === audioRef?.current?.currentTime || previousBar === currentBar) return;
      previousTime = audioRef?.current?.currentTime;
      previousBar = currentBar;
      if (currentBar >= numberOfBars) {
        clearInterval(interval.current);
        return;
      }
      const bar = adjustedBars[currentBar];
      ctx.fillStyle = generateCanvasFillColor(graphColor, bar.height, graphShaded).solid;
      ctx?.fillRect(bar.x,bar.y,bar.width,bar.height);
      // bar.x gets extremely close to the width of its canvas and then the progress bar goes out of bounds
      if (+bar.x.toFixed(3) < (progressLineRef?.current?.offsetWidth ?? 1)) {
        progressBarCtx?.clearRect(0, 0, progressLineRef?.current?.width ?? 1, progressLineRef?.current?.height ?? 1);
        progressBarCtx?.fillRect(bar.x, 0, 1, (progressLineRef?.current?.offsetHeight ?? 1));
      }
    }
    /* we want to immediately start drawing the graph
    setInterval will wait for the first interval to finish before executing the callback */
    drawBar();
    interval.current = setInterval(drawBar, delay);
  };

  return (
    <div className="voice-recorder_playbackcontainer">
      <audio ref={audioRef} controls id='playback_audio'>
        <track src="captions.vtt" kind="captions" srcLang="en" label="English" />
      </audio>
      <div className="voice-recorder_canvascontainer" />
    </div>
  )
}

export default Playback;
