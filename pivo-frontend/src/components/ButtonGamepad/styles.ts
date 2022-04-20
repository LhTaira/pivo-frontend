import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {TouchableOpacity} from "react-native";
import { Feather, AntDesign } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  background-color: ${({ theme }) => theme.colors.primary };
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(4)}px;
`;

//@ts-ignore
export const Icon = styled(Feather&&AntDesign)`
  color: ${({ theme }) => theme.colors.secondary};
`;