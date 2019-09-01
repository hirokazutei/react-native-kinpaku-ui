import {
  TouchableOpacityProps,
  TextProperties,
  ViewStyle,
  TextStyle,
  FlexAlignType
} from "react-native";
import { Color, DefaultObject, ThemePalette } from "../types";

type ButtonShapes = "circular" | "round" | "sharp";
type ButtonType = "solid" | "clear" | "outline";

type ButtonSizeProps = {
  horizontalPadding: number;
  verticalPaddding: number;
  fontSize: number;
  borderRadius: number;
};

type FactoryProps<Themes, ButtonPalette, ButtonSizes> = {
  themes: {
    [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
  };
  buttonPalettes?: {
    [ButtonPaletteKeys in keyof ButtonPalette]: Color;
  };
  buttonSizes?: {
    [SizeKey in keyof ButtonSizes &
      DefaultObject<ButtonSizeProps>]: ButtonSizeProps;
  };
  defaultButtonShape?: keyof ButtonShapes;
  defaultButtonType?: ButtonType;
};

type ButtonProps<ButtonPalette, ButtonSizes> = {
  color?: keyof ThemePalette | keyof ButtonPalette;
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

type ButtonSizeKeys =
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
