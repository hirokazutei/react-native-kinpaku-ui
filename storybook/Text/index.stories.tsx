// @flow
import * as React from 'react';
import {TextProps as RNTextProps} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {boolean, select, number, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {textAlignSelect} from '../knobs';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/theme/types';
import {TextProps} from '../../src/components/Text/types';
import textFactory from '../../src/components/Text';
import {DEFAULT_TEXT_VARIATION} from '../../src/components/Text/constants';

const {Title, Heading, SubHeading, Body, Label, Quote} = textFactory<
  typeof themes,
  null,
  null,
  null,
  true,
  false
>({
  themes,
});

const DEFAULT_PROPS = {
  children: 'Sample Text',
};

const textColorSelect: Partial<
  Record<keyof ThemePalette, keyof ThemePalette>
> = {
  text: 'text',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const ellipsizeModeSelect: Record<
  RNTextProps['ellipsizeMode'],
  RNTextProps['ellipsizeMode']
> = {
  head: 'head',
  middle: 'middle',
  tail: 'tail',
  clip: 'clip',
};

const getRequiredProps = (
  overrrides: Partial<TextProps<null, null, true, false>> = {},
): TextProps<null, null, true, false> => {
  const {children} = {...DEFAULT_PROPS, ...overrrides};
  return {
    children: text('Children', children),
  };
};

const getOptionalProps = (
  overrrides: Partial<TextProps<null, null, true, false>> = {},
): Partial<TextProps<null, null, true, false>> => {
  const {
    align,
    color,
    ellipsizeMode,
    isBold,
    isItalic,
    isLinethrough,
    isUnderline,
    numberOfLines,
    size,
  } = overrrides;
  return {
    align: select('Align Options', textAlignSelect, align),
    color: select('Color Options', textColorSelect, color),
    ellipsizeMode: select(
      'Ellipsize Mode Options',
      ellipsizeModeSelect,
      ellipsizeMode,
    ),
    isBold: boolean('Bold', isBold),
    isItalic: boolean('Italic', isItalic),
    isLinethrough: boolean('Line Though', isLinethrough),
    isUnderline: boolean('Underline', isUnderline),
    numberOfLines: number('Nuber of Lines', numberOfLines),
    size: number('Numeric Size', size),
  };
};

storiesOf('UI/Text', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Title {...getRequiredProps()} {...getOptionalProps()} />
      <Heading {...getRequiredProps()} {...getOptionalProps()} />
      <SubHeading {...getRequiredProps()} {...getOptionalProps()} />
      <Body {...getRequiredProps()} {...getOptionalProps()} />
      <Label {...getRequiredProps()} {...getOptionalProps()} />
      <Quote {...getRequiredProps()} {...getOptionalProps()} />
    </>
  ));
