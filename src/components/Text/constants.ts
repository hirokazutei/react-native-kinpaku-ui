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
  [textVariation in TextVariations]: TextVariationProps<FontSizes, null>;
} = {
  Title: {
    fontWeight: 'bold',
    fontSizes: {
      small: 24,
      medium: 28,
      large: 32,
    },
  },
  Heading: {
    fontWeight: 'bold',
    fontSizes: {
      small: 22,
      medium: 24,
      large: 26,
    },
  },
  SubHeading: {
    fontWeight: 'bold',
    fontSizes: {
      small: 18,
      medium: 20,
      large: 22,
    },
  },
  Body: {
    fontSizes: {
      small: 13,
      medium: 14,
      large: 15,
    },
  },
  Caption: {
    fontSizes: {
      small: 15,
      medium: 16,
      large: 17,
    },
  },
  Quote: {
    fontSizes: {
      small: 15,
      medium: 16,
      large: 17,
    },
    isItalic: true,
  },
};

export {FontSizes, TextVariations, DEFAULT_TEXT_VARIATIONS};
