import React, {useContext} from 'react';
import {TouchableOpacity, View, ViewStyle} from 'react-native';
import {
  OptionalExistCondition,
  UnionDefaultKey,
  NonExistent,
} from '../../types';
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
  REVERSE,
} from './constants';
import {colorResolverFactory} from '../../helper';
import {
  GenericTheme,
  GenericAdditionalPalette,
  DefaultTheme,
} from '../../theme/types';
import {OUTLINE} from './constants';
import {FILL} from '../Button/constants';

function checkBoxFactory<
  Themes extends GenericTheme = DefaultTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null,
  CheckBoxSize extends Record<string, CheckBoxSizeProps> | NonExistent = null,
  AllowCustomProps extends boolean | NonExistent = false
>({
  themes,
  sizes,
  additionalPalettes,
  defaultColor,
  defaultType = OUTLINE,
}: CheckBoxFactoryProps<
  Themes,
  AdditionalPalettes,
  CheckBoxSize,
  AllowCustomProps
>): Record<
  CheckBoxShapeVariation,
  React.FunctionComponent<
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
> {
  // Type
  type CheckBoxProps = Props<
    AdditionalPalettes,
    OptionalExistCondition<
      CheckBoxSize,
      CheckBoxSize,
      typeof DEFAULT_CHECK_BOX_SIZES
    >,
    AllowCustomProps
  >;

  // Context
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  // CheckBox Collections
  const checkBoxes: Partial<
    Record<CheckBoxShapeVariation, React.FunctionComponent<CheckBoxProps>>
  > = {};

  // Creating Each CheckBox Components
  for (const variationKey of CHECK_BOX_SHAPE_VARIATION_KEYS) {
    const CheckBox = ({
      _customOuterViewProps,
      _customOuterViewStyle,
      active,
      color = defaultColor,
      isDisabled,
      onPress,
      size = 'default',
      type = defaultType,
    }: CheckBoxProps) => {
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
        type === FILL || type === REVERSE
          ? currentTheme.background
          : primaryColor;
      const inactiveColor =
        type === FILL ? primaryColor : currentTheme.background;
      const outerBorderColor = primaryColor;
      const checkColor = active ? activeColor : inactiveColor;
      const innerBackgroundColor =
        (type === REVERSE && active) || type === FILL
          ? primaryColor
          : currentTheme.background;

      // Size
      const sizeProperty = sizes
        ? (sizes as Record<
            UnionDefaultKey<keyof CheckBoxSize>,
            CheckBoxSizeProps
          >)[size as UnionDefaultKey<keyof CheckBoxSize>]
        : DEFAULT_CHECK_BOX_SIZES[size as UnionDefaultKey<DefaultCheckBoxSize>];

      // BorderStyles
      const borderThickness = sizeProperty.size / 10;
      const borderChunk = sizeProperty.size / 8;
      const borderRadius = (() => {
        if (variationKey === 'Circular') {
          return sizeProperty.size * 256;
        } else return sizeProperty.size / 5;
      })();

      // Outer Ring Style
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

      // Dot Style
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

  return checkBoxes as Record<
    CheckBoxShapeVariation,
    React.FunctionComponent<CheckBoxProps>
  >;
}

export default checkBoxFactory;
