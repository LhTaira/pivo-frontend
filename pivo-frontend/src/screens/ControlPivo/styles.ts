import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  padding: 0 ${RFValue(28)}px;
`;