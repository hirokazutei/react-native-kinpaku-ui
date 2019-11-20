// @flow
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {RadioButtonProps} from '../../src/components/RadioButton/types';
import radioButtonFactory from '../../src/components/RadioButton';
import {
  DEFAULT_RADIO_BUTTON_SIZES,
  DefaultRadioSizes,
} from '../../src/components/RadioButton/constants';

const {Dot, Reverse, Fill} = radioButtonFactory<
  typeof themes,
  null,
  typeof DEFAULT_RADIO_BUTTON_SIZES,
  false
>({
  themes,
  sizes: DEFAULT_RADIO_BUTTON_SIZES,
});

const DEFAULT_PROPS = {
  active: false,
  size: undefined,
  color: 'primary' as keyof ThemePalette,
  isDisabled: false,
};

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizeSelect: {
  [key in DefaultRadioSizes]?: DefaultRadioSizes;
} = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const getRequiredProps = (
  overrides = {},
): RadioButtonProps<null, null, null> => {
  const {active, color, isDisabled, size} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    active: boolean('Active', active),
    color: select('Color Options', colorSelect, color),
    isDisabled: boolean('isDisabled', isDisabled),
    onPress: action('button-pressed'),
    size: select('Size Options', sizeSelect, size),
  };
};

storiesOf('UI/RadioButton', module)
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Dot {...getRequiredProps()} />
      <Reverse {...getRequiredProps()} />
      <Fill {...getRequiredProps()} />
    </>
  ));
