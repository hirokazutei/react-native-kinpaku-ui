import {FlexAlignType} from 'react-native';
import {UnionDefaultKey} from '../../types';
import {TouchableAllSizeProps, TouchableTypeVariations} from './types';

type DefaultTouchableSize =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'huge'
  | 'massive';

const DEFAULTLESSS_TOUCHABLE_SIZE: {
  [key in DefaultTouchableSize]: TouchableAllSizeProps
} = {
  tiny: {
    padding: 4,
    borderRadius: 6,
  },
  small: {
    padding: 6,
    borderRadius: 9,
  },
  medium: {
    padding: 8,
    borderRadius: 12,
  },
  large: {
    padding: 8,
    borderRadius: 16,
  },
  huge: {
    padding: 12,
    borderRadius: 18,
  },
  massive: {
    padding: 12,
    borderRadius: 24,
  },
};

const DEFAULT_TOUCHABLE_SIZE: {
  [key in UnionDefaultKey<DefaultTouchableSize>]: TouchableAllSizeProps
} = {
  ...DEFAULTLESSS_TOUCHABLE_SIZE,
  default: DEFAULTLESSS_TOUCHABLE_SIZE.medium,
};

const DEFAULT_TOUCHABLE_ALIGN: FlexAlignType = 'center';

const DEFAULT_TOUCHABLE_BORDER_WIDTH: number = 2;

const TOUCHABLE_TYPE_VARIATION_KEYS: Array<TouchableTypeVariations> = [
  'Fill',
  'Outline',
];

export {
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
  DEFAULT_TOUCHABLE_SIZE,
  DefaultTouchableSize,
  TOUCHABLE_TYPE_VARIATION_KEYS,
};
