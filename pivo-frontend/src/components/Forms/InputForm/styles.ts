import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: left;
  margin-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(12)}px;
`;

export const Subtitle = styled.Text`
    color: ${({ theme }) => theme.colors.secondary_dark};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    text-align: left;
    margin-bottom: ${RFValue(16)}px;
`;

export const Error = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attention};
`;