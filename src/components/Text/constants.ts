import {TextVariationProps} from './types';

type DefaultTextVariation =
  | 'Title'
  | 'Heading'
  | 'SubHeading'
  | 'Body'
  | 'Label'
  | 'Quote';

const DEFAULT_TEXT_VARIATION: {
  [textVariation in DefaultTextVariation]: TextVariationProps<null, null>
} = {
  Title: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  Heading: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  SubHeading: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  Body: {
    fontSize: 14,
  },
  Label: {
    fontSize: 16,
  },
  Quote: {
    fontSize: 16,
    isItalic: true,
  },
};

export {DEFAULT_TEXT_VARIATION, DefaultTextVariation};
