// @flow
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {boolean, select, number, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {textAlignSelect} from '../knobs';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/theme/types';
import {TextProps} from '../../src/components/Text/types';
import textFactory from '../../src/components/Text';
import {DEFAULT_TEXT_VARIATION} from '../../src/components/Text/constants';

const {Title, Heading, SubHeading, Body, Caption, Quote} = textFactory<
  typeof themes,
  null,
  typeof DEFAULT_TEXT_VARIATION,
  null,
  true
>({
  themes,
  textVariation: DEFAULT_TEXT_VARIATION,
});

const DEFAULT_PROPS = {
  children: 'Sample Text',
};

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  text: 'text',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const getRequiredProps = (overrrides = {}): TextProps<null, null, true> => {
  const {children} = {...DEFAULT_PROPS, ...overrrides};
  return {
    children: text('Children', children),
  };
};

const getOptionalProps = (): Partial<TextProps<null, null, true>> => {
  return {
    align: select('Align Options', textAlignSelect, undefined),
    bold: boolean('Bold', undefined),
    color: select('Color Options', colorSelect, undefined),
    italic: boolean('Italic', undefined),
    size: number('Numeric Size', undefined),
    lineThrough: boolean('Line Though', undefined),
    underline: boolean('Underline', undefined),
  };
};

storiesOf('UI/Text', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <Title {...DEFAULT_PROPS} {...getOptionalProps()} />
      <Title {...DEFAULT_PROPS} {...getOptionalProps()} />
      <Heading {...DEFAULT_PROPS} {...getOptionalProps()} />
      <SubHeading {...DEFAULT_PROPS} {...getOptionalProps()} />
      <Body {...DEFAULT_PROPS} {...getOptionalProps()} />
      <Caption {...DEFAULT_PROPS} {...getOptionalProps()} />
      <Quote {...DEFAULT_PROPS} {...getOptionalProps()} />
    </>
  ));
