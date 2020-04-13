import { FlexAlignType, TextStyle } from 'react-native';
import { UnionDefaultKey } from '../../types';
import { ButtonSizeProps, ButtonShapeVariation } from './types';
declare type DefaultButtonSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';
declare const DEFAULT_BUTTON_SIZE: {
    [key in UnionDefaultKey<DefaultButtonSize>]: ButtonSizeProps;
};
declare const DEFAULT_BUTTON_ALIGN: FlexAlignType;
declare const DEFAULT_BUTTON_FONT_WEIGHT: TextStyle['fontWeight'];
declare const DEFAULT_BUTTON_BORDER_WIDTH: number;
declare const BORDER_RADIUS_MULTIPLIER: {
    [key in ButtonShapeVariation]: number;
};
declare const BUTTON_SHAPE_VARIATION_KEYS: Array<ButtonShapeVariation>;
export { BUTTON_SHAPE_VARIATION_KEYS, BORDER_RADIUS_MULTIPLIER, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_BORDER_WIDTH, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_SIZE, DefaultButtonSize, };
//# sourceMappingURL=constants.d.ts.map