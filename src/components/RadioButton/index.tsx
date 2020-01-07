import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  RadioButtonFactoryProps,
  RadioButtonProps as Props,
  RadioButtonSizeProps,
  RadioButtonVariations,
} from './types';
import {
  UnionDefaultKey,
  OptionalExistCondition,
  AddDefaultToObject,
} from '../../types';
import {ThemePalette} from '../../theme/types';
import {
  RADIO_BUTTON_VARIATION_KEYS,
  DEFAULT_RADIO_BUTTON_SIZES,
  DefaultRadioButtonSizes,
} from './constants';
import {colorResolverFactory} from '../../helper';

function radioButtonFactory<
  Themes,
  AdditionalPalettes,
  RadioButtonSizes,
  AllowCustomProps
>({
  themes,
  sizes,
  additionalPalettes,
}: RadioButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  RadioButtonSizes,
  AllowCustomProps
>): {
  [key in RadioButtonVariations]: React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<
        RadioButtonSizes,
        typeof DEFAULT_RADIO_BUTTON_SIZES,
        RadioButtonSizes
      >,
      AllowCustomProps
    >
  >;
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const radioButtons: {
    [key in RadioButtonVariations]?: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          RadioButtonSizes,
          typeof DEFAULT_RADIO_BUTTON_SIZES,
          RadioButtonSizes
        >,
        AllowCustomProps
      >
    >;
  } = {};
  RADIO_BUTTON_VARIATION_KEYS.forEach((variation: RadioButtonVariations) => {
    const Button: React.FunctionComponent<Props<
      AdditionalPalettes,
      OptionalExistCondition<
        RadioButtonSizes,
        typeof DEFAULT_RADIO_BUTTON_SIZES,
        RadioButtonSizes
      >,
      AllowCustomProps
    >> = ({
      active,
      color = 'primary',
      isDisabled,
      onPress,
      size = 'default' as keyof AddDefaultToObject<
        OptionalExistCondition<
          RadioButtonSizes,
          typeof DEFAULT_RADIO_BUTTON_SIZES,
          RadioButtonSizes
        >,
        RadioButtonSizeProps
      >,
      _customInnerViewProps,
      _customInnerViewStyle,
      _customOuterViewProps,
      _customOuterViewStyle,
    }: Props<
      AdditionalPalettes,
      OptionalExistCondition<
        RadioButtonSizes,
        typeof DEFAULT_RADIO_BUTTON_SIZES,
        RadioButtonSizes
      >,
      AllowCustomProps
    >): React.ReactElement => {
      // Palettes
      const currentThemeKey =
        useContext(themeContext) || ('default' as UnionDefaultKey<Themes>);
      const currentTheme =
        themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];
      const colorResolver = colorResolverFactory<AdditionalPalettes>({
        currentTheme,
        additionalPalettes,
      });

      // Color
      const primaryColor = isDisabled
        ? currentTheme.disabled
        : colorResolver({color, defaultColor: currentTheme.primary})
        ? (additionalPalettes &&
            additionalPalettes[color as keyof AdditionalPalettes]) ||
          currentTheme[color as keyof ThemePalette]
        : currentTheme.disabled;
      const activeColor =
        variation === 'Reverse' ? currentTheme.background : primaryColor;
      const inactiveColor =
        variation === 'Reverse' ? primaryColor : currentTheme.background;
      const outerRingColor = primaryColor;
      const dotColor = active ? activeColor : inactiveColor;
      const innerRingColor =
        variation === 'Reverse' ? primaryColor : currentTheme.background;

      // Size
      const sizeProperty = sizes
        ? (sizes as {
            [SizeKey in keyof AddDefaultToObject<
              RadioButtonSizes,
              RadioButtonSizeProps
            >]: RadioButtonSizeProps;
          })[
            size as keyof AddDefaultToObject<
              RadioButtonSizes,
              RadioButtonSizeProps
            >
          ]
        : DEFAULT_RADIO_BUTTON_SIZES[
            size as UnionDefaultKey<DefaultRadioButtonSizes>
          ];

      const dotSize =
        variation === 'Fill'
          ? sizeProperty.size - sizeProperty.borderThickness * 2
          : sizeProperty.dotSize;

      // BorderStyles
      const borderStyles = sizeProperty.borderThickness;

      const outerRingStyle: ViewStyle = {
        alignItems: 'center',
        backgroundColor: innerRingColor,
        borderColor: outerRingColor,
        borderRadius: 100,
        borderWidth: borderStyles,
        justifyContent: 'center',
        width: sizeProperty.size,
        height: sizeProperty.size,
        ...(_customOuterViewStyle || {}),
      };

      const dotStyle: ViewStyle = {
        borderRadius: 100,
        backgroundColor: dotColor,
        width: dotSize,
        height: dotSize,
        ...(_customInnerViewStyle || {}),
      };

      return (
        <TouchableOpacity
          style={outerRingStyle}
          disabled={isDisabled}
          onPress={onPress}
          {..._customOuterViewProps}>
          <View style={dotStyle} {..._customInnerViewProps} />
        </TouchableOpacity>
      );
    };
    radioButtons[variation as RadioButtonVariations] = Button;
  });
  const RadioButtons = {
    Outline: radioButtons.Outline as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          RadioButtonSizes,
          typeof DEFAULT_RADIO_BUTTON_SIZES,
          RadioButtonSizes
        >,
        AllowCustomProps
      >
    >,
    Reverse: radioButtons.Reverse as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          RadioButtonSizes,
          typeof DEFAULT_RADIO_BUTTON_SIZES,
          RadioButtonSizes
        >,
        AllowCustomProps
      >
    >,
    Fill: radioButtons.Fill as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          RadioButtonSizes,
          typeof DEFAULT_RADIO_BUTTON_SIZES,
          RadioButtonSizes
        >,
        AllowCustomProps
      >
    >,
  };
  return RadioButtons;
}

export default radioButtonFactory;
