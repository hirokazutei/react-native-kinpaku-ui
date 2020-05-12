import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  UnionDefaultKey,
  OptionalExistCondition,
  NonExistent,
} from '../../types';
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
  OUTLINE,
  REVERSE,
  FILL,
} from './constants';
import {
  GenericTheme,
  GenericAdditionalPalette,
  DefaultTheme,
} from '../../theme/types';

function radioButtonFactory<
  Themes extends GenericTheme = DefaultTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null,
  RadioButtonSize extends
    | Record<string | string, RadioButtonSizeProps>
    | NonExistent = null,
  AllowCustomProps extends boolean | NonExistent = false
>({
  themes,
  sizes,
  additionalPalettes,
  defaultColor,
  defaultType = OUTLINE,
}: RadioButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  RadioButtonSize,
  AllowCustomProps
>): Record<
  RadioButtonShapeVariation,
  React.FunctionComponent<
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
> {
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
  const radioButtons: Partial<
    Record<RadioButtonShapeVariation, React.FunctionComponent<RadioButtonProps>>
  > = {};

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
        type === REVERSE ? currentTheme.background : primaryColor;
      const inactiveColor =
        type === REVERSE ? primaryColor : currentTheme.background;
      const outerRingColor = primaryColor;
      const dotColor = active ? activeColor : inactiveColor;
      const innerRingColor =
        type === REVERSE ? primaryColor : currentTheme.background;

      // Size
      const {size: ringSize, dotSize: maybeDotSize, borderThickness} = sizes
        ? (sizes as Record<
            UnionDefaultKey<keyof RadioButtonSize>,
            RadioButtonSizeProps
          >)[size as UnionDefaultKey<keyof RadioButtonSize>]
        : DEFAULT_RADIO_BUTTON_SIZE[
            size as UnionDefaultKey<DefaultRadioButtonSize>
          ];

      const dotSize =
        type === FILL ? ringSize - borderThickness * 2 : maybeDotSize;

      // BorderStyles
      const borderStyles = borderThickness;
      const borderRadiusResolver = (size: number) => {
        if (variationKey === 'Circular') {
          return size * 256;
        } else if (variationKey === 'Round') {
          return size / 5;
        } else return 0;
      };

      const ringBorderRadius = borderRadiusResolver(ringSize);
      const dotBorderRadius = borderRadiusResolver(dotSize);

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
  return radioButtons as Record<
    RadioButtonShapeVariation,
    React.FunctionComponent<RadioButtonProps>
  >;
}

export default radioButtonFactory;
