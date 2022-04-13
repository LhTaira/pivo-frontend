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
  height: 100%;
  width: 100%;
  padding: 0 ${RFValue(28)}px;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 ${RFValue(28)}px;
`;

export const Line = styled.View`
  margin: ${RFValue(16)}px 0;
  background-color: #A1A1A1;
  height: 1px;
  width: 40%;
  
`;

export const SectionOne = styled.View`
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionTwo = styled.View`
  width: 60%;
  flex-direction: row;
  justify-content: space-between;
`;
