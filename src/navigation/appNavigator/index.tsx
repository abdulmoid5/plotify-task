import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import type {AppNavigatorStackParamsList} from './types';
import {HOME_NAV_ROUTE} from '../routes';
import {HomeScreen} from '~/screens/dashboard/HomeScreen';
import {HeaderNavBack} from '../headerNavBackButton';
import {useTheme} from '~/hooks/useTheme';

type AppNavigatorStackParamsListTodo = AppNavigatorStackParamsList & any;
const AppNavigatorStack =
  createNativeStackNavigator<AppNavigatorStackParamsListTodo>();

export const AppNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <AppNavigatorStack.Navigator initialRouteName={HOME_NAV_ROUTE}>
      <AppNavigatorStack.Group
        screenOptions={({}) => ({
          gestureEnabled: false,
        })}>
        <AppNavigatorStack.Screen
          name={HOME_NAV_ROUTE}
          component={HomeScreen}
          options={({navigation}) => ({
            headerShown: true,
            header: () => (
              <HeaderNavBack
                navigation={navigation}
                backgroundColor={theme.colors.white}
                empty
              />
            ),
          })}
        />
      </AppNavigatorStack.Group>
    </AppNavigatorStack.Navigator>
  );
};
