import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(36)}px;
  height: ${RFValue(36)}px;
  background-color: ${({ theme }) => theme.colors.secondary };
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(4)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.primary};
`;