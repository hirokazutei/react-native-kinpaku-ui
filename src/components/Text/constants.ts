import themes from '../../themes';
import {TextVariationProps} from './types';

type TextVariations =
  | 'Title'
  | 'Heading'
  | 'SubHeading'
  | 'Body'
  | 'Caption'
  | 'Quote';

type FontSizes = 'small' | 'medium' | 'large';

const DEFAULT_TEXT_VARIATIONS: {
  [textVariation in TextVariations]: TextVariationProps<
    {[key in FontSizes]: number},
    typeof themes,
    null
  >;
} = {
  Title: {
    fontWeight: 'bold',
    fontSizes: {
      small: 20,
      medium: 24,
      large: 28,
    },
  },
  Heading: {
    fontWeight: 'bold',
    fontSizes: {
      small: 18,
      medium: 20,
      large: 22,
    },
  },
  SubHeading: {
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
    fontSizes: {
      small: 13,
      medium: 14,
      large: 15,
    },
  },
  Quote: {
    allowLineThrough: true,
    allowUnderline: true,
    fontSizes: {
      small: 13,
      medium: 14,
      large: 15,
    },
    isItalic: true,
  },
};

export {TextVariations, DEFAULT_TEXT_VARIATIONS};
