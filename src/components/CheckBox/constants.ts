import {CheckBoxSizeProps, CheckBoxShapeVariation} from './types';
import {UnionDefaultKey} from '../../types';

type DefaultCheckBoxSize = 'small' | 'medium' | 'large';

const DEFAULTLESS_CHECK_BOX_SIZE: Record<
  DefaultCheckBoxSize,
  CheckBoxSizeProps
> = {
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

const DEFAULT_CHECK_BOX_SIZES: Record<
  UnionDefaultKey<DefaultCheckBoxSize>,
  CheckBoxSizeProps
> = {
  ...DEFAULTLESS_CHECK_BOX_SIZE,
  default: DEFAULTLESS_CHECK_BOX_SIZE.medium,
};

const CHECK_BOX_SHAPE_VARIATION_KEYS: Array<CheckBoxShapeVariation> = [
  'Circular',
  'Round',
  'Sharp',
];

export {
  DEFAULT_CHECK_BOX_SIZES,
  CHECK_BOX_SHAPE_VARIATION_KEYS,
  DefaultCheckBoxSize,
};
