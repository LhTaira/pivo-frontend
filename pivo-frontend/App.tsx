import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { SelectOperation } from './src/screens/SelectOperation';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import {
  PoiretOne_400Regular
} from '@expo-google-fonts/poiret-one';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    PoiretOne_400Regular
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <ThemeProvider theme={theme}>
      <SelectOperation />
    </ThemeProvider>
    
  );
}

