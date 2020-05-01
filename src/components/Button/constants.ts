import {FlexAlignType, TextStyle} from 'react-native';
import {UnionDefaultKey} from '../../types';
import {ButtonSizeProps, ButtonShapeVariation, ButtonType} from './types';

const FILL: ButtonType = 'fill';
const CLEAR: ButtonType = 'clear';
const OUTLINE: ButtonType = 'outline';

type DefaultButtonSize =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'huge'
  | 'massive';

const DEFAULTLESS_BUTTON_SIZE: Record<DefaultButtonSize, ButtonSizeProps> = {
  tiny: {
    borderRadius: 6,
    fontSize: 12,
    buttonSpacing: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
  },
  small: {
    borderRadius: 6,
    fontSize: 14,
    buttonSpacing: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
  },
  medium: {
    borderRadius: 8,
    fontSize: 16,
    buttonSpacing: {
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
  },
  large: {
    borderRadius: 8,
    fontSize: 20,
    buttonSpacing: {
      paddingHorizontal: 12,
      paddingVertical: 6,
    },
  },
  huge: {
    borderRadius: 10,
    fontSize: 24,
    buttonSpacing: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
  },
  massive: {
    borderRadius: 12,
    fontSize: 32,
    buttonSpacing: {
      paddingHorizontal: 24,
      paddingVertical: 8,
    },
  },
};

const DEFAULT_BUTTON_SIZE: Record<
  UnionDefaultKey<DefaultButtonSize>,
  ButtonSizeProps
> = {
  ...DEFAULTLESS_BUTTON_SIZE,
  default: DEFAULTLESS_BUTTON_SIZE.medium,
};

const DEFAULT_BUTTON_ALIGN: FlexAlignType = 'center';

const DEFAULT_BUTTON_FONT_WEIGHT: TextStyle['fontWeight'] = 'bold';

const DEFAULT_BUTTON_BORDER_WIDTH: number = 2;

const BORDER_RADIUS_MULTIPLIER: Record<ButtonShapeVariation, number> = {
  Circular: 4,
  Round: 1,
  Sharp: 0,
};

const BUTTON_SHAPE_VARIATION_KEYS: Array<ButtonShapeVariation> = [
  'Circular',
  'Round',
  'Sharp',
];

export {
  BUTTON_SHAPE_VARIATION_KEYS,
  BORDER_RADIUS_MULTIPLIER,
  CLEAR,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_BORDER_WIDTH,
  DEFAULT_BUTTON_FONT_WEIGHT,
  DEFAULT_BUTTON_SIZE,
  DefaultButtonSize,
  FILL,
  OUTLINE,
};
