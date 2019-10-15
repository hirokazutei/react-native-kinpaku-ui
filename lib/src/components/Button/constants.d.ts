import { FlexAlignType, TextStyle } from 'react-native';
import { ButtonSizeKeys, ButtonSizeProps, ButtonShapes } from './types';
declare const DEFAULT_BUTTON_SIZES: {
    [key in ButtonSizeKeys]: ButtonSizeProps;
};
declare const DEFAULT_BUTTON_ALIGN: FlexAlignType;
declare const DEFAULT_BUTTON_FONT_WEIGHT: TextStyle['fontWeight'];
declare const DEFAULT_BUTTON_BORDER_WIDTH: number;
declare const BORDER_RADIUS_MULTIPLIERS: {
    [key in ButtonShapes]: number;
};
declare const buttonShapeKeys: Array<ButtonShapes>;
declare const buttonSizeKeys: Array<ButtonSizeKeys>;
export { DEFAULT_BUTTON_SIZES, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, BORDER_RADIUS_MULTIPLIERS, buttonShapeKeys, buttonSizeKeys, };
//# sourceMappingURL=constants.d.ts.map