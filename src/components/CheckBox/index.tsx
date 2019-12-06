import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  CheckBoxFactoryProps,
  CheckBoxProps as Props,
  CheckBoxSizeProps,
  CheckBoxVariations,
} from './types';
import {
  UnionDefaultKey,
  OptionalExistCondition,
  AddDefaultToObject,
} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {
  CHECK_BOX_VARIATION_KEYS,
  DEFAULT_CHECK_BOX_SIZES,
  DefaultCheckBoxSizes,
} from './constants';

function checkBoxFactory<
  Themes,
  AdditionalPalettes,
  CheckBoxSizes,
  AllowCustomProps
>({
  themes,
  sizes,
  additionalPalettes,
  checkBoxShape,
}: CheckBoxFactoryProps<
  Themes,
  AdditionalPalettes,
  CheckBoxSizes,
  AllowCustomProps
>): {
  [key in CheckBoxVariations]: React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<
        CheckBoxSizes,
        typeof DEFAULT_CHECK_BOX_SIZES,
        CheckBoxSizes
      >,
      AllowCustomProps
    >
  >;
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const checkBoxes: {
    [key in CheckBoxVariations]?: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          CheckBoxSizes,
          typeof DEFAULT_CHECK_BOX_SIZES,
          CheckBoxSizes
        >,
        AllowCustomProps
      >
    >;
  } = {};
  CHECK_BOX_VARIATION_KEYS.forEach((variation: CheckBoxVariations) => {
    const Button: React.FunctionComponent<Props<
      AdditionalPalettes,
      OptionalExistCondition<
        CheckBoxSizes,
        typeof DEFAULT_CHECK_BOX_SIZES,
        CheckBoxSizes
      >,
      AllowCustomProps
    >> = ({
      active,
      color = 'primary',
      isDisabled,
      onPress,
      size = 'default' as keyof AddDefaultToObject<
        OptionalExistCondition<
          CheckBoxSizes,
          typeof DEFAULT_CHECK_BOX_SIZES,
          CheckBoxSizes
        >,
        CheckBoxSizeProps
      >,
      _customOuterViewProps,
      _customOuterViewStyle,
    }: Props<
      AdditionalPalettes,
      OptionalExistCondition<
        CheckBoxSizes,
        typeof DEFAULT_CHECK_BOX_SIZES,
        CheckBoxSizes
      >,
      AllowCustomProps
    >): React.ReactElement => {
      // Palettes
      const currentThemeKey =
        useContext(themeContext) || ('default' as UnionDefaultKey<Themes>);
      const currentTheme =
        themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];

      // Color
      const primaryColor = !isDisabled
        ? (additionalPalettes &&
            additionalPalettes[color as keyof AdditionalPalettes]) ||
          currentTheme[color as keyof ThemePalette]
        : currentTheme.disabled;
      const activeColor =
        variation === 'Fill' || variation === 'Reverse'
          ? currentTheme.background
          : primaryColor;
      const inactiveColor =
        variation === 'Fill' ? primaryColor : currentTheme.background;
      const outerBorderColor = primaryColor;
      const checkColor = active ? activeColor : inactiveColor;
      const innerBackgroundColor =
        (variation === 'Reverse' && active) || variation === 'Fill'
          ? primaryColor
          : currentTheme.background;

      // Size
      const sizeProperty = sizes
        ? (sizes as {
            [SizeKey in keyof AddDefaultToObject<
              CheckBoxSizes,
              CheckBoxSizeProps
            >]: CheckBoxSizeProps;
          })[size as keyof AddDefaultToObject<CheckBoxSizes, CheckBoxSizeProps>]
        : DEFAULT_CHECK_BOX_SIZES[
            size as UnionDefaultKey<DefaultCheckBoxSizes>
          ];

      // BorderStyles
      const borderThickness = sizeProperty.size / 10;
      const borderChunk = sizeProperty.size / 8;
      let borderRadius = borderThickness * 2;
      borderRadius =
        checkBoxShape && checkBoxShape === 'Circular'
          ? borderRadius * 256
          : borderRadius;

      const outerRingStyle: ViewStyle = {
        alignItems: 'center',
        backgroundColor: innerBackgroundColor,
        borderColor: outerBorderColor,
        borderRadius:
          checkBoxShape && checkBoxShape === 'Sharp' ? 0 : borderRadius,
        borderWidth: borderThickness,
        justifyContent: 'center',
        width: sizeProperty.size,
        height: sizeProperty.size,
        ...(_customOuterViewStyle || {}),
      };

      const dotStyle: ViewStyle = {
        borderBottomColor: checkColor,
        borderBottomWidth: borderThickness,
        borderRightColor: checkColor,
        borderRightWidth: borderThickness,
        bottom: borderChunk / 2.5,
        width: sizeProperty.size / 2 - borderChunk,
        height: sizeProperty.size - borderChunk * 3,
        transform: [{rotate: '40deg'}],
      };

      return (
        <TouchableOpacity
          style={outerRingStyle}
          disabled={isDisabled}
          onPress={onPress}
          {..._customOuterViewProps}>
          <View style={dotStyle} />
        </TouchableOpacity>
      );
    };
    checkBoxes[variation as CheckBoxVariations] = Button;
  });
  const CheckBoxes = {
    Outline: checkBoxes.Outline as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          CheckBoxSizes,
          typeof DEFAULT_CHECK_BOX_SIZES,
          CheckBoxSizes
        >,
        AllowCustomProps
      >
    >,
    Reverse: checkBoxes.Reverse as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          CheckBoxSizes,
          typeof DEFAULT_CHECK_BOX_SIZES,
          CheckBoxSizes
        >,
        AllowCustomProps
      >
    >,
    Fill: checkBoxes.Fill as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          CheckBoxSizes,
          typeof DEFAULT_CHECK_BOX_SIZES,
          CheckBoxSizes
        >,
        AllowCustomProps
      >
    >,
  };
  return CheckBoxes;
}

export default checkBoxFactory;
