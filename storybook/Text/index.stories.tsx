// @flow
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {boolean, select, number, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {textAlignSelect} from '../knobs';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {TextProps, TextVariationProps} from '../.././src/components/Text/types';
import textFactory from '../.././src/components/Text';
import {DEFAULT_TEXT_VARIATIONS} from '../../src/components/Text/constants';

type TextVariations = 'A' | 'B';
type FontSizes = 'small' | 'medium' | 'large';

const textVariations: {
  [variation in TextVariations]: TextVariationProps<FontSizes, false>;
} = {
  A: {
    fontWeight: 'bold',
    fontSizes: {
      small: 24,
      medium: 28,
      large: 32,
    },
  },
  B: {
    fontWeight: 'bold',
    fontSizes: {
      small: 22,
      medium: 24,
      large: 26,
    },
  },
};

const {A, B} = textFactory<
  typeof themes,
  null,
  typeof textVariations,
  FontSizes,
  true
>({
  themes,
  textVariations,
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
    size: select(
      'Numeric Size',
      {small: 15, medium: 13, large: 323},
      undefined,
    ),
    lineThrough: boolean('Line Though', undefined),
    underline: boolean('Underline', undefined),
  };
};

storiesOf('UI/Text', module)
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <A {...DEFAULT_PROPS} {...getOptionalProps()} />
    </>
  ));
