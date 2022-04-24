import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import {
  PoiretOne_400Regular
} from '@expo-google-fonts/poiret-one';
import { Routes } from './src/routes';
import AppProvider from './src/hooks';

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
  
  return (
    <ThemeProvider theme={theme}>
        <AppProvider>
          <Routes />
        </AppProvider>
    </ThemeProvider>
  );
}

