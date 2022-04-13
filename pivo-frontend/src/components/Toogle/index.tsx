import React from 'react';
import { Switch } from 'react-native';
import { 
  Container,
  Title,
} from './styles';

interface ToogleProps {
  title: string;
  active: boolean;
  handle: () => void;
}

export function Toogle({ title, active,  handle }: ToogleProps){
  return (
    <Container >
      <Title>{title}</Title>
        <Switch
          onValueChange={handle}
          value={active}
          style={{ alignSelf: 'flex-start', transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
          trackColor={{true: '#92ED68', false: '#FF2929'}}
          thumbColor={'#FCFCFC'}
        />
    </Container>
  )
}