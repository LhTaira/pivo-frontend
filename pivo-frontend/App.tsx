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
import { AutomaticRoutes } from './src/routes/automatic.routes';
import { ManualRoutes } from './src/routes/manual.routes';
import { Routes } from './src/routes';
import AppProvider from './src/hooks';
import { usePivo } from './src/hooks/pivo';

export default function App() {
  const { pivoMode } = usePivo()
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    PoiretOne_400Regular
  });
  console.log(pivoMode);

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

