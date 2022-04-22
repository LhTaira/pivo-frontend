// @ts-nocheck
import React from 'react';
import { Platform } from 'react-native';
import { 
  MaterialCommunityIcons,
  Ionicons 
} from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator();

import { ControlPivo } from '../screens/ControlPivo';
import { Settings } from '../screens/Settings';

export function AutomaticRoutes(){
  const theme = useTheme();
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarActiveBackgroundColor: theme.colors.secondary_light,
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarInactiveBackgroundColor: theme.colors.secondary,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 72,
          paddingVertical: Platform.OS === 'ios' ? 20: 0
        }
      }}
    >
      <Screen
        name="ControlPivo"
        component={ControlPivo}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: (({ color}) =>
            <MaterialCommunityIcons
              name="robot"
              size={32}
              color={color}
            />
          ),
        }}
      />
      <Screen 
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (({ color}) => 
            <Ionicons
              name="settings-outline"
              size={32}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}