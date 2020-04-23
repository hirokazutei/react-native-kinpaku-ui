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
  TouchableShapeVariation,
  TouchableVerHorSizeProps,
} from './types';
import {
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
  DEFAULT_TOUCHABLE_SIZE,
  DefaultTouchableSize,
  TOUCHABLE_SHAPE_VARIATION_KEYS,
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
  defaultType = 'fill',
}: TouchableFactoryProps<
  Themes,
  AdditionalPalettes,
  TouchableSize,
  AllowCustomProps
>): {
  [key in TouchableShapeVariation]: React.FunctionComponent<
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
  // Type
  type TouchableProps = Props<
    AdditionalPalettes,
    OptionalExistCondition<
      TouchableSize,
      TouchableSize,
      typeof DEFAULT_TOUCHABLE_SIZE
    >,
    AllowCustomProps
  >;

  // Context
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const touchables: {
    [key in TouchableShapeVariation]?: React.FunctionComponent<TouchableProps>
  } = {};

  for (const shapeKey of TOUCHABLE_SHAPE_VARIATION_KEYS) {
    const Touchable: React.FunctionComponent<TouchableProps> = ({
      _customProps,
      _customStyle,
      align = DEFAULT_TOUCHABLE_ALIGN,
      children,
      color,
      isDisabled = false,
      isStretched,
      onPress,
      size = 'default',
      type = defaultType,
    }: TouchableProps): React.ReactElement<TouchableProps> => {
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
        type === 'fill' ? primaryColor : currentTheme.background;

      // Size
      const touchableSizeProperty = sizes
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
      const borderRadius = (() => {
        if (shapeKey === 'Circular') {
          return touchableSizeProperty.borderRadius * 256;
        } else if (shapeKey == 'Round') {
          return touchableSizeProperty.borderRadius;
        } else {
          return 0;
        }
      })();

      const touchablePaddingVertical =
        (touchableSizeProperty &&
          (touchableSizeProperty as TouchableVerHorSizeProps)
            .paddingVertical) ||
        (touchableSizeProperty as TouchableAllSizeProps).padding;
      const touchablePaddingHorizontal =
        (touchableSizeProperty &&
          (touchableSizeProperty as TouchableVerHorSizeProps)
            .paddingHorizontal) ||
        (touchableSizeProperty as TouchableAllSizeProps).padding;

      const touchableStyle = {
        alignSelf: !isStretched ? align : ('stretch' as FlexAlignType),
        alignItems: 'center' as FlexAlignType,
        borderRadius,
        backgroundColor: fillColor,
        paddingHorizontal:
          touchablePaddingHorizontal || DEFAULT_TOUCHABLE_SIZE.default.padding,
        paddingVertical:
          touchablePaddingVertical || DEFAULT_TOUCHABLE_SIZE.default.padding,
        ...borderStyles,
        ..._customStyle,
      };

      return (
        <TouchableOpacity
          style={touchableStyle}
          disabled={isDisabled}
          onPress={onPress}
          {..._customProps}>
          {children}
        </TouchableOpacity>
      );
    };
    touchables[shapeKey as TouchableShapeVariation] = Touchable;
  }
  return touchables as {
    [key in TouchableShapeVariation]: React.FunctionComponent<TouchableProps>
  };
}

export default touchableFactory;
