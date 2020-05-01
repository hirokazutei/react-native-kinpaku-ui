import { FlexAlignType } from 'react-native';
import { UnionDefaultKey } from '../../types';
import { TouchableSizeProps, TouchableShapeVariation, TouchableType } from './types';
declare const FILL: TouchableType;
declare const OUTLINE: TouchableType;
declare const CLEAR: TouchableType;
declare type DefaultTouchableSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';
declare const DEFAULT_TOUCHABLE_SIZE: Record<UnionDefaultKey<DefaultTouchableSize>, TouchableSizeProps>;
declare const DEFAULT_TOUCHABLE_ALIGN: FlexAlignType;
declare const DEFAULT_TOUCHABLE_BORDER_WIDTH: number;
declare const TOUCHABLE_SHAPE_VARIATION_KEYS: Array<TouchableShapeVariation>;
export { CLEAR, DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, DEFAULT_TOUCHABLE_SIZE, DefaultTouchableSize, FILL, OUTLINE, TOUCHABLE_SHAPE_VARIATION_KEYS, };
//# sourceMappingURL=constants.d.ts.map