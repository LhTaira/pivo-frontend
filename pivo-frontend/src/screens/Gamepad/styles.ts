import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: left;
  margin-bottom: ${RFValue(8)}px;
  margin-top: ${RFValue(12)}px;
  margin-left: ${RFValue(28)}px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: left;
  margin-left: ${RFValue(28)}px;
  margin-right: ${RFValue(28)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 28px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const WrapVertical = styled.View`
  margin: 0 8px;
`;