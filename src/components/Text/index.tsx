import React, {useContext} from 'react';
import {Text as RNText, TextStyle} from 'react-native';
import {
  OptionalExistCondition,
  UnionDefaultKey,
  NonExistent,
} from '../../types';
import {colorResolverFactory} from '../../helper';
import {
  TextFactoryProps,
  TextProps as Props,
  TextVariationProps,
} from './types';
import {DEFAULT_TEXT_VARIATION, DefaultTextVariation} from './constants';
import {TextSizeProps} from '../..';
import {GenericAdditionalPalette, GenericTheme} from '../../theme/types';

function textFactory<
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  TextVariation extends
    | Record<
        string | string,
        TextVariationProps<FontSizeKey | null, AdditionalPalettes | null>
      >
    | NonExistent,
  FontSizeKey extends string | string | NonExistent,
  EmphasisToggleable extends boolean | NonExistent,
  AllowCustomProps extends boolean | NonExistent
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
  FontSizeKey,
  EmphasisToggleable,
  AllowCustomProps
>): Record<
  keyof OptionalExistCondition<
    TextVariation,
    TextVariation,
    typeof DEFAULT_TEXT_VARIATION
  >,
  React.FunctionComponent<
    Props<AdditionalPalettes, FontSizeKey, EmphasisToggleable, AllowCustomProps>
  >
> {
  // Type
  type TextProps = Props<
    AdditionalPalettes,
    FontSizeKey,
    EmphasisToggleable,
    AllowCustomProps
  >;

  type TextVariationKeys = keyof OptionalExistCondition<
    TextVariation,
    TextVariation,
    typeof DEFAULT_TEXT_VARIATION
  >;

  type ExistanceConfirmedTextVariation = Record<
    keyof TextVariation,
    TextVariationProps<FontSizeKey, AdditionalPalettes>
  >;

  // Context
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  // Text Collections
  const texts: Partial<
    Record<TextVariationKeys, React.FunctionComponent<TextProps>>
  > = {};

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
          if (typeof fontSize === 'number') {
            return size || fontSize;
          } else {
            type FontSizeKey = string | string;
            return size
              ? (fontSize as TextSizeProps<FontSizeKey>)[
                  size as UnionDefaultKey<FontSizeKey>
                ]
              : (fontSize as TextSizeProps<FontSizeKey>)[
                  'default' as UnionDefaultKey<FontSizeKey>
                ];
          }
        })();

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
        const textProps: Omit<TextProps, 'children'> = {
          ellipsizeMode,
          numberOfLines,
          ...(allowFontScaling ? {allowFontScaling} : {}),
          ...(maxFontSizeMultiplier ? {maxFontSizeMultiplier} : {}),
          ...(minimumFontScale ? {minimumFontScale} : {}),
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
  return texts as Record<TextVariationKeys, React.FunctionComponent<TextProps>>;
}

export default textFactory;
