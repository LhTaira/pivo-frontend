import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Form = styled.View`
  padding: 0 ${RFValue(28)}px;
`;

export const Fields = styled.View``;

export const WrapButton = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  margin-top: ${RFValue(4)}px;
    
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text };
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular };
  margin-right: ${RFValue(8)}px;
`;

