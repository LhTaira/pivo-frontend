import React from 'react';
import { RectangleWithIcon } from '../RectangleWithIconButton';
import {
  Container,
  ContentTypeControl,
  Title,
  Subtitle,
} from './styles';

interface SelectTypeControl {
  title: string;
  subtitle: string;
}

export function SelectTypeControl({ title, subtitle }: SelectTypeControl){
  return (
    <Container>
      <RectangleWithIcon type={title === 'Automático' ? 'automatic': 'manual'}/>
      <ContentTypeControl>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ContentTypeControl>
    </Container>
  )
}