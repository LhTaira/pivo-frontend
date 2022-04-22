import React, { useState, useCallback } from 'react';
import { DiagonalButton } from '../../components/DiagonalButton';
import { ButtonGamepad } from '../../components/ButtonGamepad';
import { Header } from '../../components/Header';

import { 
  Container,
  Title,
  Subtitle,
  Content,
  WrapVertical,
  WrapLeftDiagonal
} from './styles';
import { usePivo } from '../../hooks/pivo';

export function Gamepad(){
  const { pivoMode }= usePivo();
  const [up, setUp] = useState(false);
  

  const handleUp = useCallback(() => {
    setUp(true);
    console.log(up);
  }, [up])

  return (
    <Container>
      <Header pivoMode={pivoMode} title={'Controle o Pivô Manualmente'}/>
      <Title>Controle</Title>
      <Subtitle>Controle o Pivô de maneira simples</Subtitle>
      <Content>

        <WrapLeftDiagonal>
          <DiagonalButton onPress={handleUp} />
          <ButtonGamepad marginTop={28} marginBottom={20} onPress={handleUp} nameIcon="caretleft"/>
          <DiagonalButton onPress={handleUp} />
        </WrapLeftDiagonal>
        
        <WrapVertical>
          <ButtonGamepad marginBottom={80} onPress={handleUp} nameIcon="caretup"/>
          <ButtonGamepad onPress={handleUp} nameIcon="caretdown"/>
        </WrapVertical>
        
        <WrapLeftDiagonal>
          <DiagonalButton onPress={handleUp} />
          <ButtonGamepad marginTop={28} marginBottom={20} onPress={handleUp} nameIcon="caretright"/>
          <DiagonalButton onPress={handleUp} />
        </WrapLeftDiagonal>
      </Content>
    </Container>
  )
}