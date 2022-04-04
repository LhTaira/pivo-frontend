import React from 'react';
import { Header } from '../../components/Header';
import { 
  Container,
} from './styles';

export function ControlPivo(){
  return (
    <Container>
      <Header title={`Controle da Irrigação`}/>
    </Container>
  )
}