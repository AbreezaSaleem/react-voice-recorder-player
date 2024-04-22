import { useState, createContext, useContext } from 'react';

const AudioContext = createContext<AudioContextInterface>({
  audioStatus: '',
  audioFile: undefined,
  audioRecording: undefined,
  audioFileProcessing: false,
  updateAudioStatus: () => undefined,
  updateAudioRecording: () => undefined,
  convertAudioFile: () => undefined,
  setAudioFileProcessing: () => undefined,
});

/**
 * 😣 should clean up the data structure in this context
 */

function AudioProvider({ children } : { children: React.ReactNode }) {
  const [audioStatus, setAudioStatus] = useState<string>('');
  const [audioRecording, setAudioRecording] = useState<AudioRecordingDataType>();
  const [audioFile, setAudioFile] = useState<File>();
  const [audioFileProcessing, setAudioFileProcessing] = useState<boolean>(false);

  const updateAudioStatus = (status: string) => setAudioStatus(status);
  
  const updateAudioRecording = (audioRecording: AudioRecordingDataType) =>
    setAudioRecording(audioRecording);
  
  const convertAudioFile = async (file: File) =>
    setAudioFile(file);

  const value = {
    audioStatus, audioRecording,
    updateAudioStatus, updateAudioRecording,
    convertAudioFile, audioFile,
    setAudioFileProcessing, audioFileProcessing
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
