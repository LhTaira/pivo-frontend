import React from 'react';
import { AwesomeButtonProps } from "react-native-really-awesome-button";

export interface ButtonProps extends AwesomeButtonProps {
  title: string;
  onPress: () => void;
}

import { Container, Title } from './styles';

export function Button({ title, onPress, ...rest }: ButtonProps){
  return(
    <Container    
      onPress={onPress} 
      {...rest}
      backgroundColor='#FF872C'
      borderRadius={4}
      stretch={true}
    >
      <Title>{title}</Title>
    </Container>
  )
}