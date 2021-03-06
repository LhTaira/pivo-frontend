import React from 'react';
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  nameIcon: string;
  marginBottom?: number;
  marginTop?: number;
}

import { Container, Icon } from './styles';

export function ButtonGamepad({ onPress, marginBottom, marginTop, nameIcon, ...rest }: ButtonProps){
  return(
    <Container  
      onPress={onPress} 
      {...rest}
      style={{ marginBottom, marginTop }}
    >
      <Icon name={nameIcon} size={80} color='#FCFCFC'/>
    </Container>
  )
}