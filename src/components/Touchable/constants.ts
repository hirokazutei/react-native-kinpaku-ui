import {FlexAlignType, TextStyle} from 'react-native';
import {
  TouchablePaddingKeys,
  TouchableAllPaddingProps,
  TouchableType,
} from './types';

const DEFAULT_TOUCHABLE_SIZES: {
  [key in TouchablePaddingKeys]: TouchableAllPaddingProps;
} = {
  default: {
    padding: 4,
    borderRadius: 4,
  },
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

const touchableTypeKeys: Array<TouchableType> = ['filled', 'bordered'];

const DEFAULT_TOUCHABLE_ALIGN: FlexAlignType = 'center';

const DEFAULT_TOUCHABLE_BORDER_WIDTH: number = 2;

const touchableSizeKeys: Array<TouchablePaddingKeys> = [
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
  touchableSizeKeys,
  touchableTypeKeys,
};
