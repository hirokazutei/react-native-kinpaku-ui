import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  UnionDefaultKey,
  OptionalExistCondition,
  AddDefaultToObject,
} from '../../types';
import {ThemePalette} from '../../theme/types';
import {colorResolverFactory} from '../../helper';
import {
  RadioButtonFactoryProps,
  RadioButtonProps as Props,
  RadioButtonSizeProps,
  RadioButtonTypeVariation,
} from './types';
import {
  RADIO_BUTTON_SHAPE_VARIATION_KEYS,
  DEFAULT_RADIO_BUTTON_SIZE,
  DefaultRadioButtonSize,
} from './constants';

function radioButtonFactory<
  Themes,
  AdditionalPalettes,
  RadioButtonSize,
  AllowCustomProps
>({
  themes,
  sizes,
  additionalPalettes,
}: RadioButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  RadioButtonSize,
  AllowCustomProps
>): {
  [key in RadioButtonTypeVariation]: React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<
        RadioButtonSize,
        RadioButtonSize,
        typeof DEFAULT_RADIO_BUTTON_SIZE
      >,
      AllowCustomProps
    >
  >
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const radioButtons: {
    [key in RadioButtonTypeVariation]?: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          RadioButtonSize,
          RadioButtonSize,
          typeof DEFAULT_RADIO_BUTTON_SIZE
        >,
        AllowCustomProps
      >
    >
  } = {};
  for (const shapeKey of RADIO_BUTTON_SHAPE_VARIATION_KEYS) {
    const Button: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          RadioButtonSize,
          RadioButtonSize,
          typeof DEFAULT_RADIO_BUTTON_SIZE
        >,
        AllowCustomProps
      >
    > = ({
      active,
      color = 'primary',
      isDisabled,
      onPress,
      size = 'default' as keyof AddDefaultToObject<
        OptionalExistCondition<
          RadioButtonSize,
          RadioButtonSize,
          typeof DEFAULT_RADIO_BUTTON_SIZE
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
        RadioButtonSize,
        RadioButtonSize,
        typeof DEFAULT_RADIO_BUTTON_SIZE
      >,
      AllowCustomProps
    >): React.ReactElement<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          RadioButtonSize,
          RadioButtonSize,
          typeof DEFAULT_RADIO_BUTTON_SIZE
        >,
        AllowCustomProps
      >
    > => {
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
        shapeKey === 'Reverse' ? currentTheme.background : primaryColor;
      const inactiveColor =
        shapeKey === 'Reverse' ? primaryColor : currentTheme.background;
      const outerRingColor = primaryColor;
      const dotColor = active ? activeColor : inactiveColor;
      const innerRingColor =
        shapeKey === 'Reverse' ? primaryColor : currentTheme.background;

      // Size
      const sizeProperty = sizes
        ? (sizes as {
            [SizeKey in keyof AddDefaultToObject<
              RadioButtonSize,
              RadioButtonSizeProps
            >]: RadioButtonSizeProps
          })[
            size as keyof AddDefaultToObject<
              RadioButtonSize,
              RadioButtonSizeProps
            >
          ]
        : DEFAULT_RADIO_BUTTON_SIZE[
            size as UnionDefaultKey<DefaultRadioButtonSize>
          ];

      const dotSize =
        shapeKey === 'Fill'
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
    radioButtons[shapeKey as RadioButtonTypeVariation] = Button;
  }
  return radioButtons as {
    [key in RadioButtonTypeVariation]: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          RadioButtonSize,
          RadioButtonSize,
          typeof DEFAULT_RADIO_BUTTON_SIZE
        >,
        AllowCustomProps
      >
    >
  };
}

export default radioButtonFactory;
