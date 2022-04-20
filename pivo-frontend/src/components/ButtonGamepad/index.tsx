import React from 'react';
import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  nameIcon: string;
  marginBottom?: number;
}

import { Container, Icon } from './styles';

export function ButtonGamepad({ onPress, marginBottom, nameIcon, ...rest }: ButtonProps){
  return(
    <Container  
      onPress={onPress} 
      {...rest}
      style={{ marginBottom }}
    >
      <Icon name={nameIcon} size={80} color='#FCFCFCyy'/>
    </Container>
  )
}