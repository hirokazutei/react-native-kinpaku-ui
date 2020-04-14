import {RadioButtonSizeProps, RadioButtonShapeVariation} from './types';
import {UnionDefaultKey} from '../../types';

type DefaultRadioButtonSize = 'small' | 'medium' | 'large';

const DEFAULTLESS_RADIO_BUTTON_SIZE: {
  [key in DefaultRadioButtonSize]: RadioButtonSizeProps
} = {
  small: {
    borderThickness: 2,
    dotSize: 6,
    size: 12,
  },
  medium: {
    borderThickness: 2,
    dotSize: 8,
    size: 16,
  },
  large: {
    borderThickness: 2,
    dotSize: 10,
    size: 20,
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
  RADIO_BUTTON_SHAPE_VARIATION_KEYS,
  DefaultRadioButtonSize,
};
