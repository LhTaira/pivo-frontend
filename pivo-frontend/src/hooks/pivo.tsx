import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import api from '../services/api';


interface PivoProviderProps {
  children: ReactNode;
}

interface IPivoContextData {
  pivoMode: string;
  setPivoModeValue(mode: string): void;
  up: boolean;
  down: boolean;
  left: boolean;
  right: boolean;
  upLeft: boolean;
  upRight: boolean;
  downRight: boolean;
  downLeft: boolean;

  handleUp(): void;
  handleUpRight(): void;
  handleUpLeft(): void;

  handleDown(): void;
  handleDownRight(): void;
  handleDownLeft(): void;

  handleLeft(): void;
  handleRight(): void;
}

const PivoContext = createContext({} as IPivoContextData);

const PivoProvider: React.FC<PivoProviderProps> = ({ children }) => {
  const [pivoMode, setPivoMode] = useState('');

  const [up, setUp] = useState(false);
  const [upRight, setUpRight] = useState(false);
  const [upLeft, setUpLeft] = useState(false);

  const [down, setDown] = useState(false);
  const [downRight, setDownRight] = useState(false);
  const [downLeft, setDownLeft] = useState(false);

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const handleUp = useCallback(async() => {
    if(down) {
      await api.post('path', {
        L0: setDown(false)
      });
    }

    if(downRight){
      await api.post('path', {
        R3: setDownRight(false)
      });
    }
    
    if(downLeft){
      await api.post('path', {
        L3: setDownLeft(false)
      });
    }

    if(left){
      await api.post('path', {
        L2: setLeft(false)
      });
    }

    if(right) {
      await api.post('path', {
        R3: setRight(false)
      });
    }

    if(upLeft) {
      await api.post('path', {
        L1: setUpLeft(false)
      });
    }
    if(upRight){
      await api.post('path', {
        R1: setUpRight(false)
      });
    }
    
    await api.post('path', {
      RO: setUp(true)
    });

  }, [down, downRight, downLeft, upLeft, upRight, left, right])

  const handleUpRight = useCallback(async() => {
    if(down) {
      await api.post('path', {
        L0: setDown(false)
      });
    }

    if(downRight){
      await api.post('path', {
        R3: setDownRight(false)
      });
    }
    
    if(downLeft){
      await api.post('path', {
        L3: setDownLeft(false)
      });
    }


    if(left){
      await api.post('path', {
        L2: setLeft(false)
      });
    }

    if(right) {
      await api.post('path', {
        R3: setRight(false)
      });
    }

    if(upLeft) {
      await api.post('path', {
        L1: setUpLeft(false)
      });
    }

    if(up) {
      await api.post('path', {
        RO: setUp(false)
      });
    } 

    await api.post('path', {
      R1: setUpRight(true)
    });
    
  }, [down, downRight, downLeft, upLeft, up, left, right])

  const handleUpLeft = useCallback(async() => {
    if(down) {
      await api.post('path', {
        L0: setDown(false)
      });
    }

    if(downRight){
      await api.post('path', {
        R3: setDownRight(false)
      });
    }
    
    if(downLeft){
      await api.post('path', {
        L3: setDownLeft(false)
      });
    }

    if(left){
      await api.post('path', {
        L2: setLeft(false)
      });
    }

    if(right) {
      await api.post('path', {
        R3: setRight(false)
      });
    }
    
    if(up) {
      await api.post('path', {
        RO: setUp(false)
      });
    } 

    if(upRight){
      await api.post('path', {
        R1: setUpRight(false)
      });
    }

    await api.post('path', {
      L1: setUpLeft(true)
    });

  }, [down, downRight, downLeft, upRight, up, left, right])

  const handleDown = useCallback(async() => {
    if(downRight){
      await api.post('path', {
        R3: setDownRight(false)
      });
    }
    
    if(downLeft){
      await api.post('path', {
        L3: setDownLeft(false)
      });
    }

    if(left){
      await api.post('path', {
        L2: setLeft(false)
      });
    }

    if(right) {
      await api.post('path', {
        R3: setRight(false)
      });
    }

    if(upLeft) {
      await api.post('path', {
        L1: setUpLeft(false)
      });
    }

    if(up) {
      await api.post('path', {
        RO: setUp(false)
      });
    } 

    if(upRight){
      await api.post('path', {
        R1: setUpRight(false)
      });
    }

    await api.post('path', {
      L0: setDown(true)
    });
  }, [downRight, downLeft, upRight, up, upLeft, left, right])

  const handleDownRight = useCallback(async() => {
    if(down) {
      await api.post('path', {
        L0: setDown(false)
      });
    }
    
    if(downLeft){
      await api.post('path', {
        L3: setDownLeft(false)
      });
    }

    if(left){
      await api.post('path', {
        L2: setLeft(false)
      });
    }

    if(right) {
      await api.post('path', {
        R3: setRight(false)
      });
    }

    if(upLeft) {
      await api.post('path', {
        L1: setUpLeft(false)
      });
    }

    if(up) {
      await api.post('path', {
        RO: setUp(false)
      });
    } 

    if(upRight){
      await api.post('path', {
        R1: setUpRight(false)
      });
    }

    await api.post('path', {
      R3: setDownRight(true)
    });
  }, [down, downLeft, upRight, up, upLeft, left, right])

  const handleDownLeft = useCallback(async() => {
    if(down) {
      await api.post('path', {
        L0: setDown(false)
      });
    }

    if(downRight){
      await api.post('path', {
        R3: setDownRight(false)
      });
    }

    if(left){
      await api.post('path', {
        L2: setLeft(false)
      });
    }

    if(right) {
      await api.post('path', {
        R3: setRight(false)
      });
    }

    if(upLeft) {
      await api.post('path', {
        L1: setUpLeft(false)
      });
    }

    if(up) {
      await api.post('path', {
        RO: setUp(false)
      });
    } 

    if(upRight){
      await api.post('path', {
        R1: setUpRight(false)
      });
    }

    await api.post('path', {
      L3: setDownLeft(true)
    });
  }, [down, downRight, upRight, up, upLeft, left, right])

  const handleLeft = useCallback(async() => {
    if(down) {
      await api.post('path', {
        L0: setDown(false)
      });
    }

    if(downRight){
      await api.post('path', {
        R3: setDownRight(false)
      });
    }
    
    if(downLeft){
      await api.post('path', {
        L3: setDownLeft(false)
      });
    }

    if(right) {
      await api.post('path', {
        R3: setRight(false)
      });
    }

    if(upLeft) {
      await api.post('path', {
        L1: setUpLeft(false)
      });
    }

    if(up) {
      await api.post('path', {
        RO: setUp(false)
      });
    } 

    if(upRight){
      await api.post('path', {
        R1: setUpRight(false)
      });
    }

    await api.post('path', {
      L2: setLeft(true)
    });
  }, [down, downRight, downLeft, upRight, up, upLeft, right])

  const handleRight = useCallback(async() => {
    if(down) {
      await api.post('path', {
        L0: setDown(false)
      });
    }

    if(downRight){
      await api.post('path', {
        R3: setDownRight(false)
      });
    }
    
    if(downLeft){
      await api.post('path', {
        L3: setDownLeft(false)
      });
    }

    if(left){
      await api.post('path', {
        L2: setLeft(false)
      });
    }

    if(upLeft) {
      await api.post('path', {
        L1: setUpLeft(false)
      });
    }

    if(up) {
      await api.post('path', {
        RO: setUp(false)
      });
    } 

    if(upRight){
      await api.post('path', {
        R1: setUpRight(false)
      });
    }

    await api.post('path', {
      R3: setRight(true)
    });
  }, [down, downRight, downLeft, upRight, up, upLeft, left])
  
  const setPivoModeValue = useCallback((mode: "manual" | "automatic" | "") => {
    setPivoMode(mode);
  }, []);


  return (
    <PivoContext.Provider value={{
      pivoMode,
      setPivoModeValue,
      up,
      down,
      left,
      right,
      upLeft,
      upRight,
      downRight,
      downLeft,
      handleUp,
      handleUpRight,
      handleUpLeft,
      handleDown,
      handleDownRight,
      handleDownLeft,
      handleLeft,
      handleRight,
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