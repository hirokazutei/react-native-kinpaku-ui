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
import {ButtonProps, ButtonTypes} from '../../src/components/Button/types';
import buttonFactory from '../../src/components/Button';
import {DefaultButtonSizes} from '../../src/components/Button/constants';

const {Sharp, Round, Circular} = buttonFactory<typeof themes, null, null, null>(
  {
    themes,
  },
);

const DEFAULT_PROPS = {
  title: 'PRESS HERE',
};

const BUTTON_TYPES: Array<ButtonTypes> = ['solid', 'outline', 'clear'];

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultButtonSizes>]?: UnionDefaultKey<
    DefaultButtonSizes
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
  const {title} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    onPress: action('button-pressed'),
    title: text('Title', title),
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
      {BUTTON_TYPES.map((type: ButtonTypes, index: number) => {
        return (
          <Sharp
            key={index}
            {...getRequiredProps()}
            type={type}
            {...geOptionalProps()}
          />
        );
      })}
      {BUTTON_TYPES.map((type: ButtonTypes, index: number) => {
        return (
          <Round
            key={index}
            {...getRequiredProps()}
            type={type}
            {...geOptionalProps()}
          />
        );
      })}
      {BUTTON_TYPES.map((type: ButtonTypes, index: number) => {
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
