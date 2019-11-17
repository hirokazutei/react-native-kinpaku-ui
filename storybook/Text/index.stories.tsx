// @flow
import * as React from 'react';
import {FlexAlignType} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {
  FontSizeProps,
  TextVariationProps,
  TextFactoryProps,
  TextProps,
} from '../.././src/components/Text/types';
import textFactory from '../.././src/components/Text';
import {
  DEFAULT_TEXT_VARIATIONS,
  FontSizes,
} from '../../src/components/Text/constants';

const {Title, Heading, SubHeading, Body, Caption, Quote} = textFactory<
  typeof themes,
  null,
  typeof DEFAULT_TEXT_VARIATIONS,
  FontSizes,
  true
>({
  themes,
  defaultFontSizeKey: 'medium',
  textVariations: DEFAULT_TEXT_VARIATIONS,
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

const sizeSelect: {[key in FontSizes]?: FontSizes} = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const getOptionalProps = () => {
  return {
    color: select('Color Options', colorSelect, 'text'),
    size: select('Size Options', sizeSelect, 'medium'),
  };
};

storiesOf('UI/Text', module)
  .addDecorator((story: () => React.ReactElement) => <Provider story={story} />)
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
