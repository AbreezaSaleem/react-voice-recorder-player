import { useEffect, useRef, useState } from 'react';
import { useAudio, useUserProps } from '../../context';
import { setUpCanvas as setUpCanvasUtil, generateCanvasFillColor } from '../../utils';
import '../../styles/waveform.scss';

/**
 * CREDITS: https://codepen.io/davidtorroija/pen/ZZzLpb?editors=0010 
 * https://stackoverflow.com/questions/55407563/web-audio-api-and-javascript-get-the-correct-picks-from-microphone
 */

const TIME_OFFSET = 100;
const GRAPH_WIDTH = 2;

function Record() {
  const { audioStatus = '', updateAudioRecording } = useAudio();
  const { graphColor, graphShaded, rootElementId, onRecordingEnd } = useUserProps();
  const [now, setNow] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const obj = useRef<CanvasObj>({});
  const status = useRef<string>(audioStatus);

  useEffect(() => {
    status.current = audioStatus;
    if (audioStatus === RECORDING) {
      /* recording resumed */ 
      if (obj?.current?.audioContext?.state === 'suspended') {
        obj.current.audioContext.resume().then(loop);
        obj.current?.mediaRecorder?.resume();
      } else if (!obj?.current?.audioContext?.state) { /* recording initiated */
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
          .then(setUpAudioAPI);
      }
    }
    if (audioStatus === STOPPED) {
      obj?.current?.mediaRecorder?.stop();
    }
    if (audioStatus === PAUSED_RECORDING) {
      obj?.current?.audioContext?.suspend();
      obj?.current?.mediaRecorder?.pause();
    }
  }, [audioStatus]);

  useEffect(() => {
    setUpCanvas();
    window.addEventListener("resize", setUpCanvas);

    () => window.removeEventListener("resize", setUpCanvas);
  }, []);

  const setUpCanvas = () => {
    const canvas = setUpCanvasUtil(rootElementId, ['waveformgraph-record'], '.voice-recorder_recordcontainer');

    if (canvas) canvasRef.current = canvas[0];
  };

  const setUpAudioAPI = (micStream: MediaStream) => {
    try {
      // added the any type because webkitAudioContext does not exist on window typeof globalThis
      const AudioContext = window.AudioContext || (window as any)?.webkitAudioContext;
      const audioContext = new AudioContext();
      obj.current.audioContext = audioContext;
      /* this gives you the 'audio node' whose media is obtained from the microphone */
      /* an 'audio node' represents an audio processing module. the html audio
      and video tags are audio nodes */
      const sourceNode = audioContext.createMediaStreamSource(micStream);

      /* this returns an 'analyser node' which is used to obtain
      audio time and frequency data to create data visualizations */
      obj.current.analyserNode = audioContext.createAnalyser();
    
      /* connect function will connect the output of the sourceNode to the input of the analyser */
      sourceNode.connect(obj?.current?.analyserNode);
      /* if you want to play the audio you have to 'connect' to audioContext.destination
      this will streamline the audio to your device's speakers  */
    
      /* The higher the number of fftSize, the more data points we get and the more graphData we’ll display. */
      obj.current.analyserNode.fftSize = 128;
      /* frequencyBinCount = fftSize / 2 */
      const bufferLength = obj.current.analyserNode.frequencyBinCount;
      const dataArray = new Float32Array(bufferLength);
      /* this creates an array of size fftSize that will
        hold all of the data points that we collect from the sound */
      obj.current.dataArray = dataArray;

      /* this part handles the storing of audio data */
      const mediaRecorder = new MediaRecorder(micStream);
      obj.current.mediaRecorder = mediaRecorder;
      mediaRecorder.start();
      mediaRecorder.addEventListener('dataavailable', async (event) => {
        const arrayBuffer = await event.data.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const recordingData = { blob: event.data, duration: audioBuffer.duration, graphData: (obj.current.graphData ?? []) }
        onRecordingEnd?.(event.data);
        updateAudioRecording(recordingData);
      });
      mediaRecorder.addEventListener('stop', () => {
        // remove that red dot on the browser tab
        micStream.getTracks()
          .forEach(track => track.stop()); 
        sourceNode.disconnect();
        audioContext.close();
      });
      loop()
    } catch (error) {
      console.log('error', error)
    }
  };

  const loop = () => {
    const ctx = canvasRef?.current?.getContext('2d');

    if (status.current !== RECORDING) return null;
  
    ctx?.clearRect(0, 0, canvasRef?.current?.width ?? 1, canvasRef?.current?.height ?? 1);
    let maxFreq = -Infinity;
    
    if (Number(performance.now())  > now) {
      setNow(Number(performance.now() / TIME_OFFSET));

      if (!obj?.current?.dataArray) return null;
  
      /* getFloatTimeDomainData copies the current waveform, or time-domain,
      data into a Float32Array array passed into it */
      obj?.current?.analyserNode?.getFloatTimeDomainData(obj?.current?.dataArray)
  
      maxFreq = Math.max(0, ...obj?.current?.dataArray ?? [])
    
      const freq = Math.max(1, Math.floor(maxFreq * 550));

      if (obj.current.graphData === undefined) {
        obj.current.graphData = [];
      }

      obj.current?.graphData.push({
        x: canvasRef?.current?.offsetWidth ?? 1,
        y: (( canvasRef?.current?.offsetHeight ?? 1) / 2) - (freq / 2),
        height: freq,
        width: GRAPH_WIDTH,
      });
    }
    draw();
    requestAnimationFrame(loop);
  };

  const draw = () => {
    const ctx = canvasRef?.current?.getContext('2d');
    if (!ctx || !obj.current?.graphData) return null;

    for (let i=0; i < obj.current?.graphData.length ; i++) {
      const bar = obj.current?.graphData[i];
      if (!bar) continue;
      ctx.fillStyle = generateCanvasFillColor(graphColor, bar.height, graphShaded).solid;
      ctx?.fillRect(bar.x,bar.y,bar.width,bar.height);
      bar.x = bar.x - GRAPH_WIDTH;
    }
  };

  return <div className="voice-recorder_recordcontainer" />;
}

export default Record;
