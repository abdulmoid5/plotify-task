import React from 'react';
import {View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {useTheme} from '~/hooks/useTheme';

export function HomeScreen(): JSX.Element {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
      }}>
      <Text color="accent" variant="headline4">
        Hello World!
      </Text>
    </View>
  );
}
