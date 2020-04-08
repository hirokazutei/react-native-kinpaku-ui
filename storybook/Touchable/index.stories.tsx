// @flow
import * as React from 'react';
import {Text} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {IntersectDefaultKey, UnionDefaultKey} from '../../src/types';
import {alignSelect} from '../knobs';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import touchableFactory from '../../src/components/Touchable';
import {
  TouchableProps,
  TouchableTypes,
} from '../../src/components/Touchable/types';
import {DefaultTouchableSizes} from '../../src/components/Touchable/constants';

const Touchable = touchableFactory<typeof themes, null, null, null>({
  themes,
});

const DEFAULT_PROPS = {
  children: 'TOUCH',
};

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultTouchableSizes>]?: UnionDefaultKey<
    DefaultTouchableSizes
  >
} = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
  massive: 'massive',
};

const typeSelect: {[Type in TouchableTypes]: TouchableTypes} = {
  solid: 'solid',
  outline: 'outline',
};

const getRequiredProps = (overrides = {}): TouchableProps<null, null, null> => {
  const {children} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    children: <Text>{text('Content', children)}</Text>,
    onPress: action('button-pressed'),
  };
};

const getOptionalProps = (): Partial<TouchableProps<null, null, null>> => {
  return {
    align: select('Align Options', alignSelect, undefined),
    color: select('Color Options', colorSelect, undefined),
    isDisabled: boolean('Disabled', undefined),
    isStretched: boolean('Stretched', undefined),
    type: select('Type Options', typeSelect, undefined),
    size: select('Size Option', sizeSelect, undefined),
  };
};

storiesOf('UI/Touchable', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Touchable {...getRequiredProps()} {...getOptionalProps()} />
    </>
  ));
