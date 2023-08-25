import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {useTheme} from '~/hooks/useTheme';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import i18n from '~/translations/i18n';
import {useHomeData} from '../dashboard/hooks/useHomeData';

type OnboardScreenProps = NativeStackScreenProps<
  AppNavigatorStackParamsList,
  'ONBOARD_ROUTE'
>;

export const OnboardScreen: React.FC<OnboardScreenProps> = (
  props,
): JSX.Element => {
  const {navigation} = props;
  const theme = useTheme();
  const {isLoading, isCompleted} = useHomeData();

  useEffect(() => {
    if (isLoading) return;
    if (isCompleted) {
      navigation.navigate('RANDOM_FACT_ROUTE');
    } else {
      navigation.navigate('HOME_NAV_ROUTE', {isFromRandomFact: false});
    }
  }, [isCompleted, isLoading]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.spacing.s,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        variant="headline1"
        marginVertical="m"
        color="approved3"
        textAlign="center">
        {i18n.t('plotify')}
      </Text>
      <ActivityIndicator size="large" color={theme.colors.approved5} />
    </View>
  );
};
