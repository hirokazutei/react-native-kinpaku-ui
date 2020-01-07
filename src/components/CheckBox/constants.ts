import {CheckBoxSizeProps, CheckBoxVariations} from './types';
import {UnionDefaultKey} from '../../types';

type DefaultCheckBoxSizes = 'small' | 'medium' | 'large';

const DEFAULTLESS_CHECK_BOX_SIZES: {
  [key in DefaultCheckBoxSizes]: CheckBoxSizeProps;
} = {
  small: {
    size: 16,
  },
  medium: {
    size: 20,
  },
  large: {
    size: 24,
  },
};

const DEFAULT_CHECK_BOX_SIZES: {
  [key in UnionDefaultKey<DefaultCheckBoxSizes>]: CheckBoxSizeProps;
} = {
  ...DEFAULTLESS_CHECK_BOX_SIZES,
  default: DEFAULTLESS_CHECK_BOX_SIZES.medium,
};

const CHECK_BOX_VARIATION_KEYS: Array<CheckBoxVariations> = [
  'Outline',
  'Reverse',
  'Fill',
];

export {
  DEFAULT_CHECK_BOX_SIZES,
  CHECK_BOX_VARIATION_KEYS,
  DefaultCheckBoxSizes,
};