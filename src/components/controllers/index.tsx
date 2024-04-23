/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/// <reference types="vite-plugin-svgr/client" /> // this imports the vite-plugin-svgr declaration file
import { useEffect, useState, useRef } from 'react';
import { useAudio, useUserProps } from '../../context';
import { ReactComponent as Pause } from '../../assets/pause.svg';
import { ReactComponent as Play } from '../../assets/play.svg';
import { ReactComponent as Record } from '../../assets/record.svg';
import { ReactComponent as Redo } from '../../assets/redo.svg';
import { ReactComponent as Download } from '../../assets/download.svg';
import { ReactComponent as Upload } from '../../assets/upload.svg';
import { ReactComponent as Loading } from '../../assets/loading.svg';
import Stop from './Stop';
import '../../styles/controllers.scss';
import { ControllerType } from '../../../types';

const INITIAL_BUTTON_STATUSES = {
  showRecordBtn: false,
  showPlayBtn: false,
  showPauseBtn: false,
  showStopBtn: false,
  showRedoBtn: false,
  showUploadBtn: false,
  showLoadingBtn: false,
};

function Controllers() {
  const downloadButtonRef = useRef<HTMLAnchorElement | null>(null);
  const uploadButtonRef = useRef<HTMLInputElement | null>(null);
  const { audioStatus, updateAudioStatus, audioRecording, convertAudioFile } = useAudio();
  const {
    controllerContainerStyle,
    controllerStyle,
    downloadable = true,
    uploadAudioFile = true,
    onAudioDownload,
    onRecordingStart,
    onPlayStart,
    onRecordingPause,
    onPlayPause,
    rootElementId,
  } = useUserProps();
  const [buttonStatuses, setButtonStatuses] = useState<Record<string, boolean>>(INITIAL_BUTTON_STATUSES);

  const renderControl = (
    { svg, disabled, status, onClick, applyCircularStyles = true, display = true, rotate = false } : ControllerType
  )=> {
    if (!status) return null;
    if (!display) return null;
    
    let className = `${applyCircularStyles ? 'voice-recorder_control' : ''} voice-recorder_controlgeneric`;
    className += `${rotate ? ' voice-recorder_rotate' : ''}`;

    return (
      <button onClick={onClick} disabled={disabled} className={className} style={controllerStyle}>
        {svg}
      </button>
    )
  };

  const updateAudio = (status: string) => () => {
    updateAudioStatus(status);
  };

  const requestMicrophone = () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(updateAudio(RECORDING)).catch(() => alert('Please allow acccess to your microphone to continue.'));
  };

  const downloadBlob = () => {
    const { blob = '' } = audioRecording || {};
    if (!blob || !downloadButtonRef.current) return null;
    const url = URL.createObjectURL(blob);
    downloadButtonRef.current.href = url;
    downloadButtonRef.current.download = 'audio.wav';
    downloadButtonRef.current.click();
  };

  const uploadFileSelection = () => {
    if (uploadButtonRef.current) {
      uploadButtonRef.current.click();
    }
  };

  const uploadFile = (file: File) => {
    if (file) {
      convertAudioFile(file);
      updateAudioStatus(PROCESSING);
    }
  };

  useEffect(() => {
    const rootElement = document.getElementById(rootElementId) as HTMLElement;
    if (rootElement) {
      const controlcontainer = rootElement.querySelector('.voice-recorder_controlscontainer') as HTMLElement;
      if (rootElement && controlcontainer) {
        const { height } = rootElement.getBoundingClientRect();
        controlcontainer.style.height = `${height / 3}px`;
      }
    }

    if (uploadButtonRef.current) {
      uploadButtonRef.current.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target?.files) {
          uploadFile(target.files[0]);
          target.value = ''; 
        }
      });
    }

    return () => {
      if (uploadButtonRef.current) {
        uploadButtonRef.current.removeEventListener('change', () => null);
      }
    }
  }, []);

  useEffect(() => {
    if (audioRecording) {
      const { blob = '' } = audioRecording || {};
      if (!blob || !onAudioDownload) return;
      onAudioDownload(blob);
    }
  }, [audioRecording]);

  useEffect(() => {
    switch (audioStatus) {
      case '':
        setButtonStatuses({
          ...INITIAL_BUTTON_STATUSES,
          showRecordBtn: true,
          showUploadBtn: true,
        });
        break;
      case RECORDING: {
        onRecordingStart?.();
        setButtonStatuses({
          ...INITIAL_BUTTON_STATUSES,
          showPauseBtn: true,
          showStopBtn: true,
        });
        break;
      }
      case PAUSED_RECORDING: {
        onRecordingPause?.();
        setButtonStatuses({
          ...INITIAL_BUTTON_STATUSES,
          showStopBtn: true,
          showRecordBtn: true,
        });
        break;
      }
      case PAUSED_PLAYING: {
        onPlayPause?.();
        setButtonStatuses({
          ...INITIAL_BUTTON_STATUSES,
          showPlayBtn: true,
          showPauseBtn: true,
          showRedoBtn: true,
        });
        break;
      }
      case PLAYING: {
        onPlayStart?.();
        setButtonStatuses({
          ...INITIAL_BUTTON_STATUSES,
          showPauseBtn: true,
          showPlayBtn: true,
          showRedoBtn: true,
        });
        break;
      }
      case STOPPED: {
        setButtonStatuses({
          ...INITIAL_BUTTON_STATUSES,
          showPauseBtn: true,
          showPlayBtn: true,
          showRedoBtn: true,
        });
        break;
      }
      case PROCESSING: {
        setButtonStatuses({
          ...INITIAL_BUTTON_STATUSES,
          showRecordBtn: true,
          showLoadingBtn: true,
        });
        break;
      }
      default:
        setButtonStatuses(INITIAL_BUTTON_STATUSES);
    }
  }, [audioStatus]);

  return (
    <div className="voice-recorder_controlscontainer" style={controllerContainerStyle}>
      <div className="voice-recorder_controls">
        {renderControl({
          svg: <Record />,
          disabled: audioStatus === PROCESSING,
          status: buttonStatuses.showRecordBtn,
          onClick: requestMicrophone,
        })}
        {renderControl({
          svg: <Pause />,
          disabled: audioStatus === STOPPED || audioStatus === PAUSED_RECORDING || audioStatus === PAUSED_PLAYING,
          status: buttonStatuses.showPauseBtn,
          onClick: updateAudio(
            audioStatus === RECORDING ? PAUSED_RECORDING : PAUSED_PLAYING
          ),
        })}
        {renderControl({
          svg: <Play />,
          disabled: false,
          status: buttonStatuses.showPlayBtn,
          onClick: updateAudio(PLAYING_REQUESTED),
        })}
        {renderControl({
          svg: <Stop />,
          disabled: false,
          status: buttonStatuses.showStopBtn,
          onClick: updateAudio(STOPPED),
          applyCircularStyles: false,
        })}
        {renderControl({
          svg: <Redo />,
          disabled: false,
          status: buttonStatuses.showRedoBtn,
          onClick: updateAudio(''),
        })}
        <div className="voice-recorder_download">
          {renderControl({
            svg: <Download />,
            disabled: false,
            status: buttonStatuses.showRedoBtn,
            onClick: downloadBlob,
            display: downloadable,
          })}
          {renderControl({
            svg: <Upload />,
            disabled: false,
            status: buttonStatuses.showUploadBtn,
            onClick: uploadFileSelection,
            display: uploadAudioFile,
          })}
          {renderControl({
            svg: <Loading />,
            disabled: true,
            rotate: true,
            status: buttonStatuses.showLoadingBtn,
            onClick: () => undefined,
          })}
        </div>
      </div>
      <input ref={uploadButtonRef} type="file" style={{display: "none"}} accept="audio/*" />
      <a ref={downloadButtonRef} download style={{display: "none"}} className="voice-recorder_downloadfile" />
    </div>
  )
}

export default Controllers;
