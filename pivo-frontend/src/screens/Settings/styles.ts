import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  height: 100%;
  width: 100%;
  padding: 0 ${RFValue(28)}px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};

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
    font-family: ${({ theme }) => theme.fonts.medium};
    text-align: center;
    margin-bottom: ${RFValue(8)}px;
`;
