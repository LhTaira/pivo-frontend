import styled, { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import AwesomeButtonProps from "react-native-really-awesome-button";

export const Container = styled(AwesomeButtonProps)``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;