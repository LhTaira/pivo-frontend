import React from 'react';
import { Platform } from 'react-native';
import { 
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons 
} from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator();

import { SelectOperation } from '../screens/SelectOperation';
import { Gamepad } from '../screens/Gamepad';
import { Settings } from '../screens/Settings';

export function ManualRoutes(){
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
        name="Gamepad"
        component={Gamepad}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarIcon: (({ color}) => 
            <MaterialIcons
              name="gamepad"
              size={32}
              color={color}
            />
          )
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