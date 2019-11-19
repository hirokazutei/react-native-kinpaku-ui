import {FlexAlignType} from 'react-native';
import {TouchableAllSizeProps} from './types';
import {AddDefaultKey} from '../../types';

type DefaultTouchableSizes =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'large'
  | 'huge'
  | 'massive';

const DEFAULTLESSS_TOUCHABLE_SIZES: {
  [key in DefaultTouchableSizes]: TouchableAllSizeProps;
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

const DEFAULT_TOUCHABLE_SIZES: {
  [key in AddDefaultKey<DefaultTouchableSizes>]: TouchableAllSizeProps;
} = {
  ...DEFAULTLESSS_TOUCHABLE_SIZES,
  default: DEFAULTLESSS_TOUCHABLE_SIZES.medium,
};

const DEFAULT_TOUCHABLE_ALIGN: FlexAlignType = 'center';

const DEFAULT_TOUCHABLE_BORDER_WIDTH: number = 2;

const touchableSizeKeys: Array<AddDefaultKey<DefaultTouchableSizes>> = [
  'default',
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
  'massive',
];

export {
  DEFAULT_TOUCHABLE_SIZES,
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
  DefaultTouchableSizes,
  touchableSizeKeys,
};
