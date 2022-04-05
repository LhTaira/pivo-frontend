import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
  height: ${RFPercentage(44)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom-left-radius: ${RFValue(160)}px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.poiret};
  margin: 0 ${RFValue(36)}px;
`;
