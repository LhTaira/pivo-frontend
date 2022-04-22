import React from 'react';
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  marginBottom?: number;
}

import { Container } from './styles';

export function DiagonalButton({ onPress, marginBottom, ...rest }: ButtonProps){
  return(
    <Container  
      onPress={onPress} 
      {...rest}
      style={{ marginBottom }}
    >
    </Container>
  )
}