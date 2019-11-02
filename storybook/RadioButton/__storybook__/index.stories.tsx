// @flow
import * as React from 'react';
import {FlexAlignType} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../../Provider';
import themes from '../../../src/themes';
import {ThemePalette} from '../../../src/Theme/types';
import {
  RadioButtonProps,
  RadioButtonVariations,
} from '../../../src/components/RadioButton/types';
import radioButtonFactory from '../../../src/components/RadioButton';
import {DEFAULT_RADIO_BUTTON_SIZE} from '../../../src/components/RadioButton/constants';

const {Dot, Reverse, Fill} = radioButtonFactory<
  typeof themes,
  null,
  null,
  null
>({
  themes,
  sizes: DEFAULT_RADIO_BUTTON_SIZE,
});

const DEFAULT_PROPS = {
  color: 'primary' as keyof ThemePalette,
  isDisabled: false,
  isStretched: false,
};

const BUTTON_TYPES: Array<RadioButtonVariations> = ['Dot', 'Reverse', 'Fill'];

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const getRequiredProps = (
  overrides = {},
): RadioButtonProps<null, null, null> => {
  const {color, isDisabled, isStretched} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    color: select('Color Options', colorSelect, color),
    isDisabled: boolean('isDisabled', isDisabled),
    onPress: action('button-pressed'),
  };
};

storiesOf('UI/Button')
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Dot {...getRequiredProps()} />;
      <Reverse {...getRequiredProps()} />;
      <Fill {...getRequiredProps()} />;
    </>
  ));
