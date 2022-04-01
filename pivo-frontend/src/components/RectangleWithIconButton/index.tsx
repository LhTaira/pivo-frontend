import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


import { 
  Container,
} from './styles';

interface RectangleWithIconProps extends TouchableOpacityProps {
  type: 'manual' | 'automatic';
}

export function RectangleWithIcon({ type, ...rest }: RectangleWithIconProps){
  return(
    <Container {...rest} style={{
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 5, height: 13},}}>
      {type === 'automatic' ? (
        <MaterialCommunityIcons name="robot" size={40} color="#fcfcfc" />
      ): <MaterialIcons name="control-camera" size={48} color='#fcfcfc'/>}
    </Container>
  )
}