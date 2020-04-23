import {RadioButtonSizeProps, RadioButtonShapeVariation} from './types';
import {UnionDefaultKey} from '../../types';

type DefaultRadioButtonSize = 'small' | 'medium' | 'large';

const DEFAULTLESS_RADIO_BUTTON_SIZE: {
  [key in DefaultRadioButtonSize]: RadioButtonSizeProps
} = {
  small: {
    borderThickness: 2,
    dotSize: 8,
    size: 16,
  },
  medium: {
    borderThickness: 2,
    dotSize: 10,
    size: 20,
  },
  large: {
    borderThickness: 2,
    dotSize: 12,
    size: 24,
  },
};

const DEFAULT_RADIO_BUTTON_SIZE: {
  [key in UnionDefaultKey<DefaultRadioButtonSize>]: RadioButtonSizeProps
} = {
  ...DEFAULTLESS_RADIO_BUTTON_SIZE,
  default: DEFAULTLESS_RADIO_BUTTON_SIZE.medium,
};

const RADIO_BUTTON_SHAPE_VARIATION_KEYS: Array<RadioButtonShapeVariation> = [
  'Circular',
  'Round',
  'Sharp',
];

export {
  DEFAULT_RADIO_BUTTON_SIZE,
  DefaultRadioButtonSize,
  RADIO_BUTTON_SHAPE_VARIATION_KEYS,
};
