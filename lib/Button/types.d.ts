import {
  TouchableOpacityProps,
  TextProperties,
  ViewStyle,
  TextStyle,
  FlexAlignType
} from "react-native";
import { Color, DefaultObject, ThemePalette } from "../types";
declare type ButtonShapes = "circular" | "round" | "sharp";
declare type ButtonType = "solid" | "clear" | "outline";
declare type ButtonSizeProps = {
  horizontalPadding: number;
  verticalPaddding: number;
  fontSize: number;
  borderRadius: number;
};
declare type FactoryProps<Themes, ButtonPalettes, ButtonSizes> = {
  themes: {
    [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
  };
  buttonPalettes?: {
    [ButtonPaletteKeys in keyof ButtonPalettes]: Color;
  };
  buttonSizes?: {
    [SizeKey in keyof ButtonSizes &
      DefaultObject<ButtonSizeProps>]: ButtonSizeProps;
  };
  defaultButtonShape?: keyof ButtonShapes;
  defaultButtonType?: ButtonType;
};
declare type ButtonProps<ButtonPalettes, ButtonSizes> = {
  color?: keyof ThemePalette | keyof ButtonPalettes;
  size?: keyof ButtonSizes | keyof DefaultObject<number>;
  isDisabled?: boolean;
  isStretched?: boolean;
  align?: FlexAlignType;
  onPress: (args: any) => any;
  title: string;
  type?: ButtonType;
  additionalButtonProps?: TouchableOpacityProps;
  additionalButtonStyle?: ViewStyle;
  additionalTextProps?: TextProperties;
  additionalTextStyle?: TextStyle;
};
declare type ButtonSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "default"
  | "large"
  | "huge"
  | "massive";
export {
  ButtonShapes,
  ButtonType,
  FactoryProps,
  ButtonProps,
  ButtonSizeKeys,
  ButtonSizeProps
};
//# sourceMappingURL=types.d.ts.map
