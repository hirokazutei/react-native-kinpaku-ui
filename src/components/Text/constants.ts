import {TextVariationProps} from './types';

type DefaultTextVariations =
  | 'Title'
  | 'Heading'
  | 'SubHeading'
  | 'Body'
  | 'Caption'
  | 'Quote';

const DEFAULT_TEXT_VARIATIONS: {
  [textVariation in DefaultTextVariations]: TextVariationProps<null, null>;
} = {
  Title: {
    fontWeight: 'bold',
    defaultFontSize: 24,
  },
  Heading: {
    fontWeight: 'bold',
    defaultFontSize: 24,
  },
  SubHeading: {
    fontWeight: 'bold',
    defaultFontSize: 20,
  },
  Body: {
    defaultFontSize: 14,
  },
  Caption: {
    defaultFontSize: 16,
  },
  Quote: {
    defaultFontSize: 16,
    isItalic: true,
  },
};

export {DefaultTextVariations, DEFAULT_TEXT_VARIATIONS};
