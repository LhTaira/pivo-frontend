import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import {TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  position: absolute;
  margin-left: ${RFPercentage(46)}px;
  bottom: ${RFPercentage(32)}px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  background-color: ${({ theme }) => theme.colors.primary };
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(100)}px;
`;

//@ts-ignore
export const Icon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.secondary};
`;