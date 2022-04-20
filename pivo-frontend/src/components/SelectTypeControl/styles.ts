import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentTypeControl = styled.View`
  flex-direction: column;
  margin-left: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: left;
  margin-bottom: 2px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_dark};

  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: left;
`;