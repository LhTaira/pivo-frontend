import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.secondary_dark};
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-bottom: ${RFValue(8)}px;
`;