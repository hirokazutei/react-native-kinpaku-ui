import React, {useContext} from 'react';
import {Text, TextStyle} from 'react-native';
import {
  TextFactoryProps,
  TextProps as Props,
  TextVariationProps,
} from './types';
import {DefaultObject, OptionalExistCondition} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {DEFAULT_TEXT_VARIATIONS, DefaultTextVariations} from './constants';

function textFactory<
  Themes,
  AdditionalPalettes,
  TextVariations,
  FontSizes,
  EmphasisToggleable
>({
  themes,
  additionalPalettes,
  defaultFontSizeKey,
  textVariations,
}: TextFactoryProps<
  Themes,
  AdditionalPalettes,
  OptionalExistCondition<
    TextVariations,
    typeof DEFAULT_TEXT_VARIATIONS,
    TextVariations
  >,
  FontSizes,
  EmphasisToggleable
>): {
  [Variation in keyof OptionalExistCondition<
    TextVariations,
    typeof DEFAULT_TEXT_VARIATIONS,
    TextVariations
  >]: React.FunctionComponent<
    Props<AdditionalPalettes, FontSizes, EmphasisToggleable>
  >;
} {
  const paletteContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const TextComponents: {
    [Variation in keyof OptionalExistCondition<
      TextVariations,
      typeof DEFAULT_TEXT_VARIATIONS,
      TextVariations
    >]?: React.FC<Props<AdditionalPalettes, FontSizes, EmphasisToggleable>>;
  } = {};

  for (const variationName in textVariations
    ? textVariations
    : DEFAULT_TEXT_VARIATIONS) {
    const {
      allowFontScaling,
      defaultColor = 'text',
      defaultFontSize,
      fontFamily,
      fontSizes,
      fontWeight,
      isBold,
      isItalic,
      letterSpacing,
      lineHeight,
      maxFontSizeMultiplier,
      minimumFontScale,
    } = textVariations
      ? (textVariations as {
          [VariationKey in keyof TextVariations]: TextVariationProps<
            FontSizes,
            AdditionalPalettes
          >;
        })[variationName as keyof TextVariations]
      : DEFAULT_TEXT_VARIATIONS[variationName as DefaultTextVariations];

    const text: React.FC<Props<
      AdditionalPalettes,
      FontSizes,
      EmphasisToggleable
    >> = ({
      align,
      bold,
      color = defaultColor,
      children,
      ellipsizeMode,
      italic,
      numberOfLines,
      size,
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
      // = defaultFontSizeKey || defaultFontSize
      const sizeKey =
        (fontSizes && (size as keyof typeof fontSizes | undefined)) ||
        defaultFontSizeKey;
      const numericSize = (!fontSizes && size) || defaultFontSize;
      const fontSize = fontSizes
        ? (fontSizes as {[SizeKey in keyof typeof fontSizes]: number})[
            sizeKey as keyof typeof fontSizes
          ]
        : (numericSize as number);

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
      let fontStyle: TextStyle['fontStyle'] =
        isItalic || italic ? 'italic' : 'normal';
      fontStyle = italic === false ? 'normal' : fontStyle;

      // Bold
      let fontWeightStyle: TextStyle['fontWeight'] =
        isBold || bold ? 'bold' : 'normal';
      fontWeightStyle =
        fontWeight && fontWeight !== undefined ? fontWeight : fontWeightStyle;
      fontWeightStyle = bold === false ? 'normal' : fontWeightStyle;

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

      // Text Props
      const textProps = {
        allowFontScaling,
        ellipsizeMode,
        maxFontSizeMultiplier,
        minimumFontScale,
        numberOfLines,
      };

      return (
        <Text style={textStyle} {...textProps}>
          {children}
        </Text>
      );
    };
    TextComponents[
      `${variationName}` as keyof OptionalExistCondition<
        TextVariations,
        typeof DEFAULT_TEXT_VARIATIONS,
        TextVariations
      >
    ] = text;
  }

  return TextComponents as {
    [Variation in keyof OptionalExistCondition<
      TextVariations,
      typeof DEFAULT_TEXT_VARIATIONS,
      TextVariations
    >]: React.FC<Props<AdditionalPalettes, FontSizes, EmphasisToggleable>>;
  };
}

export default textFactory;
