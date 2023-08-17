import React from 'react';
import {View} from 'react-native';
import {Text} from '~/components/atom/Text';
import VectorIcon from '~/components/atom/VectorIcon';
import {useTheme} from '~/hooks/useTheme';

type Props = {number: number | string; text: string; isCompleted: boolean};

export const ItemHeader: React.FC<Props> = props => {
  const {number, text, isCompleted} = props;
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.xxs,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40,
            backgroundColor: theme.colors.black,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text color="white" variant="headline3">
            {`${number}`}
          </Text>
        </View>

        <Text variant="headline3" marginHorizontal="xxs">
          {`${text}`}
        </Text>
      </View>

      {isCompleted && (
        <VectorIcon
          type="FontAwesome"
          name="check"
          size="s"
          color={theme.colors.black}
        />
      )}
    </View>
  );
};
