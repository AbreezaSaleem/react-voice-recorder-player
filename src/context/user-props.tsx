import { createContext, useContext } from 'react';

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
