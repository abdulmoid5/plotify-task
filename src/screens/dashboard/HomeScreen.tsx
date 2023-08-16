import React from 'react';
import {View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {useTheme} from '~/hooks/useTheme';

export function HomeScreen(): JSX.Element {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.lightGray2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text color="accent">Hello World!</Text>
    </View>
  );
}
