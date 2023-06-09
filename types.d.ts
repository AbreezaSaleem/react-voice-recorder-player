type VoiceRecorderProps = {
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

type CanvasObj = {
  audioContext?: AudioContext;
  analyserNode?: AnalyserNode;
  mediaRecorder?: MediaRecorder;
  dataArray?: Float32Array;
  graphData?: Array<GraphDataType>;
};

type AudioObj = {
  status: string;
  recordedAudio: Blob | null;
};

type GraphDataType = {
  x: number;
  y: number;
  height: number;
  width: number;
};

type AudioRecordingDataType = {
  blob: Blob;
  duration: number;
  graphData: Array<GraphDataType>;
}

interface AudioContextInterface {
  audioStatus?: string;
  audioRecording?: AudioRecordingDataType;
  updateAudioStatus: (status: string) => void;
  updateAudioRecording: (data: AudioRecordingDataType) => void;
}

interface UserPropsContextInterface extends VoiceRecorderProps {
  rootElementId: string;
}

type ControllerType = {
  svg: SVGGraphicsElements;
  disabled?: boolean;
  status: boolean;
  onClick: (data: event) => void;
  applyCircularStyles?: boolean;
  display?: boolean;
}

type GenerateCanvasColorType = {
  color: string;
  height?: number | null;
  graphShaded?: boolean;
}

type CanvasColorType = {
  solid: string;
  faded: string;
}
