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
  flex: 1;
`;

export const WrapSelectTypeControl = styled.View`
  height: 51.5%;
  padding: 0 80px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;