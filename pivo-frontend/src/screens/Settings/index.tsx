import React, { useCallback, useState } from 'react';
import { Header } from '../../components/Header';
import { 
  Container,
  Title,
  Content,
  Line,
  Subtitle,
  SectionOne,
} from './styles';
import { Toogle } from '../../components/Toogle';
import { usePivo } from '../../hooks/pivo';
import { useSettings } from '../../hooks/settings';

export function Settings(){
  const { 
    activePipe, 
    bombs, 
    arms, 
    handleActivePipe,
    handleBombs,
    handleArms,
  } = useSettings();

  const { pivoMode }= usePivo();
  return (
    <Container>
      <Header pivoMode={pivoMode} title={`Ligar e Desligar`}/>
      <Title>Controle Geral</Title>
      <Subtitle>Controle Parâmetros gerais como bombas, motores e desligue o pivô quando quiser</Subtitle>
      <Content>
        <Toogle 
            title={'Pipe'}
            active={activePipe}
            handle={handleActivePipe}
          />
          <Line />
          <SectionOne>
            <Toogle 
              title={'Bomba'}
              active={!!activePipe && bombs}
              handle={handleBombs}
            />
            <Toogle 
              title={'Circular'}
              active={!!activePipe && arms}
              handle={handleArms}
            />
          </SectionOne>
      </Content>
    </Container>
  )
}