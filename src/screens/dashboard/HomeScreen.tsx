import {FlashList} from '@shopify/flash-list';
import React from 'react';
import {View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {useTheme} from '~/hooks/useTheme';
import i18n from '~/translations/i18n/i18n';
import {ItemHeader} from './components/ItemHeader';
import {HomeData} from './constants/HomeData';
import {Item} from './components/Item';

export function HomeScreen(): JSX.Element {
  const theme = useTheme();

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

      <FlashList
        contentContainerStyle={{
          backgroundColor: theme.colors.white,
          paddingBottom: 60,
        }}
        data={HomeData}
        renderItem={({item, index}) => (
          <React.Fragment>
            <ItemHeader
              number={index + 1}
              text={item.title}
              isCompleted={true}
            />

            {item.child.map((childItem, childIndex) => (
              <Item
                key={childIndex}
                text={childItem.text}
                isChecked={childItem.selected}
              />
            ))}
          </React.Fragment>
        )}
        estimatedItemSize={200}
      />
    </View>
  );
}
