import React, {useContext} from 'react';
import {FlexAlignType, Text, TouchableOpacity} from 'react-native';
import {
  OptionalExistCondition,
  UnionDefaultKey,
  NonExistent,
} from '../../types';
import {colorResolverFactory} from '../../helper';
import {
  ButtonFactoryProps,
  ButtonProps as Props,
  ButtonShapeVariation,
  ButtonSizeProps,
  ButtonType,
} from './types';
import {
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_FONT_WEIGHT,
  DEFAULT_BUTTON_BORDER_WIDTH,
  BORDER_RADIUS_MULTIPLIER,
  BUTTON_SHAPE_VARIATION_KEYS,
  DefaultButtonSize,
} from './constants';
import {GenericTheme, GenericAdditionalPalette} from '../../theme/types';

function buttonFactory<
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  ButtonSize extends Record<string | string, ButtonSizeProps> | NonExistent,
  AllowCustomProps extends boolean | NonExistent
>({
  themes,
  sizes,
  additionalPalettes,
  defaultColor,
  defaultType = 'fill' as ButtonType,
}: ButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  ButtonSize,
  AllowCustomProps
>): Record<
  ButtonShapeVariation,
  React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<
        ButtonSize,
        ButtonSize,
        typeof DEFAULT_BUTTON_SIZE
      >,
      AllowCustomProps
    >
  >
> {
  // Type
  type ButtonProps = Props<
    AdditionalPalettes,
    OptionalExistCondition<ButtonSize, ButtonSize, typeof DEFAULT_BUTTON_SIZE>,
    AllowCustomProps
  >;

  // Context
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  // Button Collections
  const buttons: Partial<
    Record<ButtonShapeVariation, React.FunctionComponent<ButtonProps>>
  > = {};

  // Creating Each Button Components
  for (const variationKey of BUTTON_SHAPE_VARIATION_KEYS) {
    const Button = ({
      _customButtonProps,
      _customButtonStyle,
      _customTextProps,
      _customTextStyle,
      align = DEFAULT_BUTTON_ALIGN,
      color = defaultColor,
      isDisabled,
      isStretched,
      onPress,
      size = 'default',
      label,
      type = defaultType,
    }: ButtonProps) => {
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
      const buttonColor =
        type === ('fill' as ButtonType)
          ? primaryColor
          : currentTheme.background;
      const fontColor =
        type === ('fill' as ButtonType)
          ? currentTheme.background
          : primaryColor;

      // Size
      const buttonSizeProperty = sizes
        ? sizes[size as UnionDefaultKey<keyof ButtonSize>]
        : DEFAULT_BUTTON_SIZE[size as UnionDefaultKey<DefaultButtonSize>];

      // BorderStyles
      const borderStyles =
        type === 'outline'
          ? {
              borderColor: primaryColor,
              borderWidth: DEFAULT_BUTTON_BORDER_WIDTH,
            }
          : {};

      // BorderRadius
      const borderRadius = (() => {
        if (buttonSizeProperty) {
          return (
            BORDER_RADIUS_MULTIPLIER[variationKey as ButtonShapeVariation] *
            buttonSizeProperty.borderRadius
          );
        } else {
          return DEFAULT_BUTTON_SIZE.default.paddingHorizontal;
        }
      })();

      // Touchable Style
      const touchableStyle = {
        borderRadius: borderRadius,
        backgroundColor: buttonColor,
        paddingHorizontal:
          (buttonSizeProperty && buttonSizeProperty.paddingHorizontal) ||
          DEFAULT_BUTTON_SIZE.default.paddingHorizontal,
        alignItems: align,
        alignSelf: !isStretched
          ? DEFAULT_BUTTON_ALIGN
          : ('stretch' as FlexAlignType),
        paddingVertical:
          (buttonSizeProperty && buttonSizeProperty.paddingVertical) ||
          DEFAULT_BUTTON_SIZE.default.paddingVertical,
        ...borderStyles,
        ...(_customButtonStyle || {}),
      };

      // Text Style
      const textStyle = {
        color: fontColor,
        fontSize:
          (buttonSizeProperty && buttonSizeProperty.fontSize) ||
          DEFAULT_BUTTON_SIZE.default.fontSize,
        fontWeight: DEFAULT_BUTTON_FONT_WEIGHT,
        ...(_customTextStyle || {}),
      };

      return (
        <TouchableOpacity
          style={touchableStyle}
          disabled={isDisabled}
          onPress={onPress}
          accessibilityLabel={label}
          {..._customButtonProps || {}}>
          <Text style={textStyle} {..._customTextProps || {}}>
            {label}
          </Text>
        </TouchableOpacity>
      );
    };
    buttons[variationKey as ButtonShapeVariation] = Button;
  }

  return buttons as Record<
    ButtonShapeVariation,
    React.FunctionComponent<ButtonProps>
  >;
}

export default buttonFactory;
