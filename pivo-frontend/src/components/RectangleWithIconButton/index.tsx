import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import AwesomeButton from "react-native-really-awesome-button";


import { 
  Container,
} from './styles';

interface RectangleWithIconProps {
  type: 'manual' | 'automatic';
}

const height = RFValue(100)
const width = RFValue(100)

export function RectangleWithIcon({ type }: RectangleWithIconProps){
  return(
    <Container>
      <AwesomeButton
      backgroundColor='#49AD96'
      borderRadius={4}
      height={height}
      width={width}
      >
        {type === 'automatic' ? (
          <MaterialCommunityIcons name="robot" size={40} color="#fcfcfc" />
        ): <MaterialIcons name="control-camera" size={48} color='#fcfcfc'/>}
      </AwesomeButton>
    </Container>
  )
}