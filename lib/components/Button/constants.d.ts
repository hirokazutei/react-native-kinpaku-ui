import { FlexAlignType, TextStyle } from 'react-native';
import { ButtonSizeProps, ButtonVariations } from './types';
import { UnionDefaultKey } from '../../types';
declare type DefaultButtonSizes = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';
declare const DEFAULT_BUTTON_SIZES: {
    [key in UnionDefaultKey<DefaultButtonSizes>]: ButtonSizeProps;
};
declare const DEFAULT_BUTTON_ALIGN: FlexAlignType;
declare const DEFAULT_BUTTON_FONT_WEIGHT: TextStyle['fontWeight'];
declare const DEFAULT_BUTTON_BORDER_WIDTH: number;
declare const BORDER_RADIUS_MULTIPLIERS: {
    [key in ButtonVariations]: number;
};
declare const BUTTON_VARIATION_KEYS: Array<ButtonVariations>;
declare const buttonSizeKeys: Array<UnionDefaultKey<DefaultButtonSizes>>;
export { DEFAULT_BUTTON_SIZES, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, BORDER_RADIUS_MULTIPLIERS, BUTTON_VARIATION_KEYS, buttonSizeKeys, DefaultButtonSizes, };
//# sourceMappingURL=constants.d.ts.map