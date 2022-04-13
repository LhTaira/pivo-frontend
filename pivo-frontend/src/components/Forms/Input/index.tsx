import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, IconInput, InputComponent } from './styles';


interface InputProps extends TextInputProps{
  icon: string;
}


export function Input({icon, ...rest}: InputProps){

  return (
    <Container>
      <IconInput
        name={icon}
        size={20}
      />
      <InputComponent {...rest}/>
    </Container>

  )
}