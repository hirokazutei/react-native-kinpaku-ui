import React, {useContext} from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import {OptionalExistCondition, UnionDefaultKey} from '../../types';
import {colorResolverFactory} from '../../helper';
import {
  TextFactoryProps,
  TextProps as Props,
  TextVariationProps,
} from './types';
import {DEFAULT_TEXT_VARIATION, DefaultTextVariation} from './constants';

function textFactory<
  Themes,
  AdditionalPalettes,
  TextVariation,
  FontSize,
  EmphasisToggleable,
  AllowCustomProps
>({
  themes,
  additionalPalettes,
  defaultFontSizeKey,
  textVariation,
}: TextFactoryProps<
  Themes,
  AdditionalPalettes,
  OptionalExistCondition<
    TextVariation,
    TextVariation,
    typeof DEFAULT_TEXT_VARIATION
  >,
  OptionalExistCondition<FontSize, FontSize, null>,
  EmphasisToggleable,
  AllowCustomProps
>): {
  [Variation in keyof OptionalExistCondition<
    TextVariation,
    TextVariation,
    typeof DEFAULT_TEXT_VARIATION
  >]: React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<FontSize, FontSize, null>,
      EmphasisToggleable,
      AllowCustomProps
    >
  >
} {
  // Type
  type TextProps = Props<
    AdditionalPalettes,
    OptionalExistCondition<FontSize, FontSize, null>,
    EmphasisToggleable,
    AllowCustomProps
  >;

  type TextVariationKeys = keyof OptionalExistCondition<
    TextVariation,
    TextVariation,
    typeof DEFAULT_TEXT_VARIATION
  >;

  type ExistanceConfirmedTextVariation = {
    [VariationKeys in keyof TextVariation]: TextVariationProps<
      OptionalExistCondition<FontSize, keyof FontSize, null>,
      AdditionalPalettes
    >
  };

  // Context
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  // Text Collections
  const texts: {
    [Variation in TextVariationKeys]?: React.FunctionComponent<TextProps>
  } = {};

  for (const variationName in textVariation
    ? (textVariation as ExistanceConfirmedTextVariation)
    : DEFAULT_TEXT_VARIATION) {
    if (
      (textVariation
        ? (textVariation as ExistanceConfirmedTextVariation)
        : DEFAULT_TEXT_VARIATION
      ).hasOwnProperty(variationName)
    ) {
      const Text = ({
        _customTextProps,
        _customTextStyle,
        align,
        bold,
        color,
        children,
        ellipsizeMode,
        italic,
        numberOfLines,
        size,
        lineThrough,
        underline,
      }: TextProps) => {
        // Palettes
        const currentThemeKey = useContext(themeContext) || 'default';
        const currentTheme =
          themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];
        const colorResolver = colorResolverFactory<AdditionalPalettes>({
          currentTheme,
          additionalPalettes,
        });

        // Text Settings
        const {
          allowFontScaling,
          defaultColor,
          defaultFontSize,
          fontFamily,
          fontSize,
          fontWeight,
          isBold,
          isItalic,
          letterSpacing,
          lineHeight,
          maxFontSizeMultiplier,
          minimumFontScale,
        } = textVariation
          ? (textVariation as ExistanceConfirmedTextVariation)[
              variationName as keyof TextVariation
            ]
          : DEFAULT_TEXT_VARIATION[variationName as DefaultTextVariation];

        // Color
        const fontColor = colorResolver({
          color,
          defaultColor: colorResolver({
            color: defaultColor,
            defaultColor: currentTheme.text,
          }),
        });

        // Size
        const sizeKey =
          (fontSize && (size as keyof typeof fontSize | undefined)) ||
          defaultFontSizeKey;
        const numericSize = (!fontSize && size) || defaultFontSize;
        const textFontSize = fontSize
          ? (fontSize as {[SizeKey in keyof typeof fontSize]: number})[
              sizeKey as keyof typeof fontSize
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
        fontWeightStyle = fontWeight ? fontWeight : fontWeightStyle;
        fontWeightStyle = bold === false ? 'normal' : fontWeightStyle;

        // Text Style
        const textStyle: TextStyle = {
          color: fontColor,
          fontFamily,
          fontSize: textFontSize,
          fontStyle,
          fontWeight: fontWeightStyle,
          letterSpacing,
          lineHeight,
          textAlign: align,
          textDecorationLine,
          ..._customTextStyle,
        };

        // Text Props
        const textProps = {
          allowFontScaling,
          ellipsizeMode,
          maxFontSizeMultiplier,
          minimumFontScale,
          numberOfLines,
          ..._customTextProps,
        };

        return (
          <RNText style={textStyle} {...textProps}>
            {children}
          </RNText>
        );
      };
      texts[`${variationName}` as TextVariationKeys] = Text;
    }
  }
  return texts as {
    [Variation in TextVariationKeys]: React.FunctionComponent<TextProps>
  };
}

export default textFactory;
