import React, {useContext} from 'react';
import {Text, TextStyle} from 'react-native';
import {TextFactoryProps, TextProps as Props} from './types';
import {DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';

function textFactory<
  Themes,
  AdditionalPalettes,
  TextVariations,
  FontSizes extends string | string,
  EmphasisToggleable
>({
  themes,
  additionalPalettes,
  defaultFontSizeKey,
  textVariations,
}: TextFactoryProps<
  Themes,
  AdditionalPalettes,
  TextVariations,
  FontSizes,
  EmphasisToggleable
>): {
  [Variation in keyof TextVariations]: React.FunctionComponent<
    Props<AdditionalPalettes, FontSizes, EmphasisToggleable>
  >;
} {
  const paletteContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const TextComponents: {
    [Variation in keyof TextVariations]?: React.FC<
      Props<AdditionalPalettes, FontSizes, EmphasisToggleable>
    >;
  } = {};

  for (const variationName in textVariations) {
    const {
      defaultColor = 'text',
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
      AdditionalPalettes,
      FontSizes,
      EmphasisToggleable
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
      AdditionalPalettes,
      FontSizes,
      EmphasisToggleable
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
        ? fontSizes[size as FontSizes]
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
      Props<AdditionalPalettes, FontSizes, EmphasisToggleable>
    >;
  };
}

export default textFactory;
