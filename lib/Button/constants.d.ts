import { FlexAlignType, TextStyle } from "react-native";
import { ButtonSizeKeys, ButtonSizeProps, ButtonShapes } from "./types";
declare const DEFAULT_BUTTON_SIZES: {
    [key in ButtonSizeKeys]: ButtonSizeProps;
};
declare const DEFAULT_BUTTON_ALIGN: FlexAlignType;
declare const DEFAULT_BUTTON_FONT_WEIGHT: TextStyle["fontWeight"];
declare const DEFAULT_BUTTON_BORDER_WIDTH: number;
declare const BORDER_RADIUS_MULTIPLIERS: {
    [key in ButtonShapes]: number;
};
declare const BUTTON_SHAPE_KEY: Array<ButtonShapes>;
declare const buttonSizeKeys: string[];
export { DEFAULT_BUTTON_SIZES, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, BORDER_RADIUS_MULTIPLIERS, BUTTON_SHAPE_KEY, buttonSizeKeys };
//# sourceMappingURL=constants.d.ts.map