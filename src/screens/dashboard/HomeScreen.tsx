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
      }}>
      <Text color="accent">asdf</Text>
    </View>
  );
}
