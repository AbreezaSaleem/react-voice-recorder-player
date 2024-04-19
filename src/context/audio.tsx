import { useState, createContext, useContext, useRef } from 'react';
import { setUpCanvas as setUpCanvasUtil, generateCanvasFillColor } from '../utils';
import { useUserProps } from './user-props';

const AudioContext = createContext<AudioContextInterface>({
  audioStatus: '',
  audioRecording: undefined,
  updateAudioStatus: () => undefined,
  updateAudioRecording: () => undefined,
  convertAudioFile: () => undefined,
});

/**
 * 😣 should clean up the data structure in this context
 */

function AudioProvider({ children } : { children: React.ReactNode }) {
  const { graphColor, graphShaded, rootElementId, onRecordingEnd } = useUserProps();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [audioStatus, setAudioStatus] = useState<string>('');
  const [audioRecording, setAudioRecording] = useState<AudioRecordingDataType>();

  const updateAudioStatus = (status: string) => setAudioStatus(status);

  
  const updateAudioRecording = (audioRecording: AudioRecordingDataType) =>
    setAudioRecording(audioRecording);
  
  const convertAudioFile = async (file: File) => {
    const canvas = setUpCanvasUtil(rootElementId, ['waveformgraph-record'], '.voice-recorder_recordcontainer');

    if (canvas) canvasRef.current = canvas[0];
    
    /* convert File to Blob */
    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([new Uint8Array(arrayBuffer)], {type: file.type });

    /* get audio duration */
    // added the any type because webkitAudioContext does not exist on window typeof globalThis
    const AudioContext = window.AudioContext || (window as any)?.webkitAudioContext;
    
    const audioContext = new AudioContext();
    
    const gainNode = audioContext.createGain();

    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    console.log('array', arrayBuffer)
    console.log('audio', audioBuffer)
    const analyserNode = audioContext.createAnalyser();

    // const audioSource = audioContext.createBufferSource();
    const audioSource = audioContext.createBufferSource();
    audioSource.buffer = audioBuffer;
    console.log('source', audioSource)

    audioSource.connect(gainNode);
    audioSource.connect(audioContext.destination);
    gainNode.connect(audioContext.destination);
    
    audioSource.connect(analyserNode);
    
    // analyserNode.connect(audioContext.destination);
    audioSource.playbackRate.value = 2;
    audioSource.start();
    // gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    // audioContext.suspend();
    const bufferLength = analyserNode.frequencyBinCount;

    const dataArray: Array<Float32Array> = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const dataArrayVal = new Float32Array(bufferLength);
      analyserNode.getFloatTimeDomainData(dataArrayVal);
      console.log('dataArrayVal:', (audioContext.currentTime * 2), audioBuffer.duration, dataArrayVal);
      dataArray.push(dataArrayVal);

      // Check if we've processed the entire audio
      if (Math.abs((audioContext.currentTime * 2) - audioBuffer.duration) < 0.01) {
        break;  
      }
    }

    const graphData = [];
    for (const dataArrayVal of dataArray) {
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
    const recordingData = { blob, duration: audioBuffer.duration, graphData: (graphData ?? []) }
    updateAudioRecording(recordingData);
    updateAudioStatus(PLAYING_REQUESTED);
  };

  const value = {
    audioStatus, audioRecording, updateAudioStatus, updateAudioRecording, convertAudioFile,
  };
  
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within a AudioProvider');
  }
  return context;
}

export { AudioProvider, useAudio };
