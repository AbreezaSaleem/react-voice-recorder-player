import { useState, useEffect } from 'react'
import { useAudio, useUserProps } from '../../context';
import Record from './record';
import Playback from './playback';
import Prerecord from './prerecord';
import '../../styles/waveform.scss';

function Waveform() {
  const { audioStatus } = useAudio();
  const { waveContainerStyle } = useUserProps();
  const [isRecordingOrPlayingback, setIsRecordingOrPlayingback] =
    useState<'playing' | 'recording' | 'prerecord' | ''>('');

  useEffect(() => {
    if (
      audioStatus === PLAYING ||
      audioStatus === PLAYING_REQUESTED ||
      audioStatus === PAUSED_PLAYING ||
      audioStatus === STOPPED
    ) {
      setIsRecordingOrPlayingback('playing');
    } else if (audioStatus === PROCESSING) {
      setIsRecordingOrPlayingback('prerecord');
    } else {
      setIsRecordingOrPlayingback('recording');
    }
  }, [audioStatus]);

  return (
    <div className="voice-recorder_waveformcontainer" style={waveContainerStyle}>
      { isRecordingOrPlayingback === 'playing' ? <Playback/> : null }
      { isRecordingOrPlayingback === 'prerecord' ? <Prerecord/> : null }
      { isRecordingOrPlayingback === 'recording' ? <Record/> : null }
    </div>
  )
}

export default Waveform;
