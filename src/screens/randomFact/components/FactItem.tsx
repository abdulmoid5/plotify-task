import React from 'react';
import {Pressable, View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {useTheme} from '~/hooks/useTheme';
import i18n from '~/translations/i18n/i18n';

type DataProps = {
  text: string;
  source: string;
};

type Props = {
  onPress: () => void;
  data: DataProps;
};

export const FactItem: React.FC<Props> = props => {
  const {onPress, data} = props;
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: -80,
      }}>
      <Text
        variant="headline4"
        marginVertical="m"
        color="accent1"
        textAlign="center">
        {i18n.t('random_fact_item_header')}
      </Text>
      <Text textAlign="center" marginBottom="m">{`${data.text}`}</Text>

      <View
        style={{
          borderRadius: 12,
          borderWidth: 0.7,
          borderColor: theme.colors.lightGray5,
          paddingHorizontal: theme.spacing.s,
          paddingVertical: theme.spacing.xxxs,
          marginBottom: theme.spacing.s,
        }}>
        <Text color="darkGray" variant="body3">
          {`${data.source}`}
          <Text variant="body3" color="lightGray4">
            {` - ${i18n.t('source')}`}
          </Text>
        </Text>
      </View>

      <Pressable
        style={{
          backgroundColor: theme.colors.primary5,
          borderRadius: 12,
          paddingHorizontal: theme.spacing.xl,
          paddingVertical: theme.spacing.xxs,
          marginVertical: theme.spacing.s,
        }}
        onPress={onPress}>
        <Text color="white">{i18n.t('get_new_fact')}</Text>
      </Pressable>
    </View>
  );
};
