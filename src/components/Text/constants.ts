import themes from '../../themes';
import {TextVariationProps, FontSizeProps} from './types';

export type TextVariations =
  | 'Title'
  | 'Heading'
  | 'SubHeading'
  | 'Body'
  | 'Caption'
  | 'Quote';

type FontSizes = {[key in 'small' | 'medium' | 'large']: number};

export const textVariations: {
  [textVariation in TextVariations]: TextVariationProps<
    FontSizes,
    typeof themes,
    null
  >;
} = {
  Title: {
    defaultFontSize: 'medium',
    fontWeight: 'bold',
    fontSizes: {
      small: 20,
      medium: 24,
      large: 28,
    },
  },
  Heading: {
    defaultFontSize: 'medium',
    fontWeight: 'bold',
    fontSizes: {
      small: 18,
      medium: 20,
      large: 22,
    },
  },
  SubHeading: {
    defaultFontSize: 'medium',
    fontWeight: 'bold',
    fontSizes: {
      small: 15,
      medium: 16,
      large: 17,
    },
  },
  Body: {
    allowBold: true,
    allowItalic: true,
    allowLineThrough: true,
    allowUnderline: true,
    defaultFontSize: 'medium',
    fontSizes: {
      small: 11,
      medium: 12,
      large: 13,
    },
  },
  Caption: {
    allowBold: true,
    allowItalic: true,
    allowUnderline: true,
    defaultFontSize: 'medium',
    fontSizes: {
      small: 13,
      medium: 14,
      large: 15,
    },
  },
  Quote: {
    allowLineThrough: true,
    allowUnderline: true,
    defaultFontSize: 'medium',
    fontSizes: {
      small: 13,
      medium: 14,
      large: 15,
    },
    isItalic: true,
  },
};
