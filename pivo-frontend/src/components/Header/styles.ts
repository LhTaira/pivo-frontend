import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  height: ${RFPercentage(44)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom-left-radius: ${RFValue(160)}px;
  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.poiret};
  text-align: right;
  margin-right: ${RFValue(36)}px;;
`;
