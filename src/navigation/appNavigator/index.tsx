import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTheme} from '~/hooks/useTheme';
import {HomeScreen} from '~/screens/dashboard/HomeScreen';
import {OnboardScreen} from '~/screens/onboard/OnboardScreen';
import {RandomFactScreen} from '~/screens/randomFact/RandomFactScreen';
import {HeaderNavBack} from '../headerNavBackButton';
import {HOME_NAV_ROUTE, ONBOARD_ROUTE, RANDOM_FACT_ROUTE} from '../routes';
import type {AppNavigatorStackParamsList} from './types';

type AppNavigatorStackParamsListTodo = AppNavigatorStackParamsList & any;
const AppNavigatorStack =
  createStackNavigator<AppNavigatorStackParamsListTodo>();

export const AppNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <AppNavigatorStack.Navigator>
      <AppNavigatorStack.Group
        screenOptions={() => ({
          gestureEnabled: false,
          headerShown: true,
          header: () => (
            <HeaderNavBack backgroundColor={theme.colors.white} empty />
          ),
        })}>
        <AppNavigatorStack.Screen
          name={ONBOARD_ROUTE}
          component={OnboardScreen}
        />
        <AppNavigatorStack.Screen
          name={HOME_NAV_ROUTE}
          component={HomeScreen}
        />
        <AppNavigatorStack.Screen
          name={RANDOM_FACT_ROUTE}
          component={RandomFactScreen}
        />
      </AppNavigatorStack.Group>
    </AppNavigatorStack.Navigator>
  );
};
