import React from 'react';
import { InputForm } from '../../components/Forms/InputForm';
import { Header } from '../../components/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import * as Yup from 'yup';

import { useForm } from 'react-hook-form';
import { 
  Container,
  Content
} from './styles';
import { Keyboard, ScrollView } from 'react-native';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().typeError('Informe um valor númerico').positive('O valor não pode ser negativo').required('Valor é obrigatório'),
})



export function ControlPivo(){
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

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
        <Content>
          <InputForm 
            title={`Lâmina d'água`}
            subtitle={`Determine a lâmina d'água (mm)`}
            icon='water-outline'
            name="lamina"
            control={control}
            keyboardType="numeric"
            placeholder="112"
            error={errors.name && errors.name.message} 
          />

          <InputForm 
            title={`Tempo de Irrigação`}
            subtitle={`Determine o tempo de irrigação (Até 24h)`}
            icon='time-outline'
            name="irrigation"
            control={control} 
            placeholder="10"
            keyboardType="numeric"
            error={errors.name && errors.name.message} 
          />
        </Content>

      </Container>
      </ScrollView>
    </TouchableWithoutFeedback>
  )
}