import { createContext, useContext } from 'react';
import { UserPropsContextInterface } from '../../types';

const UserPropsContext = createContext<UserPropsContextInterface>({
  mainContainerStyle: {},
  controllerContainerStyle: {},
  controllerStyle: {},
  waveContainerStyle: {},
  graphColor: '#000',
  graphShaded: false,
  height: 'inherit',
  width: 'inherit',
  downloadable: false,
  onAudioDownload: () => undefined,
  onRecordingStart: () => undefined,
  onRecordingEnd: () => undefined,
  onPlayStart: () => undefined,
  onPlayEnd: () => undefined,
  onRecordingPause: () => undefined,
  onPlayPause: () => undefined,
  rootElementId: '',
});

function UserPropsProvider({ userPropsValue, children } :
  { userPropsValue: UserPropsContextInterface, children: React.ReactNode }) 
{
  return (
    <UserPropsContext.Provider value={userPropsValue}>{children}</UserPropsContext.Provider>
  );
}

function useUserProps() {
  const context = useContext(UserPropsContext);
  if (context === undefined) {
    throw new Error('useUserProps must be used within a UserPropsProvider');
  }
  return context;
}

export { UserPropsProvider, useUserProps };
