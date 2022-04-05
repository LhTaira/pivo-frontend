import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Container, IconInput, InputComponent } from './styles';


interface InputProps extends TextInputProps{
  icon: string;
}


export function Input({icon, ...rest}: InputProps){
  const [isFocused, setIsFocused] = useState(false);
  const [isFIlled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);;

  return (
    <Container>
      <IconInput
        name={icon}
        size={20}
        color={isFocused || isFIlled ? '#ff9000' : '#666360'}
      />
      <InputComponent {...rest}/>
    </Container>

  )
}