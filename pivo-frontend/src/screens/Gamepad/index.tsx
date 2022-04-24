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
  const { 
    pivoMode,
    handleUp,
    handleUpLeft,
    handleUpRight,
    handleDown,
    handleDownLeft,
    handleDownRight,
    handleLeft,
    handleRight
  } = usePivo();


  return (
    <Container>
      <Header pivoMode={pivoMode} title={'Controle o Pivô Manualmente'}/>
      <Title>Controle</Title>
      <Subtitle>Controle o Pivô de maneira simples</Subtitle>
      <Content>

        <WrapLeftDiagonal>
          <DiagonalButton onPress={handleUpLeft} />
          <ButtonGamepad marginTop={28} marginBottom={20} onPress={handleLeft} nameIcon="caretleft"/>
          <DiagonalButton onPress={handleDownLeft} />
        </WrapLeftDiagonal>
        
        <WrapVertical>
          <ButtonGamepad marginBottom={80} onPress={handleUp} nameIcon="caretup"/>
          <ButtonGamepad onPress={handleDown} nameIcon="caretdown"/>
        </WrapVertical>
        
        <WrapLeftDiagonal>
          <DiagonalButton onPress={handleUpRight} />
          <ButtonGamepad marginTop={28} marginBottom={20} onPress={handleRight} nameIcon="caretright"/>
          <DiagonalButton onPress={handleDownRight} />
        </WrapLeftDiagonal>
      </Content>
    </Container>
  )
}