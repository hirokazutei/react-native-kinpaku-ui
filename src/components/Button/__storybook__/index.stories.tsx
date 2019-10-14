// @flow
import * as React from 'react';
import {FlexAlignType} from 'react-native';
import Provider from '../../../storybook/Provider';
import {ThemePalette} from '../../../Theme/types';
import {ButtonProps, ButtonType} from '../types';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import themes from '../../../themes';
import buttonFactory from '../index';
import {DEFAULT_BUTTON_SIZES} from '../constants';

type ButtonSizes = typeof DEFAULT_BUTTON_SIZES;
type ThemeType = typeof themes;

const {Sharp, Round, Circular} = buttonFactory<ThemeType, null, ButtonSizes>({
  themes,
  buttonSizes: DEFAULT_BUTTON_SIZES,
});

const DEFAULT_PROPS = {
  color: 'primary' as keyof ThemePalette,
  isDisabled: false,
  isStretched: false,
  align: 'center' as FlexAlignType,
  title: 'PRESS HERE',
  size: 'large' as keyof ButtonSizes,
};

const BUTTON_TYPES: Array<ButtonType> = ['solid', 'outline', 'clear'];

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const getRequiredProps = (overrides = {}): ButtonProps<null, ButtonSizes> => {
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

storiesOf('UI/Button')
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      {BUTTON_TYPES.map(
        (type: ButtonType, index: number): React.ReactElement => {
          return <Sharp key={index} {...getRequiredProps()} type={type} />;
        },
      )}
      {BUTTON_TYPES.map((type: ButtonType, index: number) => {
        return <Round key={index} {...getRequiredProps()} type={type} />;
      })}
      {BUTTON_TYPES.map((type: ButtonType, index: number) => {
        return <Circular key={index} {...getRequiredProps()} type={type} />;
      })}
    </>
  ));
