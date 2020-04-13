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
  EmphasisToggleable
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
  FontSize,
  EmphasisToggleable
>): {
  [Variation in keyof OptionalExistCondition<
    TextVariation,
    TextVariation,
    typeof DEFAULT_TEXT_VARIATION
  >]: React.FunctionComponent<
    Props<AdditionalPalettes, FontSize, EmphasisToggleable>
  >
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const texts: {
    [Variation in keyof OptionalExistCondition<
      TextVariation,
      TextVariation,
      typeof DEFAULT_TEXT_VARIATION
    >]?: React.FunctionComponent<
      Props<AdditionalPalettes, FontSize, EmphasisToggleable>
    >
  } = {};

  for (const variationName in textVariation
    ? textVariation
    : DEFAULT_TEXT_VARIATION) {
    if (
      (textVariation ? textVariation : DEFAULT_TEXT_VARIATION).hasOwnProperty(
        variationName,
      )
    ) {
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
        ? (textVariation as {
            [VariationKey in keyof TextVariation]: TextVariationProps<
              OptionalExistCondition<FontSize, keyof FontSize, undefined>,
              AdditionalPalettes
            >
          })[variationName as keyof TextVariation]
        : DEFAULT_TEXT_VARIATION[variationName as DefaultTextVariation];

      const Text: React.FunctionComponent<
        Props<AdditionalPalettes, FontSize, EmphasisToggleable>
      > = ({
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
      }: Props<
        AdditionalPalettes,
        FontSize,
        EmphasisToggleable
      >): React.ReactElement<
        Props<AdditionalPalettes, FontSize, EmphasisToggleable>
      > => {
        // Palettes
        const currentThemeKey = useContext(themeContext) || 'default';
        const currentTheme =
          themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];
        const colorResolver = colorResolverFactory<AdditionalPalettes>({
          currentTheme,
          additionalPalettes,
        });

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
        fontWeightStyle =
          fontWeight && fontWeight !== undefined ? fontWeight : fontWeightStyle;
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
          <RNText style={textStyle} {...textProps}>
            {children}
          </RNText>
        );
      };
      texts[
        `${variationName}` as keyof OptionalExistCondition<
          TextVariation,
          TextVariation,
          typeof DEFAULT_TEXT_VARIATION
        >
      ] = Text;
    }
  }

  return texts as {
    [Variation in keyof OptionalExistCondition<
      TextVariation,
      TextVariation,
      typeof DEFAULT_TEXT_VARIATION
    >]: React.FunctionComponent<
      Props<AdditionalPalettes, FontSize, EmphasisToggleable>
    >
  };
}

export default textFactory;
