import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Checkbox} from '~/components/organisms/Checkbox';
import {useTheme} from '~/hooks/useTheme';

type Props = {text: string; isChecked: boolean};

export const Item: React.FC<Props> = props => {
  const {text, isChecked} = props;
  const theme = useTheme();
  const [isSelected, setIsSelected] = React.useState(isChecked);

  useEffect(() => {
    setIsSelected(isChecked);
  }, [isChecked]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: theme.spacing.xxs,
      }}>
      <Checkbox
        onChange={value => {
          setIsSelected(value);
        }}
        isChecked={isSelected}
        label={text}
      />
    </View>
  );
};
