import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { SelectOperation } from './src/screens/SelectOperation';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import {
  PoiretOne_400Regular
} from '@expo-google-fonts/poiret-one';
import { AppRoutes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    PoiretOne_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }
// Iremos colocar essa flag em um contexto e depois
// se for veradeira signigica que o usuário quer trocar o modo
// que o pivô será controlado
const flag = false;

  return (
    <ThemeProvider theme={theme}>
      {flag 
      ? <SelectOperation /> 
      :(
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      )}
      
    </ThemeProvider>
  );
}

