// @ts-nocheck
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SelectOperation } from '../screens/SelectOperation';

const { Navigator, Screen } = createStackNavigator();

export function ModeRoutes(){
  return(
    <Navigator screenOptions={{
      headerShown: false,
      }}>
      <Screen 
        name='SelectOperation'
        component={SelectOperation}
      />
    </Navigator>
  )
}