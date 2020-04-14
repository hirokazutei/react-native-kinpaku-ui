// @flow
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {IntersectDefaultKey, UnionDefaultKey} from '../../src/types';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {RadioButtonProps} from '../../src/components/RadioButton/types';
import radioButtonFactory from '../../src/components/RadioButton';
import {DefaultRadioButtonSize} from '../../src/components/RadioButton/constants';

const {Sharp, Round, Circular} = radioButtonFactory<
  typeof themes,
  null,
  null,
  null
>({
  themes,
});

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultRadioButtonSize>]?: UnionDefaultKey<
    DefaultRadioButtonSize
  >
} = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const getRequiredProps = (): RadioButtonProps<null, null, null> => {
  return {
    onPress: action('button-pressed'),
  };
};

const getOptionalProps = (): Partial<RadioButtonProps<null, null, null>> => {
  return {
    active: boolean('Active', undefined),
    color: select('Color Options', colorSelect, undefined),
    isDisabled: boolean('isDisabled', undefined),
    size: select('Size Options', sizeSelect, undefined),
  };
};

storiesOf('UI/RadioButton', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Sharp {...getRequiredProps()} {...getOptionalProps()} />
      <Round {...getRequiredProps()} {...getOptionalProps()} />
      <Circular {...getRequiredProps()} {...getOptionalProps()} />
    </>
  ));
