import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  RadioButtonFactoryProps,
  RadioButtonProps as Props,
  RadioButtonSizeProps,
  RadioButtonVariations,
} from './types';
import {DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {
  RADIO_BUTTON_VARIATION_KEYS,
  DEFAULT_RADIO_BUTTON_SIZE,
} from './constants';

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
    Props<AdditionalPalettes, RadioButtonSizes, AllowCustomProps>
  >;
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const radioButtons: {
    [key in RadioButtonVariations]?: React.FC<
      Props<AdditionalPalettes, RadioButtonSizes, AllowCustomProps>
    >;
  } = {};
  RADIO_BUTTON_VARIATION_KEYS.forEach((variation: RadioButtonVariations) => {
    const Button: React.FC<Props<
      AdditionalPalettes,
      RadioButtonSizes,
      AllowCustomProps
    >> = ({
      active,
      color,
      isDisabled,
      onPress,
      size,
      _customInnerViewProps,
      _customInnerViewStyle,
      _customOuterViewProps,
      _customOuterViewStyle,
    }: Props<
      AdditionalPalettes,
      RadioButtonSizes,
      AllowCustomProps
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
      const activeColor =
        variation === 'Reverse' ? currentTheme.background : primaryColor;
      const deactiveColor =
        variation === 'Reverse' ? primaryColor : currentTheme.background;
      const outerRingColor = primaryColor;
      const dotColor = active ? activeColor : deactiveColor;
      const innerRingColor =
        variation === 'Reverse' ? primaryColor : currentTheme.background;

      // Size

      const sizeProperty = ((): RadioButtonSizeProps => {
        if (
          sizes &&
          (sizes as {
            [SizeKey in keyof RadioButtonSizes]: RadioButtonSizeProps;
          } &
            DefaultObject<RadioButtonSizeProps>).default
        ) {
          return (sizes as {
            [SizeKey in keyof RadioButtonSizes]: RadioButtonSizeProps;
          } &
            DefaultObject<RadioButtonSizeProps>)[
            `${size}` as keyof (RadioButtonSizes &
              DefaultObject<RadioButtonSizeProps>)
          ];
        } else if (sizes && (sizes as RadioButtonSizeProps).size) {
          return sizes as RadioButtonSizeProps;
        } else {
          return DEFAULT_RADIO_BUTTON_SIZE;
        }
      })();

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
    Dot: radioButtons.Dot as React.FunctionComponent<
      Props<AdditionalPalettes, RadioButtonSizes, AllowCustomProps>
    >,
    Reverse: radioButtons.Reverse as React.FunctionComponent<
      Props<AdditionalPalettes, RadioButtonSizes, AllowCustomProps>
    >,
    Fill: radioButtons.Fill as React.FunctionComponent<
      Props<AdditionalPalettes, RadioButtonSizes, AllowCustomProps>
    >,
  };
  return RadioButtons;
}

export default radioButtonFactory;
