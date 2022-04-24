import React, { useCallback, useState } from 'react';
import { Header } from '../../components/Header';
import { 
  Container,
  Title,
  Content,
  Line,
  Subtitle,
  SectionOne,
  SectionTwo,
} from './styles';
import { Toogle } from '../../components/Toogle';
import { usePivo } from '../../hooks/pivo';
import { useSettings } from '../../hooks/settings';

export function Settings(){
  const { 
    activePipe, 
    bombs, 
    arms, 
    reels, 
    wheels,
    handleActivePipe,
    handleBombs,
    handleArms,
    handleReels,
    handleWheels
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
              title={'Braço'}
              active={!!activePipe && arms}
              handle={handleArms}
            />
          </SectionOne>
          <SectionTwo>
            <Toogle 
              title={'Carretel'}
              active={!!activePipe && reels}
              handle={handleReels}
            />
            <Toogle 
              title={'Rodas'}
              active={!!activePipe && wheels}
              handle={handleWheels}
            />
          </SectionTwo>
      </Content>
    </Container>
  )
}