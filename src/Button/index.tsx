import React, { useContext } from "react";
import { TouchableOpacity, Text, FlexAlignType } from "react-native";
import { FactoryProps, ButtonProps as Props } from "./types";
import { DefaultObject, ThemePalette } from "../types";
import {
  DEFAULT_BUTTON_PADDING_SIZES,
  DEFAULT_BUTTON_FONT_SIZES,
  DEFAULT_BUTTON_ALIGN
} from "./constants";

function buttonFactory<PaletteObjectType, ButtonPalette, ButtonSizes>({
  themes,
  buttonPalettes,
  paddingSizes,
  fontSizes
}: FactoryProps<PaletteObjectType, ButtonPalette, ButtonSizes>) {
  const paletteContext: React.Context<
    keyof PaletteObjectType
  > = React.createContext("default" as keyof PaletteObjectType);
  const Button: React.FC<Props<ButtonPalette, ButtonSizes>> = ({
    color,
    size,
    isDisabled,
    isStretched,
    align = "center",
    onPress,
    title
  }: Props<ButtonPalette, ButtonSizes>): React.ReactElement => {
    // Palettes
    const currentThemeKey = useContext(paletteContext) || "default";
    const currentTheme =
      themes[
        `${currentThemeKey}` as keyof PaletteObjectType &
          DefaultObject<ThemePalette>
      ];
    // Color
    const buttonColor =
      (buttonPalettes && buttonPalettes[color as keyof ButtonPalette]) ||
      currentTheme[color as keyof ThemePalette] ||
      currentTheme.primary;

    console.log(buttonColor);

    const touchableStyle = {
      borderRadius: 50, // Think
      backgroundColor: !isDisabled ? buttonColor : currentTheme.disabled,
      padding:
        (paddingSizes &&
          paddingSizes[
            `${size}` as keyof ButtonSizes & DefaultObject<number>
          ]) ||
        DEFAULT_BUTTON_PADDING_SIZES.default,
      alignSelf: !isStretched
        ? DEFAULT_BUTTON_ALIGN
        : ("stretch" as FlexAlignType)
    };

    const textStyle = {
      color: currentTheme.background,
      alignSelf: align,
      fontSize:
        (fontSizes &&
          fontSizes[`${size}` as keyof ButtonSizes & { default: number }]) ||
        DEFAULT_BUTTON_FONT_SIZES.default
    };

    return (
      <TouchableOpacity
        style={touchableStyle}
        disabled={isDisabled}
        onPress={onPress}
        accessibilityLabel={title}
      >
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return Button;
}

export default buttonFactory;
