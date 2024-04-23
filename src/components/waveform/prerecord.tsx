import { useEffect, useRef, useState } from 'react';
import { useAudio, useUserProps } from '../../context';
import { setUpCanvas as setUpCanvasUtil } from '../../utils';
import '../../styles/waveform.scss';
import { ObjType } from '../../../types';

/**
 * CREDITS: https://codepen.io/davidtorroija/pen/ZZzLpb?editors=0010 
 * https://stackoverflow.com/questions/55407563/web-audio-api-and-javascript-get-the-correct-picks-from-microphone
 */

function Prerecord() {
  const [audioProcessed, setAudioProcessed] = useState<boolean>(false);
  const {
    updateAudioRecording, updateAudioStatus, audioFile,
    setAudioFileProcessing,
  } = useAudio();
  const { rootElementId } = useUserProps();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const obj = useRef<ObjType>({});

  useEffect(() => {
    const canvas = setUpCanvasUtil(rootElementId, ['waveformgraph-record'], '.voice-recorder_recordcontainer');

    if (canvas) canvasRef.current = canvas[0];

    setAudioFileProcessing(true);

    convertAudioFile();

    return () => setAudioFileProcessing(false);
  }, []);

  const convertAudioFile = async () => {
    if (!audioFile) return;

    const canvas = setUpCanvasUtil(rootElementId, ['waveformgraph-record'], '.voice-recorder_recordcontainer');

    if (canvas) canvasRef.current = canvas[0];
    
    /* convert File to Blob */
    const arrayBuffer = await audioFile.arrayBuffer();
    const blob = new Blob([new Uint8Array(arrayBuffer)], {type: audioFile.type });
    obj.current.blob = blob;

    /* get audio duration */
    // added the any type because webkitAudioContext does not exist on window typeof globalThis
    const AudioContext = window.AudioContext || (window as any)?.webkitAudioContext;
    
    const audioContext = new AudioContext();
    
    const gainNode = audioContext.createGain();
    
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    obj.current.audioBuffer = audioBuffer;
    const analyserNode = audioContext.createAnalyser();

    const audioSource = audioContext.createBufferSource();
    audioSource.buffer = audioBuffer;

    audioSource.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    
    audioSource.connect(analyserNode);
    
    audioSource.playbackRate.value = 2;
    audioSource.start();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    
    const bufferLength = analyserNode.frequencyBinCount;

    const dataArray: Float32Array[] = [];
    const processAudio = () => {
      const dataArrayVal = new Float32Array(bufferLength);
      analyserNode.getFloatTimeDomainData(dataArrayVal);
      dataArray.push(dataArrayVal);

      // Check if we've processed the entire audio
      if (
        (audioContext.currentTime * 2 > audioBuffer.duration) &&
        (Math.abs((audioContext.currentTime * 2) - audioBuffer.duration) <= 0.1)
      ) {
        setAudioProcessed(true);
        return;
      }

      requestAnimationFrame(processAudio);
    }
    processAudio();
    obj.current.dataArray = dataArray;
  };

  useEffect(() => {
    if (audioProcessed && obj.current.dataArray) {
      const graphData = [];
      for (const dataArrayVal of obj.current.dataArray) {
        let maxFreq = -Infinity;
        maxFreq = Math.max(0, ...dataArrayVal ?? []);
        const freq = Math.max(1, Math.floor(maxFreq * 550));
        graphData.push({
          x: canvasRef?.current?.offsetWidth ?? 1,
          y: (( canvasRef?.current?.offsetHeight ?? 1) / 2) - (freq / 2),
          height: freq,
          width: GRAPH_WIDTH,
        });
      }
      if (obj.current.blob && obj.current.audioBuffer) {
        const recordingData = { blob: obj.current.blob, duration: obj.current.audioBuffer.duration, graphData: (graphData ?? []) }
        updateAudioRecording(recordingData);
        updateAudioStatus(PLAYING_REQUESTED);
      }
    }
  }, [audioProcessed]);


  return <div className="voice-recorder_recordcontainer" />;
}

export default Prerecord;
