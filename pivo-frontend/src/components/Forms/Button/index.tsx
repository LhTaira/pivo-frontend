import React from 'react';
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
}

import { Container, Icon } from './styles';

export function Button({ onPress, ...rest }: ButtonProps){
  return(
    <Container  
      onPress={onPress} 
      {...rest}
    >
      <Icon name='check' size={24} color='#FCFCFCyy'/>
    </Container>
  )
}