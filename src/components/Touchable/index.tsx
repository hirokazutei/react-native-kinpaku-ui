import React, {useContext} from 'react';
import {TouchableOpacity, FlexAlignType} from 'react-native';
import {
  TouchableFactoryProps,
  TouchableProps as Props,
  TouchablePaddingProps,
  TouchableType,
  TouchableTypeOptions,
  TouchableVerHorPaddingProps,
  TouchableAllPaddingProps,
} from './types';
import {DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {
  DEFAULT_TOUCHABLE_SIZES,
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
  touchableTypeKeys,
} from './constants';

function touchableFactory<
  PaletteObjectType,
  AdditionalPalettes,
  TouchablePaddingSizes
>({
  themes,
  touchablePaddingSizes,
  additionalPalettes,
  defaultTouchableType = 'filled',
}: TouchableFactoryProps<
  PaletteObjectType,
  AdditionalPalettes,
  TouchablePaddingSizes
>): React.FunctionComponent<Props<AdditionalPalettes, TouchablePaddingSizes>> {
  const paletteContext: React.Context<
    keyof PaletteObjectType
  > = React.createContext('default' as keyof PaletteObjectType);
  const Touchable: React.FC<
    Props<AdditionalPalettes, TouchablePaddingSizes>
  > = ({
    color = 'primary',
    size = 'default',
    children,
    isDisabled = false,
    isStretched,
    align = DEFAULT_TOUCHABLE_ALIGN,
    onPress,
    type = defaultTouchableType,
    additionalProps,
    additionalStyle,
  }: Props<AdditionalPalettes, TouchablePaddingSizes>): React.ReactElement => {
    // Palettes
    const currentThemeKey = useContext(paletteContext) || 'default';
    const currentTheme =
      themes[
        `${currentThemeKey}` as keyof PaletteObjectType &
          DefaultObject<ThemePalette>
      ];

    // Color
    const primaryColor = !isDisabled
      ? (additionalPalettes &&
          additionalPalettes[color as keyof AdditionalPalettes]) ||
        currentTheme[color as keyof ThemePalette]
      : currentTheme.disabled;
    const borderColor = primaryColor;
    const fillColor =
      type === 'filled' ? primaryColor : currentTheme.background;

    // Size
    const TouchablePaddingProperty =
      touchablePaddingSizes &&
      touchablePaddingSizes[
        size as keyof TouchablePaddingSizes &
          DefaultObject<TouchablePaddingProps>
      ];

    // BorderStyles
    const borderStyles = {
      borderColor: borderColor,
      borderWidth: DEFAULT_TOUCHABLE_BORDER_WIDTH,
    };

    // Border Radius
    let borderRadius = 0;
    if (TouchablePaddingProperty) {
      borderRadius = TouchablePaddingProperty.borderRadius;
    } else {
      borderRadius = DEFAULT_TOUCHABLE_SIZES.default.borderRadius;
    }

    const touchableVerticalPadding =
      (TouchablePaddingProperty &&
        (TouchablePaddingProperty as TouchableVerHorPaddingProps)
          .verticalPadding) ||
      (TouchablePaddingProperty as TouchableAllPaddingProps).padding;
    const touchableHorizontalPadding =
      (TouchablePaddingProperty &&
        (TouchablePaddingProperty as TouchableVerHorPaddingProps)
          .horizontalPadding) ||
      (TouchablePaddingProperty as TouchableAllPaddingProps).padding;

    const touchableStyle = {
      alignSelf: !isStretched ? align : ('stretch' as FlexAlignType),
      borderRadius: borderRadius,
      backgroundColor: fillColor,
      paddingHorizontal:
        touchableHorizontalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding,
      paddingVertical:
        touchableVerticalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding,
      ...borderStyles,
      ...additionalStyle,
    };
    return (
      <TouchableOpacity
        style={touchableStyle}
        disabled={isDisabled}
        onPress={onPress}
        {...additionalProps}>
        {children}
      </TouchableOpacity>
    );
  };
  return Touchable;
}

export default touchableFactory;
