import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import api from '../services/api';


interface SettingsProviderProps {
  children: ReactNode;
}

interface ISettingsContextData {
  activePipe: boolean;
  bombs: boolean;
  arms: boolean;
  reels: boolean;
  wheels: boolean;
  handleActivePipe(): void;
  handleBombs(): void;
  handleArms(): void;
  handleReels(): void;
  handleWheels(): void;
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
        reel: setReels(true),
        whhel: setWheels(true),
        
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

  const handleReels = useCallback(async() => {
    await api.post('status', {
      reel: setReels(!reels)
    });
    setReels(!reels);
  }, [reels])

  const handleWheels = useCallback(async() => {
    await api.post('status', {
      whhel: setWheels(!wheels)
    });
    
  }, [wheels])

  return (
    <SettingsContext.Provider value={{
      activePipe,
      bombs,
      arms,
      reels,
      wheels,
      handleActivePipe,
      handleBombs,
      handleArms,
      handleReels,
      handleWheels,
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