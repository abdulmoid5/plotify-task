import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from '~/hooks/useTheme';

type Props = {
  visible?: boolean;
};
export const Loader: React.FC<Props> = ({visible = true}) => {
  const theme = useTheme();
  if (!visible) return null;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color={theme.colors.black} />
    </View>
  );
};
