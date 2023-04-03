import { useEffect } from 'react'
import { useAudio } from '../../context/audio';
import { useStopwatch } from 'react-timer-hook';
import { ReactComponent as StopIcon } from '../../assets/stop.svg';
import '../../styles/controllers.scss';

function Stop() {
  const { audioStatus } = useAudio();
  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  useEffect(() => {
    if (audioStatus === RECORDING) {
      start();
    } else if (
      audioStatus === PAUSED_PLAYING ||
      audioStatus === PAUSED_RECORDING ||
      audioStatus === STOPPED
    ) {
      pause();
    } else {
      reset();
    }
  }, [audioStatus]);

  const formatTime = (time: number) =>
    time.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  return (
    <div className={`voice-recorder_stopcontainer ${audioStatus === PAUSED_RECORDING ? 'voice-recorder_showblinking' : ''}`}>
      <div className="voice-recorder_control"><StopIcon /></div>
      <div className="voice-recorder_stopwatch">
        {hours ? <span>{hours}</span> : null}<span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
      </div>
    </div>
  )
}

export default Stop;
