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
import {TextSizeProps} from '../..';

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
  variation,
}: TextFactoryProps<
  Themes,
  AdditionalPalettes,
  OptionalExistCondition<
    TextVariation,
    TextVariation,
    typeof DEFAULT_TEXT_VARIATION
  >,
  FontSize,
  EmphasisToggleable,
  AllowCustomProps
>): {
  [Variation in keyof OptionalExistCondition<
    TextVariation,
    TextVariation,
    typeof DEFAULT_TEXT_VARIATION
  >]: React.FunctionComponent<
    Props<AdditionalPalettes, FontSize, EmphasisToggleable, AllowCustomProps>
  >
} {
  // Type
  type TextProps = Props<
    AdditionalPalettes,
    FontSize,
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
      FontSize,
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

  for (const variationName in variation
    ? (variation as ExistanceConfirmedTextVariation)
    : DEFAULT_TEXT_VARIATION) {
    if (
      (variation
        ? (variation as ExistanceConfirmedTextVariation)
        : DEFAULT_TEXT_VARIATION
      ).hasOwnProperty(variationName)
    ) {
      const Text = ({
        _customTextProps,
        _customTextStyle,
        align,
        color,
        children,
        ellipsizeMode,
        isBold,
        isItalic,
        isLinethrough,
        isUnderline,
        numberOfLines,
        size,
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
          fontFamily,
          fontSize,
          fontWeight = 'normal',
          fontBoldWeight = 'bold',
          isBold: boldTextSetting,
          isItalic: italicTextSetting,
          letterSpacing,
          lineHeight,
          maxFontSizeMultiplier,
          minimumFontScale,
        } = variation
          ? (variation as ExistanceConfirmedTextVariation)[
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
        const textFontSize = (() => {
          if (typeof fontSize == 'number') {
            return size || fontSize;
          } else {
            return size
              ? (fontSize as TextSizeProps<FontSize>)[
                  size as keyof UnionDefaultKey<FontSize>
                ]
              : (fontSize as TextSizeProps<FontSize>)[
                  'default' as keyof UnionDefaultKey<FontSize>
                ];
          }
        })();
        /*
        const sizeKey =
          (fontSize && (size as keyof typeof fontSize | undefined)) ||
          defaultFontSizeKey;
        const numericSize = (!fontSize && size) || defaultFontSize;
        const textFontSize = fontSize
          ? (fontSize as {[SizeKey in keyof typeof fontSize]: number})[
              sizeKey as keyof typeof fontSize
            ]
          : (numericSize as number);
*/
        // DecorationLine
        const textDecorationLine: TextStyle['textDecorationLine'] = (() => {
          if (isUnderline && isLinethrough) {
            return 'underline line-through';
          } else if (isUnderline) {
            return 'underline';
          } else if (isLinethrough) {
            return 'line-through';
          } else {
            return 'none';
          }
        })();

        // FontStyle
        const isTextItalic =
          typeof isItalic !== 'undefined' ? isItalic : italicTextSetting;
        const fontStyle: TextStyle['fontStyle'] = isTextItalic
          ? 'italic'
          : 'normal';

        // Bold
        const isTextBold =
          typeof isBold !== 'undefined' ? isBold : boldTextSetting;
        const fontWeightStyle: TextStyle['fontWeight'] = isTextBold
          ? fontBoldWeight
          : fontWeight;

        // Text Style
        const textStyle: TextStyle = {
          color: fontColor,
          fontFamily,
          fontSize: textFontSize as number,
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
