// @flow
import * as React from 'react';
import Provider from '../../../../storybook/Provider';
import {ButtonProps, ButtonType} from '../../Button/types';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';

import {UIFactory} from '..';
const themes = {
  test: {
    primary: 'yellow',
    secondary: 'yellow',
    tertiary: 'yellow',
    disabled: 'black',
    background: 'white',
    text: 'black',
  },
  default: {
    primary: '#88EEBB',
    secondary: '#55AADD',
    tertiary: '#116688',
    disabled: 'black',
    background: 'white',
    text: 'black',
  },
};

const {Sharp, Round, Circular} = UIFactory<typeof themes>(themes);

const DEFAULT_PROPS = {
  color: 'primary',
  isDisabled: false,
  isStretched: false,
  align: 'center',
  title: 'PRESS HERE',
  size: 'large',
};

const BUTTON_TYPES = ['solid', 'outline', 'clear'];

const getRequiredProps = (overrides = {}): ButtonProps<any, any> => {
  const {color, isDisabled, isStretched, align, title, size} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    color: select(
      'Color Options',
      {
        primary: 'primary',
        secondary: 'secondary',
        tertiary: 'tertiary',
      },
      color,
    ),
    isDisabled: boolean('isDisabled', isDisabled),
    isStretched: boolean('isStretched', isStretched),
    align,
    onPress: action('button-pressed'),
    title: text('Title', title),
    size,
  };
};

storiesOf('UI', module)
  .addDecorator(story => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <>
      {BUTTON_TYPES.map((type: ButtonType) => {
        return <Sharp {...getRequiredProps()} type={type} />;
      })}
      {BUTTON_TYPES.map((type: ButtonType) => {
        return <Round {...getRequiredProps()} type={type} />;
      })}
      {BUTTON_TYPES.map((type: ButtonType) => {
        return <Circular {...getRequiredProps()} type={type} />;
      })}
    </>
  ));
