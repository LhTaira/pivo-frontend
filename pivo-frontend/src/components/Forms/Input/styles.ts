import styled, { css } from "styled-components/native";
import { TextInput } from 'react-native';
import { RFValue } from'react-native-responsive-fontsize';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-radius: 4px;
  margin-bottom: ${RFValue(8)}px;
`;

export const InputComponent = styled(TextInput)`
  flex: 1;
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const IconInput = styled(MaterialCommunityIcons&&Ionicons)`
  padding-left: ${RFValue(16)}px;
  padding-right: ${RFValue(8)}px;
`;