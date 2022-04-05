import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container, Error, Title, Subtitle  } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface InputFormProps extends TextInputProps {
  control: Control;
  title: string;
  subtitle: string;
  name: string;
  error: string;
  icon: string;
}

export function InputForm({ control, name, title, subtitle, icon, error, ...rest }: InputFormProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      
      <Controller
        control={control}
        render={({ field: {onChange, value}}) => (
          <Input
            icon={icon}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />

      {error && <Error>{error}</Error>}
    </Container>
  )
}