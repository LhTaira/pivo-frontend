import React, { useCallback } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { SwapButton } from '../SwapButton';
import { 
  Container,
  Title,
} from './styles';
import { usePivo } from '../../hooks/pivo';
import { useSettings } from '../../hooks/settings';

interface HeaderProps {
  title: string;
  pivoMode: string;
}

export function Header({ title, pivoMode }: HeaderProps){
  const { setPivoModeValue } = usePivo();
  const { 
    handleActivePipe,
  } = useSettings();

  const handleSwap = useCallback(() => {
    setPivoModeValue("");
  }, [setPivoModeValue])

  return (
      <Container>
        {!!pivoMode && <SwapButton onPress={handleSwap} nameIcon={"swap-vertical"}/>}
        <Title>{title}</Title>
      </Container>
  )
}