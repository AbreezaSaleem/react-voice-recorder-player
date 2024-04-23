import { MouseEventHandler, ReactNode } from "react";

export type VoiceRecorderProps = {
  mainContainerStyle?: React.CSSProperties;
  height?: number | string;
  width?: number | string;
  controllerContainerStyle?: React.CSSProperties;
  controllerStyle?: React.CSSProperties;
  waveContainerStyle?: React.CSSProperties;
  graphColor?: string;
  graphShaded?: boolean;
  downloadable?: boolean;
  onAudioDownload?: (data: Blob) => void;
  onRecordingStart?: () => void;
  onRecordingEnd?: (data: Blob) => void;
  onPlayStart?: () => void;
  onPlayEnd?: (data: Blob) => void;
  onRecordingPause?: () => void;
  onPlayPause?: () => void;
}

export type CanvasObj = {
  audioContext?: AudioContext;
  analyserNode?: AnalyserNode;
  mediaRecorder?: MediaRecorder;
  dataArray?: Float32Array;
  graphData?: Array<GraphDataType>;
};

export type AudioObj = {
  status: string;
  recordedAudio: Blob | null;
};

export type GraphDataType = {
  x: number;
  y: number;
  height: number;
  width: number;
};

export type AudioRecordingDataType = {
  blob: Blob;
  duration: number;
  graphData: Array<GraphDataType>;
}

export interface AudioContextInterface {
  audioStatus?: string;
  audioFile?: File;
  audioRecording?: AudioRecordingDataType;
  audioFileProcessing?: boolean;
  updateAudioStatus: (status: string) => void;
  updateAudioRecording: (data: AudioRecordingDataType) => void;
  convertAudioFile: (file: File) => void;
  setAudioFileProcessing: (value: boolean) => void;
}

export interface UserPropsContextInterface extends VoiceRecorderProps {
  rootElementId: string;
}

export type ControllerType = {
  svg: ReactNode;
  disabled?: boolean;
  status: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  applyCircularStyles?: boolean;
  display?: boolean;
  rotate?: boolean;
}

export type GenerateCanvasColorType = {
  color: string;
  height?: number | null;
  graphShaded?: boolean;
}

export type CanvasColorType = {
  solid: string;
  faded: string;
}

export type ObjType = {
  blob?: Blob;
  audioBuffer?: AudioBuffer;
  dataArray?: Float32Array[];
}
