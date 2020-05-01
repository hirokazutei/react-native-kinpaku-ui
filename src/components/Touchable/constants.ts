import {FlexAlignType} from 'react-native';
import {UnionDefaultKey} from '../../types';
import {
  TouchableSizeProps,
  TouchableShapeVariation,
  TouchableType,
} from './types';

const FILL: TouchableType = 'fill';
const OUTLINE: TouchableType = 'outline';
const CLEAR: TouchableType = 'clear';

type DefaultTouchableSize =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'huge'
  | 'massive';

const DEFAULTLESSS_TOUCHABLE_SIZE: Record<
  DefaultTouchableSize,
  TouchableSizeProps
> = {
  tiny: {
    borderRadius: 6,
    touchableSpacing: {
      padding: 4,
    },
  },
  small: {
    borderRadius: 9,
    touchableSpacing: {
      padding: 6,
    },
  },
  medium: {
    borderRadius: 12,
    touchableSpacing: {
      padding: 8,
    },
  },
  large: {
    borderRadius: 16,
    touchableSpacing: {
      padding: 8,
    },
  },
  huge: {
    borderRadius: 18,
    touchableSpacing: {
      padding: 12,
    },
  },
  massive: {
    borderRadius: 24,
    touchableSpacing: {
      padding: 12,
    },
  },
};

const DEFAULT_TOUCHABLE_SIZE: Record<
  UnionDefaultKey<DefaultTouchableSize>,
  TouchableSizeProps
> = {
  ...DEFAULTLESSS_TOUCHABLE_SIZE,
  default: DEFAULTLESSS_TOUCHABLE_SIZE.medium,
};

const DEFAULT_TOUCHABLE_ALIGN: FlexAlignType = 'center';

const DEFAULT_TOUCHABLE_BORDER_WIDTH: number = 2;

const TOUCHABLE_SHAPE_VARIATION_KEYS: Array<TouchableShapeVariation> = [
  'Sharp',
  'Round',
  'Circular',
];

export {
  CLEAR,
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
  DEFAULT_TOUCHABLE_SIZE,
  DefaultTouchableSize,
  FILL,
  OUTLINE,
  TOUCHABLE_SHAPE_VARIATION_KEYS,
};
