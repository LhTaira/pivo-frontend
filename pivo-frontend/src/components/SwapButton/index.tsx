import React from 'react';
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  nameIcon: string;
}

import { Container, Icon } from './styles';

export function SwapButton({ onPress , nameIcon, ...rest }: ButtonProps){
  return(
    <Container  
      onPress={onPress} 
      {...rest}
    >
      <Icon name={nameIcon} size={20} color='#FCFCFC'/>
    </Container>
  )
}