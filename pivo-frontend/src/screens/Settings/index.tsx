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



export function Settings(){
  // Criar estada para cada Toogle
  const [activePipe, setActivePipe] = useState(true);
  const [bombs, setBombs] = useState(true);
  const [arms, setArms] = useState(true);
  const [reels, setReels] = useState(true);
  const [wheels, setWheels] = useState(true);

  const handleActivePipe = useCallback(() => {
    setActivePipe(!activePipe);
  }, [activePipe])

  const handleBombs = useCallback(() => {
    setBombs(!bombs);
  }, [bombs])

  const handleArms = useCallback(() => {
    setArms(!arms);
  }, [arms])

  const handleReels = useCallback(() => {
    setReels(!reels);
  }, [reels])

  const handleWheels = useCallback(() => {
    setWheels(!wheels);
  }, [wheels])


  return (
    <Container>
      <Header title={`Ligar e Desligar`}/>
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
              active={bombs}
              handle={handleBombs}
            />
            <Toogle 
              title={'Braço'}
              active={arms}
              handle={handleArms}
            />
          </SectionOne>
          <SectionTwo>
            <Toogle 
              title={'Carretel'}
              active={reels}
              handle={handleReels}
            />
            <Toogle 
              title={'Rodas'}
              active={wheels}
              handle={handleWheels}
            />
          </SectionTwo>
      </Content>
    </Container>
  )
}