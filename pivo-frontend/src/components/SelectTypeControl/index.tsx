import React from 'react';
import { StyleProp, ViewProps, ViewStyle } from 'react-native';
import { RectangleWithIcon } from '../RectangleWithIconButton';
import {
  Container,
  ContentTypeControl,
  Title,
  Subtitle,
} from './styles';

interface SelectTypeControl{
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>
}

export function SelectTypeControl({ title, subtitle, ...rest }: SelectTypeControl){
  return (
    <Container {...rest}>
      <RectangleWithIcon  type={title === 'Automático' ? 'automatic': 'manual'}/>
      <ContentTypeControl>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentTypeControl>
    </Container>
  )
}