import React, {useLayoutEffect} from 'react';
import {InteractionManager, Pressable, View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {Loader} from '~/components/organisms/Loader';
import {useGetApi} from '~/hooks/api';
import {useTheme} from '~/hooks/useTheme';
import i18n from '~/translations/i18n';
import {FactItem} from './components/FactItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import {useHomeData} from '../dashboard/hooks/useHomeData';
import {HeaderNavBack} from '~/navigation/headerNavBackButton';

type RandomFactScreenProps = NativeStackScreenProps<
  AppNavigatorStackParamsList,
  'RANDOM_FACT_ROUTE'
>;
export const RandomFactScreen: React.FC<RandomFactScreenProps> = (
  props,
): JSX.Element => {
  const {navigation} = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <HeaderNavBack
          backgroundColor={theme.colors.white}
          onBackClick={() => {
            InteractionManager.runAfterInteractions(() => {
              navigation.navigate('HOME_NAV_ROUTE');
            });
          }}
        />
      ),
    });
  }, [navigation]);

  const theme = useTheme();
  const {data, loading, error, refetch} = useGetApi('random.json');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.spacing.s,
      }}>
      <Text
        variant="headline4"
        marginVertical="m"
        color="approved3"
        textAlign="center">
        {i18n.t('random_fact_header')}
      </Text>

      <View
        style={{
          height: 1,
          backgroundColor: theme.colors.lightGray6,
          width: '120%',
          left: -theme.spacing.s,
        }}
      />

      {loading ? (
        <Loading />
      ) : error ? (
        <Error onPress={refetch} />
      ) : (
        <FactItem data={data} onPress={refetch} />
      )}
    </View>
  );
};

const Loading = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Loader useFlex={false} />
    <Text marginVertical="s" textAlign="center" marginHorizontal="s">
      {i18n.t('random_fact_loading')}
    </Text>
  </View>
);

type ErrorProps = {
  onPress: () => void;
};
const Error = ({onPress}: ErrorProps) => {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text marginVertical="s" textAlign="center" marginHorizontal="s">
        {i18n.t('random_fact_error')}
      </Text>
      <Pressable
        style={{
          backgroundColor: theme.colors.primary5,
          borderRadius: 12,
          paddingHorizontal: theme.spacing.xl,
          paddingVertical: theme.spacing.xxs,
          marginVertical: theme.spacing.s,
        }}
        onPress={onPress}>
        <Text color="white">{i18n.t('retry')}</Text>
      </Pressable>
    </View>
  );
};
