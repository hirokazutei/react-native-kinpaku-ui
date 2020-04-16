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
  RadioButtonShapeVariation,
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
  defaultColor,
  defaultType,
}: RadioButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  RadioButtonSize,
  AllowCustomProps
>): {
  [key in RadioButtonShapeVariation]: React.FunctionComponent<
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
  // Type
  type RadioButtonProps = Props<
    AdditionalPalettes,
    OptionalExistCondition<
      RadioButtonSize,
      RadioButtonSize,
      typeof DEFAULT_RADIO_BUTTON_SIZE
    >,
    AllowCustomProps
  >;

  // Context
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  // RadioButton Collections
  const radioButtons: {
    [key in RadioButtonShapeVariation]?: React.FunctionComponent<
      RadioButtonProps
    >
  } = {};

  // Creating Each CheckBox Components
  for (const variationKey of RADIO_BUTTON_SHAPE_VARIATION_KEYS) {
    const RadioButton = ({
      _customInnerViewProps,
      _customInnerViewStyle,
      _customOuterViewProps,
      _customOuterViewStyle,
      active,
      color = defaultColor,
      isDisabled,
      onPress,
      size = 'default',
      type = defaultType,
    }: RadioButtonProps) => {
      // Palettes
      const currentThemeKey = useContext(themeContext) || 'default';
      const currentTheme =
        themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];

      // Color
      const colorResolver = colorResolverFactory<AdditionalPalettes>({
        currentTheme,
        additionalPalettes,
      });
      const primaryColor = isDisabled
        ? currentTheme.disabled
        : colorResolver({color, defaultColor: currentTheme.primary});
      const activeColor =
        type === 'reverse' ? currentTheme.background : primaryColor;
      const inactiveColor =
        type === 'reverse' ? primaryColor : currentTheme.background;
      const outerRingColor = primaryColor;
      const dotColor = active ? activeColor : inactiveColor;
      const innerRingColor =
        type === 'reverse' ? primaryColor : currentTheme.background;

      // Size
      const {size: ringSize, dotSize: maybeDotSize, borderThickness} = sizes
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
        type === 'fill' ? ringSize - borderThickness * 2 : maybeDotSize;

      // BorderStyles
      const borderStyles = borderThickness;
      const borderRadiusResolver = (size: number) => {
        if (variationKey === 'Circular') {
          return size * 256;
        } else return size / 5;
      };

      const ringBorderRadius =
        variationKey == 'Sharp' ? 0 : borderRadiusResolver(ringSize);
      const dotBorderRadius = variationKey == 'Circular' ? dotSize * 256 : 0;

      // Outer Ring Style
      const outerRingStyle: ViewStyle = {
        alignItems: 'center',
        backgroundColor: innerRingColor,
        borderColor: outerRingColor,
        borderRadius: ringBorderRadius,
        borderWidth: borderStyles,
        justifyContent: 'center',
        width: ringSize,
        height: ringSize,
        ...(_customOuterViewStyle || {}),
      };

      // Dot Style
      const dotStyle: ViewStyle = {
        borderRadius: dotBorderRadius,
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
    radioButtons[variationKey as RadioButtonShapeVariation] = RadioButton;
  }
  return radioButtons as {
    [key in RadioButtonShapeVariation]: React.FunctionComponent<
      RadioButtonProps
    >
  };
}

export default radioButtonFactory;
