import React, { useCallback, useEffect, useState } from 'react';
import { InputForm } from '../../components/Forms/InputForm';
import { Header } from '../../components/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useForm } from 'react-hook-form';
import { 
  Container,
  Form,
  Fields,
  Title,
  WrapButton
} from './styles';
import { Alert, Keyboard, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Forms/Button';

interface FormData {
  lamina: number;
  irrigation: number;
}

type NavigationProps = {
  navigate:(screen:string) => void;
}

const schema = Yup.object().shape({
  lamina: Yup.number().typeError('Informe um valor númerico').positive('O valor não pode ser negativo').required('Valor é obrigatório'),
  irrigation: Yup.number().typeError('Informe um valor númerico').positive('O valor não pode ser negativo').required('Valor é obrigatório'),
})

export function ControlPivo(){
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
  
    const newControlPivo = {
      lamina: form.lamina,
      irrigation: form.irrigation,
    }
    
   
    try {
      
      console.log(JSON.stringify(newControlPivo));
      // const dataKey = '@pivo:controlPivo';
  
      // const data = await AsyncStorage.getItem(dataKey);
      // const currentData = data ? JSON.parse(data): [];
  
      // const dataFormatted = [
      //   ...currentData,
      //   newControlPivo
      // ]
  
      // await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
  
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

      
      <Container>
        <Header title={`Controle de Irrigação`}/>
        <Form>
          <Fields>
          <InputForm 
            title={`Lâmina d'água`}
            subtitle={`Determine a lâmina d'água (mm)`}
            icon='water-outline'
            name="lamina"
            control={control}
            keyboardType="numeric"
            placeholder="112"
            error={errors.lamina && errors.lamina.message} 
          />

          <InputForm 
            title={`Tempo de Irrigação`}
            subtitle={`Determine o tempo de irrigação (Até 24h)`}
            icon='time-outline'
            name="irrigation"
            control={control} 
            placeholder="10"
            keyboardType="numeric"
            error={errors.irrigation && errors.irrigation.message} 
          />
          </Fields>
          <WrapButton>
            <Title>Salvar</Title>
            <Button onPress={handleSubmit(handleRegister)}/>
          </WrapButton>
        </Form>

      </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}