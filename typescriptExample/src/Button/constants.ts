import {FlexAlignType, TextStyle} from 'react-native';
import {ButtonSizeKeys, ButtonSizeProps, ButtonShape} from './types';

const DEFAULT_BUTTON_SIZES: {[key in ButtonSizeKeys]: ButtonSizeProps} = {
  default: {
    verticalPaddding: 6,
    horizontalPadding: 12,
    fontSize: 16,
  },
  tiny: {
    verticalPaddding: 4,
    horizontalPadding: 8,
    fontSize: 12,
  },
  small: {
    verticalPaddding: 4,
    horizontalPadding: 8,
    fontSize: 14,
  },
  medium: {
    verticalPaddding: 6,
    horizontalPadding: 12,
    fontSize: 16,
  },
  large: {
    verticalPaddding: 6,
    horizontalPadding: 12,
    fontSize: 20,
  },
  huge: {
    verticalPaddding: 8,
    horizontalPadding: 16,
    fontSize: 24,
  },
  massive: {
    verticalPaddding: 8,
    horizontalPadding: 24,
    fontSize: 32,
  },
};

const DEFAULT_BUTTON_ALIGN: FlexAlignType = 'center';

const DEFAULT_BUTTON_FONT_WEIGHT: TextStyle['fontWeight'] = 'bold';

const DEFAULT_BUTTON_BORDER_WIDTH: number = 2;

const BORDER_RADIUS_MULTIPLIERS: {[key in ButtonShape]: number} = {
  circular: 4,
  round: 1,
  sharp: 0,
};

const BUTTON_SHAPE_KEY = ['circular', 'round', 'sharp'];

const buttonSizeKeys = [
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
  BUTTON_SHAPE_KEY,
  buttonSizeKeys,
};
