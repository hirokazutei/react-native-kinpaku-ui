// @flow
import * as React from 'react';
import {FlexAlignType} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {ButtonProps, ButtonTypes} from '../.././src/components/Button/types';
import buttonFactory from '../.././src/components/Button';
import {DEFAULT_BUTTON_SIZES} from '../../src/components/Button/constants';

const {Sharp, Round, Circular} = buttonFactory<
  typeof themes,
  null,
  typeof DEFAULT_BUTTON_SIZES
>({
  themes,
  sizes: DEFAULT_BUTTON_SIZES,
});

const DEFAULT_PROPS = {
  color: 'primary' as keyof ThemePalette,
  isDisabled: false,
  isStretched: false,
  align: 'center' as FlexAlignType,
  title: 'PRESS HERE',
  size: 'large' as keyof typeof DEFAULT_BUTTON_SIZES,
};

const BUTTON_TYPES: Array<ButtonTypes> = ['solid', 'outline', 'clear'];

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const getRequiredProps = (
  overrides = {},
): ButtonProps<null, typeof DEFAULT_BUTTON_SIZES, false> => {
  const {color, isDisabled, isStretched, align, title, size} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    color: select('Color Options', colorSelect, color),
    isDisabled: boolean('isDisabled', isDisabled),
    isStretched: boolean('isStretched', isStretched),
    align,
    onPress: action('button-pressed'),
    title: text('Title', title),
    size,
  };
};

storiesOf('UI/Button', module)
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      {BUTTON_TYPES.map(
        (type: ButtonTypes, index: number): React.ReactElement => {
          return <Sharp key={index} {...getRequiredProps()} type={type} />;
        },
      )}
      {BUTTON_TYPES.map((type: ButtonTypes, index: number) => {
        return <Round key={index} {...getRequiredProps()} type={type} />;
      })}
      {BUTTON_TYPES.map((type: ButtonTypes, index: number) => {
        return <Circular key={index} {...getRequiredProps()} type={type} />;
      })}
    </>
  ));
