import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  RadioButtonFactoryProps,
  RadioButtonProps as Props,
  RadioButtonVariations,
} from './types';
import {DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {RADIO_BUTTON_VARIATION_KEYS} from './constants';

function buttonFactory<
  Themes,
  AdditionalPalettes,
  RadioButtonSizes,
  AllowAdditionalProps
>({
  themes,
  sizes,
  additionalPalettes,
}: RadioButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  RadioButtonSizes,
  AllowAdditionalProps
>): {
  [key in RadioButtonVariations]: React.FunctionComponent<
    Props<AdditionalPalettes, RadioButtonSizes, AllowAdditionalProps>
  >;
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const radioButtons: {
    [key in RadioButtonVariations]?: React.FC<
      Props<AdditionalPalettes, RadioButtonSizes, AllowAdditionalProps>
    >;
  } = {};
  RADIO_BUTTON_VARIATION_KEYS.forEach((variation: RadioButtonVariations) => {
    const Button: React.FC<
      Props<AdditionalPalettes, RadioButtonSizes, AllowAdditionalProps>
    > = ({
      color,
      isDisabled,
      onPress,
      size,
      additionalRadioButtonProps,
      additionalRadioButtonStyle,
    }: Props<
      AdditionalPalettes,
      RadioButtonSizes,
      AllowAdditionalProps
    >): React.ReactElement => {
      // Palettes
      const currentThemeKey = useContext(themeContext) || 'default';
      const currentTheme =
        themes[
          `${currentThemeKey}` as keyof Themes & DefaultObject<ThemePalette>
        ];

      // Color
      const primaryColor = !isDisabled
        ? (additionalPalettes &&
            additionalPalettes[color as keyof AdditionalPalettes]) ||
          currentTheme[color as keyof ThemePalette]
        : currentTheme.disabled;
      const outerRingColor = primaryColor;
      const dotColor =
        variation !== 'Reverse' ? primaryColor : currentTheme.background;
      const innerRingColor =
        variation !== 'Reverse' ? currentTheme.background : primaryColor;

      // Size
      const sizeProperty = sizes['default'] ? sizes[`${size}`] : size;

      // BorderStyles
      const borderStyles = sizeProperty.borderThickness;

      const outerRingStyle: ViewStyle = {
        borderRadius: 100,
        backgroundColor: outerRingColor,
        width: sizeProperty.size,
        height: sizeProperty.size,
        borderWidth: sizeProperty.borderThickness,
        ...(additionalRadioButtonStyle || {}),
      };

      const dotStyle: ViewStyle = {
        borderRadius: 100,
        backgroundColor: dotColor,
        width: sizeProperty.size / 2,
        height: sizeProperty.size / 2,
        ...(additionalRadioButtonStyle || {}),
      };

      return (
        <TouchableOpacity
          style={outerRingStyle}
          disabled={isDisabled}
          onPress={onPress}
          {...additionalRadioButtonProps}>
          <View style={dotStyle} />
        </TouchableOpacity>
      );
    };
    radioButtons[variation as RadioButtonVariations] = Button;
  });
  const RadioButtons = {
    Dot: radioButtons.Dot as React.FunctionComponent<
      Props<AdditionalPalettes, RadioButtonSizes, AllowAdditionalProps>
    >,
    Reverse: radioButtons.Reverse as React.FunctionComponent<
      Props<AdditionalPalettes, RadioButtonSizes, AllowAdditionalProps>
    >,
    Fill: radioButtons.Fill as React.FunctionComponent<
      Props<AdditionalPalettes, RadioButtonSizes, AllowAdditionalProps>
    >,
  };
  return RadioButtons;
}

export default buttonFactory;
