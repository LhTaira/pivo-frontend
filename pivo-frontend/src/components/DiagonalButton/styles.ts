import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {TouchableOpacity} from "react-native";

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(80)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
