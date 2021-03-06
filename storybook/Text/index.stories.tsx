// @flow
import * as React from 'react';
import {TextProps as RNTextProps} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {boolean, select, number, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {selectTextAlign, selectTextColor} from '../knobs';
import themes from '../../src/themes';
import {TextProps} from '../../src/components/Text/types';
import textFactory from '../../src/components/Text';

const {Title, Heading, SubHeading, Body, Label, Quote} = textFactory<
  typeof themes
>({
  themes,
});

type StoryTextProps = TextProps;

const DEFAULT_PROPS = {
  children: 'Sample Text',
};

const selectEllipsizeMode: Array<RNTextProps['ellipsizeMode']> = [
  'head',
  'middle',
  'tail',
  'clip',
];

const getRequiredProps = (
  overrrides: Partial<StoryTextProps> = {},
): StoryTextProps => {
  const {children} = {...DEFAULT_PROPS, ...overrrides};
  return {
    children: text('Children', children),
  };
};

const getOptionalProps = (
  overrrides: Partial<StoryTextProps> = {},
): Partial<StoryTextProps> => {
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
    align: select('Align Options', selectTextAlign, align),
    color: select('Color Options', selectTextColor, color),
    ellipsizeMode: select(
      'Ellipsize Mode Options',
      selectEllipsizeMode,
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
