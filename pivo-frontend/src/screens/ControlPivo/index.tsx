// @ts-nocheck
import React, { useCallback, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { InputForm } from '../../components/Forms/InputForm';
import { Header } from '../../components/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import { usePivo } from '../../hooks/pivo';


import { useForm } from 'react-hook-form';
import { 
  Form,
  Fields,
  Title,
  WrapButton
} from './styles';
import { Alert, Keyboard, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Forms/Button';
import api from '../../services/api';

interface FormData {
  lamina: number;
  irrigation: number;
}

type NavigationProps = {
  navigate:(screen:string) => void;
}

const schema = Yup.object().shape({
  lamina: Yup.number().typeError('Informe um valor númerico').positive('O valor não pode ser negativo').required('Valor é obrigatório'),
})

export function ControlPivo(){
  const [behavior, setBehavior] = useState<any>(undefined);
  const { pivoMode } = usePivo();
  const navigation = useNavigation<NavigationProps>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });



  const handleRegister = useCallback(async (form :FormData) => {
    try {
      await api.post('saveUserPreferences', {
        control: pivoMode,
        lamina: form.lamina,
      });
      reset();

      navigation.navigate('Settings');
  
    } catch (error){
      console.log(error);
      Alert.alert('Não foi possível salvar');
    }
  }, []);
  return (
    <TouchableWithoutFeedback 
      onPress={Keyboard.dismiss}
      containerStyle={{flex: 1}}
      style={{ flex: 1 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}>
      <KeyboardAvoidingView
         style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FCFCFC' }}
         behavior={behavior}>
        <Header pivoMode={pivoMode} title={`Controle de Irrigação`}/>
        <Form>
          <Fields>
          <InputForm 
            title={`Lâmina d'água`}
            subtitle={`Determine a lâmina d'água (mm)`}
            icon='water-outline'
            name="lamina"
            control={control}
            onPressIn={() => setBehavior(undefined)}
            keyboardType="numeric"
            placeholder="112"
            error={errors.lamina && errors.lamina.message} 
          />
          </Fields>
          <WrapButton>
            <Title>Salvar</Title> 
            <Button onPress={handleSubmit(handleRegister)}/>
          </WrapButton>
        </Form>

      </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}