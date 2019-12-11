import React, {useContext} from 'react';
import {TouchableOpacity, FlexAlignType} from 'react-native';
import {
  TouchableFactoryProps,
  TouchableProps as Props,
  TouchableVerHorSizeProps,
  TouchableAllSizeProps,
  TouchableSizeProps,
} from './types';
import {
  AddDefaultToObject,
  OptionalExistCondition,
  UnionDefaultKey,
} from '../../types';
import {ThemePalette} from '../../theme/types';
import {
  DEFAULT_TOUCHABLE_SIZES,
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
  DefaultTouchableSizes,
} from './constants';
import {colorResolverFactory} from '../../helper';

function touchableFactory<
  PaletteObjectType,
  AdditionalPalettes,
  TouchableSizes,
  AllowCustomProps
>({
  themes,
  sizes,
  additionalPalettes,
  defaultType = 'solid',
}: TouchableFactoryProps<
  PaletteObjectType,
  AdditionalPalettes,
  TouchableSizes,
  AllowCustomProps
>): React.FunctionComponent<
  Props<
    AdditionalPalettes,
    OptionalExistCondition<
      TouchableSizes,
      typeof DEFAULT_TOUCHABLE_SIZES,
      TouchableSizes
    >,
    AllowCustomProps
  >
> {
  const themeContext: React.Context<keyof PaletteObjectType> = React.createContext(
    'default' as keyof PaletteObjectType,
  );
  const Touchable: React.FunctionComponent<Props<
    AdditionalPalettes,
    OptionalExistCondition<
      TouchableSizes,
      typeof DEFAULT_TOUCHABLE_SIZES,
      TouchableSizes
    >,
    AllowCustomProps
  >> = ({
    color,
    size = 'default',
    children,
    isDisabled = false,
    isStretched,
    align = DEFAULT_TOUCHABLE_ALIGN,
    onPress,
    type = defaultType,
    _additionalProps,
    _additionalStyle,
  }: Props<
    AdditionalPalettes,
    OptionalExistCondition<
      TouchableSizes,
      typeof DEFAULT_TOUCHABLE_SIZES,
      TouchableSizes
    >,
    AllowCustomProps
  >): React.ReactElement => {
    // Palettes
    const currentThemeKey = useContext(themeContext) || 'default';
    const currentTheme =
      themes[
        `${currentThemeKey}` as keyof AddDefaultToObject<
          PaletteObjectType,
          ThemePalette
        >
      ];
    const colorResolver = colorResolverFactory<AdditionalPalettes>({
      currentTheme,
      additionalPalettes,
    });

    // Color
    const primaryColor = isDisabled
      ? currentTheme.disabled
      : colorResolver({color, defaultColor: currentTheme.primary});
    const borderColor = primaryColor;
    const fillColor = type === 'solid' ? primaryColor : currentTheme.background;

    // Size
    const touchablePaddingProperty = sizes
      ? (sizes as {
          [SizeKey in keyof AddDefaultToObject<
            TouchableSizes,
            TouchableSizeProps
          >]: TouchableSizeProps;
        })[size as keyof AddDefaultToObject<TouchableSizes, TouchableSizeProps>]
      : DEFAULT_TOUCHABLE_SIZES[size as UnionDefaultKey<DefaultTouchableSizes>];

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
      alignItems: 'center' as FlexAlignType,
      borderRadius: borderRadius,
      backgroundColor: fillColor,
      paddingHorizontal:
        touchableHorizontalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding,
      paddingVertical:
        touchableVerticalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding,
      ...borderStyles,
      ..._additionalStyle,
    };
    return (
      <TouchableOpacity
        style={touchableStyle}
        disabled={isDisabled}
        onPress={onPress}
        {..._additionalProps}>
        {children}
      </TouchableOpacity>
    );
  };
  return Touchable;
}

export default touchableFactory;
