import React from 'react';
import { Header } from '../../components/Header';
import { 
  Container,
} from './styles';

export function Settings(){
  return (
    <Container>
      <Header title={`Ligar e Desligar`}/>
    </Container>
  )
}