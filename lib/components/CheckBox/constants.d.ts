import { CheckBoxSizeProps, CheckBoxShapeVariation, CheckBoxType } from './types';
import { UnionDefaultKey } from '../../types';
declare const OUTLINE: CheckBoxType;
declare const FILL: CheckBoxType;
declare const REVERSE: CheckBoxType;
declare type DefaultCheckBoxSize = 'small' | 'medium' | 'large';
declare const DEFAULT_CHECK_BOX_SIZES: Record<UnionDefaultKey<DefaultCheckBoxSize>, CheckBoxSizeProps>;
declare const CHECK_BOX_SHAPE_VARIATION_KEYS: Array<CheckBoxShapeVariation>;
export { DEFAULT_CHECK_BOX_SIZES, DefaultCheckBoxSize, CHECK_BOX_SHAPE_VARIATION_KEYS, FILL, OUTLINE, REVERSE, };
//# sourceMappingURL=constants.d.ts.map