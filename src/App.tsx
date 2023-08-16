import React from 'react';
import {PlotifyNavigationContainer} from '~/navigation/plotifyNavigationContainer';
import {AppNavigator} from '~/navigation/appNavigator';
import Toast from 'react-native-toast-message';
import {ToastConfig} from '~/utils/toastConfig';

export const App: React.FC = () => {
  return (
    <PlotifyNavigationContainer>
      <AppNavigator />
      <Toast config={ToastConfig} />
    </PlotifyNavigationContainer>
  );
};
