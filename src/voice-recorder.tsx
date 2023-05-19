import { useId } from "react";
import PropTypes from "prop-types";
import Waveform from './components/waveform';
import Controllers from './components/controllers';
import { AudioProvider, UserPropsProvider } from './context';
import './styles/voice-recorder.scss';

export const VoiceRecorder: React.FC<VoiceRecorderProps> = (props) => {
  const {
    mainContainerStyle,
    height,
    width,
    ...rest
  } = props;
  const id = useId();

  const mainContainerStyleComplete = {
    ...mainContainerStyle,
    height,
    width,
  }

  const rootElementId = `voice-recorder-${id}`;

  return (
    <AudioProvider>
      <UserPropsProvider userPropsValue={{...rest, rootElementId}}>
        <div id={rootElementId} className="voice-recorder_maincontainer" style={mainContainerStyleComplete}>
          <Waveform />
          <Controllers />
        </div>
      </UserPropsProvider >
    </AudioProvider>
  );
};

VoiceRecorder.propTypes = {
  mainContainerStyle: PropTypes.object,
  height: PropTypes.string || PropTypes.number,
  width: PropTypes.string || PropTypes.number,
};
