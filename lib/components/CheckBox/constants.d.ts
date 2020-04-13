import { CheckBoxSizeProps, CheckBoxShapeVariation } from './types';
import { UnionDefaultKey } from '../../types';
declare type DefaultCheckBoxSize = 'small' | 'medium' | 'large';
declare const DEFAULT_CHECK_BOX_SIZES: {
    [key in UnionDefaultKey<DefaultCheckBoxSize>]: CheckBoxSizeProps;
};
declare const CHECK_BOX_SHAPE_VARIATION_KEYS: Array<CheckBoxShapeVariation>;
export { DEFAULT_CHECK_BOX_SIZES, CHECK_BOX_SHAPE_VARIATION_KEYS, DefaultCheckBoxSize, };
//# sourceMappingURL=constants.d.ts.map