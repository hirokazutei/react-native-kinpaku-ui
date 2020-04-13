import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  AddDefaultToObject,
  OptionalExistCondition,
  UnionDefaultKey,
} from '../../types';
import {ThemePalette} from '../../theme/types';
import {
  CheckBoxFactoryProps,
  CheckBoxProps as Props,
  CheckBoxShapeVariation,
  CheckBoxSizeProps,
} from './types';
import {
  CHECK_BOX_SHAPE_VARIATION_KEYS,
  DEFAULT_CHECK_BOX_SIZES,
  DefaultCheckBoxSize,
} from './constants';

function checkBoxFactory<
  Themes,
  AdditionalPalettes,
  CheckBoxSize,
  AllowCustomProps
>({
  themes,
  sizes,
  additionalPalettes,
  defaultColor,
  defaultType = 'fill',
}: CheckBoxFactoryProps<
  Themes,
  AdditionalPalettes,
  CheckBoxSize,
  AllowCustomProps
>): {
  [key in CheckBoxShapeVariation]: React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<
        CheckBoxSize,
        CheckBoxSize,
        typeof DEFAULT_CHECK_BOX_SIZES
      >,
      AllowCustomProps
    >
  >
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const checkBoxes: {
    [key in CheckBoxShapeVariation]?: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          CheckBoxSize,
          CheckBoxSize,
          typeof DEFAULT_CHECK_BOX_SIZES
        >,
        AllowCustomProps
      >
    >
  } = {};
  for (const variationKey of CHECK_BOX_SHAPE_VARIATION_KEYS) {
    const CheckBox: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          CheckBoxSize,
          CheckBoxSize,
          typeof DEFAULT_CHECK_BOX_SIZES
        >,
        AllowCustomProps
      >
    > = ({
      _customOuterViewProps,
      _customOuterViewStyle,
      active,
      color = defaultColor,
      isDisabled,
      onPress,
      size = 'default',
      type = defaultType,
    }: Props<
      AdditionalPalettes,
      OptionalExistCondition<
        CheckBoxSize,
        CheckBoxSize,
        typeof DEFAULT_CHECK_BOX_SIZES
      >,
      AllowCustomProps
    >): React.ReactElement<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          CheckBoxSize,
          CheckBoxSize,
          typeof DEFAULT_CHECK_BOX_SIZES
        >,
        AllowCustomProps
      >
    > => {
      // Palettes
      const currentThemeKey = useContext(themeContext) || 'default';
      const currentTheme =
        themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];

      // Color
      const primaryColor = !isDisabled
        ? (additionalPalettes &&
            additionalPalettes[color as keyof AdditionalPalettes]) ||
          currentTheme[color as keyof ThemePalette]
        : currentTheme.disabled;
      const activeColor =
        type === 'fill' || type === 'reverse'
          ? currentTheme.background
          : primaryColor;
      const inactiveColor =
        type === 'fill' ? primaryColor : currentTheme.background;
      const outerBorderColor = primaryColor;
      const checkColor = active ? activeColor : inactiveColor;
      const innerBackgroundColor =
        (type === 'reverse' && active) || type === 'fill'
          ? primaryColor
          : currentTheme.background;

      // Size
      const sizeProperty = sizes
        ? (sizes as {
            [SizeKey in keyof AddDefaultToObject<
              CheckBoxSize,
              CheckBoxSizeProps
            >]: CheckBoxSizeProps
          })[size as keyof AddDefaultToObject<CheckBoxSize, CheckBoxSizeProps>]
        : DEFAULT_CHECK_BOX_SIZES[size as UnionDefaultKey<DefaultCheckBoxSize>];

      // BorderStyles
      const borderThickness = sizeProperty.size / 10;
      const borderChunk = sizeProperty.size / 8;
      let borderRadius = borderThickness * 2;
      borderRadius =
        variationKey === 'Circular' ? borderRadius * 256 : borderRadius;

      const outerRingStyle: ViewStyle = {
        alignItems: 'center',
        backgroundColor: innerBackgroundColor,
        borderColor: outerBorderColor,
        borderRadius: variationKey === 'Sharp' ? 0 : borderRadius,
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
    checkBoxes[variationKey as CheckBoxShapeVariation] = CheckBox;
  }

  return checkBoxes as {
    [key in CheckBoxShapeVariation]: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          CheckBoxSize,
          CheckBoxSize,
          typeof DEFAULT_CHECK_BOX_SIZES
        >,
        AllowCustomProps
      >
    >
  };
}

export default checkBoxFactory;
