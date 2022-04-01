import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { TouchableOpacity } from 'react-native';


export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px rgba(0, 0, 0,0.25);

  height: ${RFValue(100)}px;
  width: ${RFValue(100)}px;

  border-radius: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.confirm};

`;
