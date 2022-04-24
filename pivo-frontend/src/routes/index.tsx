import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AutomaticRoutes } from './automatic.routes';
import { ManualRoutes } from './manual.routes';
import { ModeRoutes } from './mode.routes';
import { usePivo } from '../hooks/pivo';


export function Routes(){
  const { pivoMode } = usePivo();

  return (
    <NavigationContainer>
      {!pivoMode ? <ModeRoutes /> : (pivoMode==='automatic' ? <AutomaticRoutes /> : <ManualRoutes />)}
    </NavigationContainer>
  )
}