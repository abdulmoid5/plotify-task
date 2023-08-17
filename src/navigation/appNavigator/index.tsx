import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import type {AppNavigatorStackParamsList} from './types';
import {HOME_NAV_ROUTE, RANDOM_FACT_ROUTE} from '../routes';
import {HomeScreen} from '~/screens/dashboard/HomeScreen';
import {HeaderNavBack} from '../headerNavBackButton';
import {useTheme} from '~/hooks/useTheme';
import {RandomFactScreen} from '~/screens/randomFact/RandomFactScreen';

type AppNavigatorStackParamsListTodo = AppNavigatorStackParamsList & any;
const AppNavigatorStack =
  createNativeStackNavigator<AppNavigatorStackParamsListTodo>();

export const AppNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <AppNavigatorStack.Navigator initialRouteName={HOME_NAV_ROUTE}>
      <AppNavigatorStack.Group
        screenOptions={({navigation}) => ({
          gestureEnabled: false,
          headerShown: true,
          header: () => (
            <HeaderNavBack
              navigation={navigation}
              backgroundColor={theme.colors.white}
              empty
            />
          ),
        })}>
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
