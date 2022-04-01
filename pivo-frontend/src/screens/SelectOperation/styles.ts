import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentSelectOperation = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapSelectTypeControl = styled.View`
  padding: 0 80px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${RFValue(32)}px;
`;