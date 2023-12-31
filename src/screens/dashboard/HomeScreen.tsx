import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {InteractionManager, View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {Loader} from '~/components/organisms/Loader';
import {useTheme} from '~/hooks/useTheme';
import i18n from '~/translations/i18n/i18n';
import {Item} from './components/Item';
import {ItemHeader} from './components/ItemHeader';
import {useHomeData} from './hooks/useHomeData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import {useFocusEffect} from '@react-navigation/native';

type HomeScreenProps = NativeStackScreenProps<
  AppNavigatorStackParamsList,
  'HOME_NAV_ROUTE'
>;

export const HomeScreen: React.FC<HomeScreenProps> = (props): JSX.Element => {
  const {navigation, route} = props;

  const theme = useTheme();

  const {
    homeData: data,
    updateChildSelection,
    isLoading,
    isCompleted,
    resetHomeData,
  } = useHomeData();

  useFocusEffect(() => {});
  useEffect(() => {
    if (route.params.isFromRandomFact) {
      (async () => {
        await resetHomeData();
        navigation.setParams({isFromRandomFact: false});
      })();
      return;
    }
    if (isCompleted && !isLoading) {
      InteractionManager.runAfterInteractions(() => {
        navigation.replace('RANDOM_FACT_ROUTE');
      });
    }
  }, [isCompleted, isLoading]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.spacing.s,
      }}>
      <Text variant="headline1" marginVertical="s">
        {i18n.t('startup_progress')}
      </Text>

      {isLoading ? (
        <Loader />
      ) : (
        <FlashList
          contentContainerStyle={{
            backgroundColor: theme.colors.white,
            paddingBottom: 60,
          }}
          data={data}
          renderItem={({item, index}) => (
            <React.Fragment>
              <ItemHeader
                number={index + 1}
                text={item.title}
                isCompleted={item.isCompleted}
              />

              {item.child.map((childItem, childIndex) => (
                <Item
                  key={childIndex}
                  onChange={() => {
                    updateChildSelection(
                      item.id,
                      childItem.id,
                      !childItem.selected,
                    );
                  }}
                  text={childItem.text}
                  isChecked={childItem.selected}
                />
              ))}
            </React.Fragment>
          )}
          estimatedItemSize={200}
        />
      )}
    </View>
  );
};
