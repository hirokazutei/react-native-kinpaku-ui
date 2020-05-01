import { FlexAlignType, TextStyle } from 'react-native';
import { UnionDefaultKey } from '../../types';
import { ButtonSizeProps, ButtonShapeVariation, ButtonType } from './types';
declare const FILL: ButtonType;
declare const CLEAR: ButtonType;
declare const OUTLINE: ButtonType;
declare type DefaultButtonSize = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';
declare const DEFAULT_BUTTON_SIZE: Record<UnionDefaultKey<DefaultButtonSize>, ButtonSizeProps>;
declare const DEFAULT_BUTTON_ALIGN: FlexAlignType;
declare const DEFAULT_BUTTON_FONT_WEIGHT: TextStyle['fontWeight'];
declare const DEFAULT_BUTTON_BORDER_WIDTH: number;
declare const BORDER_RADIUS_MULTIPLIER: Record<ButtonShapeVariation, number>;
declare const BUTTON_SHAPE_VARIATION_KEYS: Array<ButtonShapeVariation>;
export { BUTTON_SHAPE_VARIATION_KEYS, BORDER_RADIUS_MULTIPLIER, CLEAR, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_BORDER_WIDTH, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_SIZE, DefaultButtonSize, FILL, OUTLINE, };
//# sourceMappingURL=constants.d.ts.map