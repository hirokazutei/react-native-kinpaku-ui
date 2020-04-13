import React, {useContext} from 'react';
import {FlexAlignType, Text, TouchableOpacity} from 'react-native';
import {
  AddDefaultToObject,
  OptionalExistCondition,
  UnionDefaultKey,
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

function buttonFactory<
  Themes,
  AdditionalPalettes,
  ButtonSize,
  AllowCustomProps
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
>): {
  [key in ButtonShapeVariation]: React.FunctionComponent<
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
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const buttons: {
    [key in ButtonShapeVariation]?: React.FunctionComponent<
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
  } = {};

  for (const variationKey of BUTTON_SHAPE_VARIATION_KEYS) {
    const Button: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          ButtonSize,
          ButtonSize,
          typeof DEFAULT_BUTTON_SIZE
        >,
        AllowCustomProps
      >
    > = ({
      _additionalButtonProps,
      _additionalButtonStyle,
      _additionalTextProps,
      _additionalTextStyle,
      align = DEFAULT_BUTTON_ALIGN,
      color = defaultColor,
      isDisabled,
      isStretched,
      onPress,
      size = 'default',
      title,
      type = defaultType,
    }: Props<
      AdditionalPalettes,
      OptionalExistCondition<
        ButtonSize,
        ButtonSize,
        typeof DEFAULT_BUTTON_SIZE
      >,
      AllowCustomProps
    >): React.ReactElement<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          ButtonSize,
          ButtonSize,
          typeof DEFAULT_BUTTON_SIZE
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
        ? (sizes as {
            [SizeKey in keyof AddDefaultToObject<
              ButtonSize,
              ButtonSizeProps
            >]: ButtonSizeProps
          })[size as keyof AddDefaultToObject<ButtonSize, ButtonSizeProps>]
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
      let borderRadius = 0;
      if (buttonSizeProperty) {
        borderRadius =
          BORDER_RADIUS_MULTIPLIER[variationKey as ButtonShapeVariation] *
          buttonSizeProperty.borderRadius;
      } else {
        borderRadius = DEFAULT_BUTTON_SIZE.default.paddingHorizontal;
      }

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
        ...(_additionalButtonStyle || {}),
      };

      // Text Style
      const textStyle = {
        color: fontColor,
        fontSize:
          (buttonSizeProperty && buttonSizeProperty.fontSize) ||
          DEFAULT_BUTTON_SIZE.default.fontSize,
        fontWeight: DEFAULT_BUTTON_FONT_WEIGHT,
        ...(_additionalTextStyle || {}),
      };

      return (
        <TouchableOpacity
          style={touchableStyle}
          disabled={isDisabled}
          onPress={onPress}
          accessibilityLabel={title}
          {..._additionalButtonProps || {}}>
          <Text style={textStyle} {..._additionalTextProps || {}}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    };
    buttons[variationKey as ButtonShapeVariation] = Button;
  }

  return buttons as {
    [key in ButtonShapeVariation]: React.FunctionComponent<
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
  };
}

export default buttonFactory;
