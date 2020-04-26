import { FlexAlignType } from 'react-native';
import { UnionDefaultKey } from '../../types';
import { TouchableAllSizeProps, TouchableShapeVariation } from './types';
declare type DefaultTouchableSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';
declare const DEFAULT_TOUCHABLE_SIZE: Record<UnionDefaultKey<DefaultTouchableSize>, TouchableAllSizeProps>;
declare const DEFAULT_TOUCHABLE_ALIGN: FlexAlignType;
declare const DEFAULT_TOUCHABLE_BORDER_WIDTH: number;
declare const TOUCHABLE_SHAPE_VARIATION_KEYS: Array<TouchableShapeVariation>;
export { DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, DEFAULT_TOUCHABLE_SIZE, DefaultTouchableSize, TOUCHABLE_SHAPE_VARIATION_KEYS, };
//# sourceMappingURL=constants.d.ts.map