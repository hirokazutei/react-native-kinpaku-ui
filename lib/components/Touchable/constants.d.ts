import { FlexAlignType } from 'react-native';
import { TouchableAllSizeProps } from './types';
import { UnionDefaultKey } from '../../types';
declare type DefaultTouchableSizes = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';
declare const DEFAULT_TOUCHABLE_SIZES: {
    [key in UnionDefaultKey<DefaultTouchableSizes>]: TouchableAllSizeProps;
};
declare const DEFAULT_TOUCHABLE_ALIGN: FlexAlignType;
declare const DEFAULT_TOUCHABLE_BORDER_WIDTH: number;
declare const touchableSizeKeys: Array<UnionDefaultKey<DefaultTouchableSizes>>;
export { DEFAULT_TOUCHABLE_SIZES, DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, DefaultTouchableSizes, touchableSizeKeys, };
//# sourceMappingURL=constants.d.ts.map