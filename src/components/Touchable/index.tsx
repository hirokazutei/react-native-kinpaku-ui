import React, {useContext} from 'react';
import {FlexAlignType, TouchableOpacity} from 'react-native';
import {
  AddDefaultToObject,
  OptionalExistCondition,
  UnionDefaultKey,
} from '../../types';
import {
  TouchableAllSizeProps,
  TouchableFactoryProps,
  TouchableProps as Props,
  TouchableSizeProps,
  TouchableTypeVariations,
  TouchableVerHorSizeProps,
} from './types';
import {
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
  DEFAULT_TOUCHABLE_SIZE,
  DefaultTouchableSize,
  TOUCHABLE_TYPE_VARIATION_KEYS,
} from './constants';
import {colorResolverFactory} from '../../helper';

function touchableFactory<
  Themes,
  AdditionalPalettes,
  TouchableSize,
  AllowCustomProps
>({
  themes,
  sizes,
  additionalPalettes,
}: TouchableFactoryProps<
  Themes,
  AdditionalPalettes,
  TouchableSize,
  AllowCustomProps
>): {
  [key in TouchableTypeVariations]?: React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<
        TouchableSize,
        TouchableSize,
        typeof DEFAULT_TOUCHABLE_SIZE
      >,
      AllowCustomProps
    >
  >
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const touchables: {
    [key in TouchableTypeVariations]?: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          TouchableSize,
          TouchableSize,
          typeof DEFAULT_TOUCHABLE_SIZE
        >,
        AllowCustomProps
      >
    >
  } = {};

  for (const typeKey of TOUCHABLE_TYPE_VARIATION_KEYS) {
    const Touchable: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          TouchableSize,
          TouchableSize,
          typeof DEFAULT_TOUCHABLE_SIZE
        >,
        AllowCustomProps
      >
    > = ({
      color,
      size = 'default',
      children,
      isDisabled = false,
      isStretched,
      align = DEFAULT_TOUCHABLE_ALIGN,
      onPress,
      _additionalProps,
      _additionalStyle,
    }: Props<
      AdditionalPalettes,
      OptionalExistCondition<
        TouchableSize,
        TouchableSize,
        typeof DEFAULT_TOUCHABLE_SIZE
      >,
      AllowCustomProps
    >): React.ReactElement<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          TouchableSize,
          TouchableSize,
          typeof DEFAULT_TOUCHABLE_SIZE
        >,
        AllowCustomProps
      >
    > => {
      // Palettes
      const currentThemeKey = useContext(themeContext) || 'default';
      const currentTheme =
        themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];
      const colorResolver = colorResolverFactory<AdditionalPalettes>({
        currentTheme,
        additionalPalettes,
      });

      // Color
      const primaryColor = isDisabled
        ? currentTheme.disabled
        : colorResolver({color, defaultColor: currentTheme.primary});
      const borderColor = primaryColor;
      // TODO: Solid/Outline types should be each individual component and not a proptype
      const fillColor =
        typeKey === 'Fill' ? primaryColor : currentTheme.background;

      // Size
      const touchablePaddingProperty = sizes
        ? (sizes as {
            [SizeKey in keyof AddDefaultToObject<
              TouchableSize,
              TouchableSizeProps
            >]: TouchableSizeProps
          })[
            size as keyof AddDefaultToObject<TouchableSize, TouchableSizeProps>
          ]
        : DEFAULT_TOUCHABLE_SIZE[size as UnionDefaultKey<DefaultTouchableSize>];

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
        borderRadius = DEFAULT_TOUCHABLE_SIZE.default.borderRadius;
      }

      const touchablePaddingVertical =
        (touchablePaddingProperty &&
          (touchablePaddingProperty as TouchableVerHorSizeProps)
            .paddingVertical) ||
        (touchablePaddingProperty as TouchableAllSizeProps).padding;
      const touchablePaddingHorizontal =
        (touchablePaddingProperty &&
          (touchablePaddingProperty as TouchableVerHorSizeProps)
            .paddingHorizontal) ||
        (touchablePaddingProperty as TouchableAllSizeProps).padding;

      const touchableStyle = {
        alignSelf: !isStretched ? align : ('stretch' as FlexAlignType),
        alignItems: 'center' as FlexAlignType,
        borderRadius: borderRadius,
        backgroundColor: fillColor,
        paddingHorizontal:
          touchablePaddingHorizontal || DEFAULT_TOUCHABLE_SIZE.default.padding,
        paddingVertical:
          touchablePaddingVertical || DEFAULT_TOUCHABLE_SIZE.default.padding,
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
    touchables[typeKey as TouchableTypeVariations] = Touchable;
  }
  return touchables;
}

export default touchableFactory;
