import { TouchableOpacityProps, ViewStyle, FlexAlignType } from "react-native";
import { Color, DefaultObject, ThemePalette } from "../types";

type ButtonShape = "circular" | "round" | "sharp";
type ButtonType = "solid" | "clear" | "outline";

type FactoryProps<Themes, ButtonPalette, ButtonSizes> = {
  themes: {
    [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
  };
  buttonPalettes?: {
    [ButtonPaletteKeys in keyof ButtonPalette]: Color;
  };
  paddingSizes?: {
    [SizeKey in keyof ButtonSizes & DefaultObject<number>]: number;
  };
  fontSizes?: {
    [SizeKey in keyof ButtonSizes & DefaultObject<number>]: number;
  };
  defaultButtonShape?: keyof ButtonShape;
  defaultButtonType?: ButtonType;
};

type ButtonProps<ButtonPalette, ButtonSizes> = {
  color?: keyof ThemePalette | keyof ButtonPalette; // default is ThemePalette Primary
  size?: keyof ButtonSizes | keyof DefaultObject<number>; // default declared
  isDisabled?: boolean;
  isStretched?: boolean;
  align?: FlexAlignType;
  onPress: (args: any) => any;
  title: string;
  touchableOpacityProps?: TouchableOpacityProps;
  touchableOpacityStyle?: ViewStyle;
};

type ButtonSizeKeys =
  | "tiny"
  | "small"
  | "medium"
  | "default"
  | "large"
  | "huge"
  | "massive";

export { ButtonShape, ButtonType, FactoryProps, ButtonProps, ButtonSizeKeys };
