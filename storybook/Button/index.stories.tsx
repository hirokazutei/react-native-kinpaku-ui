// @flow
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {IntersectDefaultKey, UnionDefaultKey} from '../../src/types';
import {alignSelect} from '../knobs';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {ButtonProps, ButtonType} from '../../src/components/Button/types';
import buttonFactory from '../../src/components/Button';
import {DefaultButtonSize} from '../../src/components/Button/constants';

const {Sharp, Round, Circular} = buttonFactory<typeof themes, null, null, null>(
  {
    themes,
  },
);

const DEFAULT_PROPS = {
  label: 'PRESS HERE',
};

const BUTTON_TYPES: Array<ButtonType> = ['fill', 'outline', 'clear'];

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultButtonSize>]?: UnionDefaultKey<
    DefaultButtonSize
  >
} = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
  massive: 'massive',
};

const getRequiredProps = (overrides = {}): ButtonProps<null, null, null> => {
  const {label} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    onPress: action('button-pressed'),
    label: text('Title', label),
  };
};

const geOptionalProps = (): Partial<ButtonProps<null, null, null>> => {
  return {
    color: select('Color Options', colorSelect, undefined),
    isDisabled: boolean('isDisabled', undefined),
    isStretched: boolean('isStretched', undefined),
    align: select('Align Options', alignSelect, undefined),
    onPress: action('button-pressed'),
    size: select('Size Options', sizeSelect, undefined),
  };
};

storiesOf('UI/Button', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      {BUTTON_TYPES.map((type: ButtonType, index: number) => {
        return (
          <Sharp
            key={index}
            {...getRequiredProps()}
            type={type}
            {...geOptionalProps()}
          />
        );
      })}
      {BUTTON_TYPES.map((type: ButtonType, index: number) => {
        return (
          <Round
            key={index}
            {...getRequiredProps()}
            type={type}
            {...geOptionalProps()}
          />
        );
      })}
      {BUTTON_TYPES.map((type: ButtonType, index: number) => {
        return (
          <Circular
            key={index}
            {...getRequiredProps()}
            type={type}
            {...geOptionalProps()}
          />
        );
      })}
    </>
  ));
