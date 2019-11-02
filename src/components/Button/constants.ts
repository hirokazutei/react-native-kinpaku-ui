import {FlexAlignType, TextStyle} from 'react-native';
import {ButtonSizes, ButtonSizeProps, ButtonVariations} from './types';

const DEFAULT_BUTTON_SIZES: {[key in ButtonSizes]: ButtonSizeProps} = {
  default: {
    verticalPaddding: 6,
    horizontalPadding: 12,
    fontSize: 16,
    borderRadius: 8,
  },
  tiny: {
    verticalPaddding: 4,
    horizontalPadding: 8,
    fontSize: 12,
    borderRadius: 6,
  },
  small: {
    verticalPaddding: 4,
    horizontalPadding: 8,
    fontSize: 14,
    borderRadius: 6,
  },
  medium: {
    verticalPaddding: 6,
    horizontalPadding: 12,
    fontSize: 16,
    borderRadius: 8,
  },
  large: {
    verticalPaddding: 6,
    horizontalPadding: 12,
    fontSize: 20,
    borderRadius: 8,
  },
  huge: {
    verticalPaddding: 8,
    horizontalPadding: 16,
    fontSize: 24,
    borderRadius: 10,
  },
  massive: {
    verticalPaddding: 8,
    horizontalPadding: 24,
    fontSize: 32,
    borderRadius: 12,
  },
};

const DEFAULT_BUTTON_ALIGN: FlexAlignType = 'center';

const DEFAULT_BUTTON_FONT_WEIGHT: TextStyle['fontWeight'] = 'bold';

const DEFAULT_BUTTON_BORDER_WIDTH: number = 2;

const BORDER_RADIUS_MULTIPLIERS: {[key in ButtonVariations]: number} = {
  Circular: 4,
  Round: 1,
  Sharp: 0,
};

const BUTTON_VARIATION_KEYS: Array<ButtonVariations> = [
  'Circular',
  'Round',
  'Sharp',
];

const buttonSizeKeys: Array<ButtonSizes> = [
  'default',
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
  'massive',
];

export {
  DEFAULT_BUTTON_SIZES,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_FONT_WEIGHT,
  DEFAULT_BUTTON_BORDER_WIDTH,
  BORDER_RADIUS_MULTIPLIERS,
  BUTTON_VARIATION_KEYS,
  buttonSizeKeys,
};
