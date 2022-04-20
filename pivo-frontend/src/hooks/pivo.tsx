import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';


interface PivoProviderProps {
  children: ReactNode;
}

interface IPivoContextData {
  pivoMode: string;
  setPivoModeValue(mode: string): void;
}

const PivoContext = createContext({} as IPivoContextData);

const PivoProvider: React.FC<PivoProviderProps> = ({ children }) => {
  const [pivoMode, setPivoMode] = useState('');
  
  const setPivoModeValue = useCallback((mode: "manual" | "automatic") => {
    setPivoMode(mode);
  }, []);


  return (
    <PivoContext.Provider value={{
      pivoMode,
      setPivoModeValue
    }}>
      { children }
    </PivoContext.Provider>
  )
}

function usePivo(): IPivoContextData{
  const context = useContext(PivoContext)
  if (!context) {
    throw new Error('usePivo must be used within an PivoProvider');
  }
  return context;
}

export { PivoProvider, usePivo }