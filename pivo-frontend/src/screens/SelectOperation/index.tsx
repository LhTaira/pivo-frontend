import React from 'react';
import { Header } from '../../components/Header';
import { SelectTypeControl } from '../../components/SelectTypeControl';
import { usePivo } from '../../hooks/pivo';
import { 
  Container,
  ContentSelectOperation,
  WrapSelectTypeControl
} from './styles';

export function SelectOperation(){
  return (
    <Container>
      <Header title={'Escolha o modo de Controle'}/>
      <ContentSelectOperation>
        <WrapSelectTypeControl>
          <SelectTypeControl
            title={'Manual'}
            subtitle={`Controle o pipe você mesmo`}
          />
          <SelectTypeControl
            title={'Automático'} 
            subtitle={`Defina alguns parâmetros e deixe o resto com a gente`}
            />
        </WrapSelectTypeControl>
      </ContentSelectOperation>
    </Container>
  )
}