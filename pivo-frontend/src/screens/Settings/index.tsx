import React, { useCallback, useState } from 'react';
import { Switch } from 'react-native';
import { Header } from '../../components/Header';
import ToggleSwitch from 'toggle-switch-react-native';
import { 
  Container,
  Title,
  Subtitle,
  Content,
} from './styles';



export function Settings(){
  const [activePipe, setActivePipe] = useState(false);

  const handleActivePipe = useCallback(() => {
    setActivePipe(!activePipe);
  }, [activePipe])


  return (
    <Container>
      <Header title={`Ligar e Desligar`}/>
      <Content>
        <Title>Controle Geral</Title>
        <Subtitle>Ativar Pipe</Subtitle>
        <Switch
          onValueChange={handleActivePipe}
          value={activePipe}
          style={{ alignSelf: 'center', transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
          trackColor={{true: '#92ED68', false: '#FF2929'}}
          thumbColor={'#FCFCFC'}
        />
      </Content>
    </Container>
  )
}