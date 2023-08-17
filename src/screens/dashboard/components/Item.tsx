import React from 'react';
import {Checkbox} from '~/components/organisms/Checkbox';

type Props = {
  text: string;
  isChecked: boolean;
  onChange(isChecked?: boolean): void;
};

export const Item: React.FC<Props> = props => {
  const {text, isChecked, onChange} = props;

  return (
    <Checkbox
      onChange={onChange}
      isChecked={isChecked}
      label={text}
      marginVertical="xxs"
    />
  );
};
