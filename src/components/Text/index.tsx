import React, {useContext} from 'react';
import {TouchableOpacity, Text, FlexAlignType, TextStyle} from 'react-native';
import {
  FontSizeProps,
  TextVariationProps,
  TextFactoryProps,
  TextProps as Props,
} from './types';
import {DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {DEFAULT_TEXT_VARIATIONS} from './constants';

function textFactory<Themes, AdditionalPalettes, TextVariations, FontSizes>({
  themes,
  additionalPalettes,
  defaultFontSizeKey,
  textVariations,
}: TextFactoryProps<Themes, AdditionalPalettes, TextVariations, FontSizes>): {
  [Variation in keyof TextVariations]: React.FunctionComponent<
    Props<
      Themes,
      AdditionalPalettes,
      FontSizes,
      undefined | boolean,
      undefined | boolean,
      undefined | boolean,
      undefined | boolean
    >
  >;
} {
  const paletteContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const TextComponents: {
    [Variation in keyof TextVariations]?: React.FC<
      Props<
        Themes,
        AdditionalPalettes,
        FontSizes,
        undefined | boolean,
        undefined | boolean,
        undefined | boolean,
        undefined | boolean
      >
    >;
  } = {};

  for (const variationName in textVariations) {
    const {
      allowBold,
      allowItalic,
      allowLineThrough,
      allowUnderline,
      defaultColor,
      defaultFontSize,
      fontFamily,
      fontSizes,
      fontWeight,
      isBold,
      isItalic,
      letterSpacing,
      lineHeight,
    } = textVariations[variationName];

    const text: React.FC<Props<
      Themes,
      AdditionalPalettes,
      FontSizes,
      typeof allowBold,
      typeof allowItalic,
      typeof allowLineThrough,
      typeof allowUnderline
    >> = ({
      align,
      bold,
      color = defaultColor,
      children,
      italic,
      size = defaultFontSizeKey || defaultFontSize,
      lineThrough,
      underline,
    }: Props<
      Themes,
      AdditionalPalettes,
      FontSizes,
      typeof allowBold,
      typeof allowItalic,
      typeof allowLineThrough,
      typeof allowUnderline
    >): React.ReactElement => {
      // Palettes
      const currentThemeKey = useContext(paletteContext) || 'default';
      const currentTheme =
        themes[
          `${currentThemeKey}` as keyof (Themes & DefaultObject<ThemePalette>)
        ];

      // Color
      const fontColor =
        (additionalPalettes &&
          additionalPalettes[color as keyof AdditionalPalettes]) ||
        currentTheme[color as keyof ThemePalette];

      // Size
      const fontSize = fontSizes
        ? fontSizes[size as keyof FontSizes]
        : (size as number);

      // DecorationLine
      let textDecorationLine: TextStyle['textDecorationLine'] = 'none';
      if (underline && lineThrough) {
        textDecorationLine = 'underline line-through';
      } else if (underline) {
        textDecorationLine = 'underline';
      } else if (lineThrough) {
        textDecorationLine = 'line-through';
      }

      // FontStyle
      let fontStyle: TextStyle['fontStyle'] = isItalic ? 'italic' : 'normal';
      fontStyle = !italic && italic !== undefined ? 'normal' : fontStyle;

      // Bold
      let fontWeightStyle: TextStyle['fontWeight'] = isBold ? 'bold' : 'normal';
      fontWeightStyle =
        fontWeight && fontWeight !== undefined ? fontWeight : fontWeightStyle;
      fontWeightStyle =
        !bold && bold !== undefined ? 'normal' : fontWeightStyle;

      // Text Style
      const textStyle: TextStyle = {
        color: fontColor,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight: fontWeightStyle,
        letterSpacing,
        lineHeight,
        textAlign: align,
        textDecorationLine,
      };

      return <Text style={textStyle}>{children}</Text>;
    };
    TextComponents[`${variationName}` as keyof TextVariations] = text;
  }

  return TextComponents as {
    [Variation in keyof TextVariations]: React.FC<
      Props<
        Themes,
        AdditionalPalettes,
        FontSizes,
        undefined | boolean,
        undefined | boolean,
        undefined | boolean,
        undefined | boolean
      >
    >;
  };
}

export default textFactory;
