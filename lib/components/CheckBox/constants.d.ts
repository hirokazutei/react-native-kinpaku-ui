import { CheckBoxSizeProps, CheckBoxVariations } from './types';
import { UnionDefaultKey } from '../../types';
declare type DefaultCheckBoxSizes = 'small' | 'medium' | 'large';
declare const DEFAULT_CHECK_BOX_SIZES: {
    [key in UnionDefaultKey<DefaultCheckBoxSizes>]: CheckBoxSizeProps;
};
declare const CHECK_BOX_VARIATION_KEYS: Array<CheckBoxVariations>;
export { DEFAULT_CHECK_BOX_SIZES, CHECK_BOX_VARIATION_KEYS, DefaultCheckBoxSizes, };
//# sourceMappingURL=constants.d.ts.map