import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';


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

  const handleUp = useCallback(() => {
    if(down) setDown(false);
    if(downRight) setDownRight(false);
    if(downLeft) setDownLeft(false);

    if(left) setLeft(false);
    if(right) setRight(false);

    if(upLeft) setUpLeft(false);
    if(upRight) setUpRight(false);

    setUp(true);
  }, [down, downRight, downLeft, upLeft, upRight, left, right])

  const handleUpRight = useCallback(() => {
    if(down) setDown(false);
    if(downRight) setDownRight(false);
    if(downLeft) setDownLeft(false);

    if(left) setLeft(false);
    if(right) setRight(false);

    if(upLeft) setUpLeft(false);
    if(up) setUp(false);

    setUpRight(true);
  }, [down, downRight, downLeft, upLeft, up, left, right])

  const handleUpLeft = useCallback(() => {
    if(down) setDown(false);
    if(downRight) setDownRight(false);
    if(downLeft) setDownLeft(false);

    if(left) setLeft(false);
    if(right) setRight(false);

    if(upRight) setUpRight(false);
    if(up) setUp(false);

    setUpLeft(true);
  }, [down, downRight, downLeft, upRight, up, left, right])

  const handleDown = useCallback(() => {
    if(downRight) setDownRight(false);
    if(downLeft) setDownLeft(false);

    if(left) setLeft(false);
    if(right) setRight(false);

    if(upLeft) setUpLeft(false);
    if(upRight) setUpRight(false);
    if(up) setUp(false);

    setDown(true);
  }, [downRight, downLeft, upRight, up, upLeft, left, right])

  const handleDownRight = useCallback(() => {
    if(down) setDown(false);
    if(downLeft) setDownLeft(false);

    if(left) setLeft(false);
    if(right) setRight(false);

    if(upLeft) setUpLeft(false);
    if(upRight) setUpRight(false);
    if(up) setUp(false);

    setDownRight(true);
  }, [down, downLeft, upRight, up, upLeft, left, right])

  const handleDownLeft = useCallback(() => {
    if(down) setDown(false);
    if(downRight) setDownRight(false);

    if(left) setLeft(false);
    if(right) setRight(false);

    if(upLeft) setUpLeft(false);
    if(upRight) setUpRight(false);
    if(up) setUp(false);

    setDownLeft(true);
  }, [down, downRight, upRight, up, upLeft, left, right])

  const handleLeft = useCallback(() => {
    if(down) setDown(false);
    if(downRight) setDownRight(false);
    if(downLeft) setDownLeft(false);

    if(right) setRight(false);

    if(upLeft) setUpLeft(false);
    if(upRight) setUpRight(false);
    if(up) setUp(false);

    setLeft(true);
  }, [down, downRight, downLeft, upRight, up, upLeft, right])

  const handleRight = useCallback(() => {
    if(down) setDown(false);
    if(downRight) setDownRight(false);
    if(downLeft) setDownLeft(false);

    if(left) setLeft(false);

    if(upLeft) setUpLeft(false);
    if(upRight) setUpRight(false);
    if(up) setUp(false);

    setRight(true);
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