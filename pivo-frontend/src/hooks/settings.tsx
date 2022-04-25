import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import api from '../services/api';


interface SettingsProviderProps {
  children: ReactNode;
}

interface ISettingsContextData {
  activePipe: boolean;
  bombs: boolean;
  arms: boolean;
  handleActivePipe(): void;
  handleBombs(): void;
  handleArms(): void;
}

const SettingsContext = createContext({} as ISettingsContextData);

const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [activePipe, setActivePipe] = useState(true);
  const [bombs, setBombs] = useState(true);
  const [arms, setArms] = useState(true);
  const [reels, setReels] = useState(true);
  const [wheels, setWheels] = useState(true);

  const handleActivePipe = useCallback(async () => {
    if(!activePipe){
      await api.post('status', {
        pump: setBombs(true),
        arm: setArms(true),
        
      });
    }
    await api.post('status', {
      pipe: setActivePipe(!activePipe),
    });
  }, [activePipe])

  const handleBombs = useCallback(async() => {
    await api.post('status', {
      pump: setBombs(!bombs)
    });
  }, [bombs])

  const handleArms = useCallback(async() => {
    await api.post('status', {
      arm: setArms(!arms)
    });
  }, [arms])

  return (
    <SettingsContext.Provider value={{
      activePipe,
      bombs,
      arms,
      handleActivePipe,
      handleBombs,
      handleArms,
    }}>
      { children }
    </SettingsContext.Provider>
  )
}

function useSettings(): ISettingsContextData{
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within an SettingsProvider');
  }
  return context;
}

export { SettingsProvider, useSettings }