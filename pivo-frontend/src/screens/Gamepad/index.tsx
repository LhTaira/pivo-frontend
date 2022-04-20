import React, { useState, useCallback } from 'react';
import { ButtonGamepad } from '../../components/ButtonGamepad';
import { Header } from '../../components/Header';

import { 
  Container,
  Title,
  Subtitle,
  Content,
  WrapVertical
} from './styles';

export function Gamepad(){
  const [up, setUp] = useState(false);

  const handleUp = useCallback(() => {
    setUp(true);
    console.log(up);
  }, [up])

  return (
    <Container>
      <Header title={'Escolha o modo de Controle'}/>
      <Title>Controle</Title>
      <Subtitle>Controle o Pivô de maneira simples</Subtitle>
      <Content>
      <ButtonGamepad onPress={handleUp} nameIcon="caretleft"/>
      <WrapVertical>
        <ButtonGamepad marginBottom={80} onPress={handleUp} nameIcon="caretup"/>
        <ButtonGamepad onPress={handleUp} nameIcon="caretdown"/>
      </WrapVertical>
      <ButtonGamepad onPress={handleUp} nameIcon="caretright"/>
      </Content>
    </Container>
  )
}