import React, {useContext} from 'react';
import {FlexAlignType, TouchableOpacity} from 'react-native';
import {
  OptionalExistCondition,
  UnionDefaultKey,
  NonExistent,
} from '../../types';
import {
  TouchableSizeProps,
  TouchableFactoryProps,
  TouchableProps as Props,
  TouchableShapeVariation,
} from './types';
import {
  DEFAULT_TOUCHABLE_ALIGN,
  DEFAULT_TOUCHABLE_BORDER_WIDTH,
  DEFAULT_TOUCHABLE_SIZE,
  DefaultTouchableSize,
  TOUCHABLE_SHAPE_VARIATION_KEYS,
  FILL,
  OUTLINE,
  CLEAR,
} from './constants';
import {colorResolverFactory} from '../../helper';
import {GenericTheme, GenericAdditionalPalette} from '../../theme/types';

function touchableFactory<
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  TouchableSize extends
    | Record<string | string, TouchableSizeProps>
    | NonExistent,
  AllowCustomProps extends boolean | NonExistent
>({
  themes,
  sizes,
  additionalPalettes,
  defaultType = OUTLINE,
}: TouchableFactoryProps<
  Themes,
  AdditionalPalettes,
  TouchableSize,
  AllowCustomProps
>): Record<
  TouchableShapeVariation,
  React.FunctionComponent<
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
> {
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

  const touchables: Partial<
    Record<TouchableShapeVariation, React.FunctionComponent<TouchableProps>>
  > = {};

  for (const shapeKey of TOUCHABLE_SHAPE_VARIATION_KEYS) {
    const Touchable = ({
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
    }: TouchableProps) => {
      // Palettes
      const currentThemeKey = useContext(themeContext) || 'default';
      const currentTheme =
        themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];
      const colorResolver = colorResolverFactory<AdditionalPalettes>({
        currentTheme,
        additionalPalettes,
      });

      // Type
      const isFill = type === FILL;
      const isClear = type === CLEAR;

      // Color
      const primaryColor = isDisabled
        ? currentTheme.disabled
        : colorResolver({color, defaultColor: currentTheme.primary});
      const borderColor = primaryColor;
      const fillColor = isFill ? primaryColor : currentTheme.background;

      // Size
      const touchableSizeProperty = sizes
        ? (sizes as Record<
            UnionDefaultKey<keyof TouchableSize>,
            TouchableSizeProps
          >)[size as UnionDefaultKey<keyof TouchableSize>]
        : DEFAULT_TOUCHABLE_SIZE[size as UnionDefaultKey<DefaultTouchableSize>];

      // Border Radius
      const borderRadius = (() => {
        if (shapeKey === 'Circular') {
          return touchableSizeProperty.borderRadius * 256;
        } else if (shapeKey === 'Round') {
          return touchableSizeProperty.borderRadius;
        } else {
          return 0;
        }
      })();

      // Border Width
      const borderWidth = isClear
        ? {}
        : {borderWidth: DEFAULT_TOUCHABLE_BORDER_WIDTH};

      // BorderStyles
      const borderStyles = {
        borderColor: borderColor,
        borderRadius: borderRadius,
        ...borderWidth,
      };

      const touchableStyle = {
        alignSelf: !isStretched ? align : ('stretch' as FlexAlignType),
        alignItems: 'center' as FlexAlignType,
        backgroundColor: fillColor,
        ...(touchableSizeProperty.touchableSpacing
          ? touchableSizeProperty.touchableSpacing
          : {}),
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
  return touchables as Record<
    TouchableShapeVariation,
    React.FunctionComponent<TouchableProps>
  >;
}

export default touchableFactory;
