import React, {useContext} from 'react';
import {TouchableOpacity, FlexAlignType} from 'react-native';
import {
  TouchableFactoryProps,
  TouchableProps as Props,
  TouchableVerHorSizeProps,
  TouchableAllSizeProps,
} from './types';
import {DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {
  DEFAULT_TOUCHABLE_SIZES,
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
} from './constants';

function touchableFactory<
  PaletteObjectType,
  AdditionalPalettes,
  TouchableSizes
>({
  themes,
  sizes,
  additionalPalettes,
  defaultType = 'solid',
  allowCustomProps,
}: TouchableFactoryProps<
  PaletteObjectType,
  AdditionalPalettes,
  TouchableSizes
>): React.FunctionComponent<
  Props<AdditionalPalettes, TouchableSizes, typeof allowCustomProps>
> {
  const paletteContext: React.Context<
    keyof PaletteObjectType
  > = React.createContext('default' as keyof PaletteObjectType);
  const Touchable: React.FC<
    Props<AdditionalPalettes, TouchableSizes, typeof allowCustomProps>
  > = ({
    color = 'primary',
    size = 'default',
    children,
    isDisabled = false,
    isStretched,
    align = DEFAULT_TOUCHABLE_ALIGN,
    onPress,
    type = defaultType,
    additionalProps,
    additionalStyle,
  }: Props<
    AdditionalPalettes,
    TouchableSizes,
    typeof allowCustomProps
  >): React.ReactElement => {
    // Palettes
    const currentThemeKey = useContext(paletteContext) || 'default';
    const currentTheme =
      themes[
        `${currentThemeKey}` as
          | keyof PaletteObjectType
          | keyof DefaultObject<ThemePalette>
      ];

    // Color
    const primaryColor = !isDisabled
      ? (additionalPalettes &&
          additionalPalettes[color as keyof AdditionalPalettes]) ||
        currentTheme[color as keyof ThemePalette]
      : currentTheme.disabled;
    const borderColor = primaryColor;
    const fillColor = type === 'solid' ? primaryColor : currentTheme.background;

    // Size
    const touchablePaddingProperty = sizes && sizes[size];

    // BorderStyles
    const borderStyles = {
      borderColor: borderColor,
      borderWidth: DEFAULT_TOUCHABLE_BORDER_WIDTH,
    };

    // Border Radius
    let borderRadius = 0;
    if (touchablePaddingProperty) {
      borderRadius = touchablePaddingProperty.borderRadius;
    } else {
      borderRadius = DEFAULT_TOUCHABLE_SIZES.default.borderRadius;
    }

    const touchableVerticalPadding =
      (touchablePaddingProperty &&
        (touchablePaddingProperty as TouchableVerHorSizeProps)
          .verticalPadding) ||
      (touchablePaddingProperty as TouchableAllSizeProps).padding;
    const touchableHorizontalPadding =
      (touchablePaddingProperty &&
        (touchablePaddingProperty as TouchableVerHorSizeProps)
          .horizontalPadding) ||
      (touchablePaddingProperty as TouchableAllSizeProps).padding;

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
