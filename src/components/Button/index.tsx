import React, {useContext} from 'react';
import {TouchableOpacity, Text, FlexAlignType} from 'react-native';
import {
  ButtonFactoryProps,
  ButtonProps as Props,
  ButtonVariations,
  ButtonSizeProps,
} from './types';
import {
  UnionDefaultKey,
  OptionalExistCondition,
  AddDefaultToObject,
} from '../../types';
import {
  DEFAULT_BUTTON_SIZES,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_FONT_WEIGHT,
  DEFAULT_BUTTON_BORDER_WIDTH,
  BORDER_RADIUS_MULTIPLIERS,
  BUTTON_VARIATION_KEYS,
  DefaultButtonSizes,
} from './constants';
import {colorResolverFactory} from '../../helper';

function buttonFactory<
  Themes,
  AdditionalPalettes,
  ButtonSizes,
  AllowCustomProps
>({
  themes,
  sizes,
  additionalPalettes,
  defaultType = 'solid',
}: ButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  ButtonSizes,
  AllowCustomProps
>): {
  [key in ButtonVariations]: React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<
        ButtonSizes,
        typeof DEFAULT_BUTTON_SIZES,
        ButtonSizes
      >,
      AllowCustomProps
    >
  >
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const buttons: {
    [key in ButtonVariations]?: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          ButtonSizes,
          typeof DEFAULT_BUTTON_SIZES,
          ButtonSizes
        >,
        AllowCustomProps
      >
    >
  } = {};
  BUTTON_VARIATION_KEYS.forEach((variation: ButtonVariations) => {
    const Button: React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          ButtonSizes,
          typeof DEFAULT_BUTTON_SIZES,
          ButtonSizes
        >,
        AllowCustomProps
      >
    > = ({
      color,
      size = 'default',
      isDisabled,
      isStretched,
      align = DEFAULT_BUTTON_ALIGN,
      onPress,
      title,
      type = defaultType,
      _additionalButtonProps,
      _additionalButtonStyle,
      _additionalTextProps,
      _additionalTextStyle,
    }: Props<
      AdditionalPalettes,
      OptionalExistCondition<
        ButtonSizes,
        typeof DEFAULT_BUTTON_SIZES,
        ButtonSizes
      >,
      AllowCustomProps
    >): React.ReactElement<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          ButtonSizes,
          typeof DEFAULT_BUTTON_SIZES,
          ButtonSizes
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
        type === 'solid' ? primaryColor : currentTheme.background;
      const fontColor =
        type === 'solid' ? currentTheme.background : primaryColor;

      // Size
      const buttonSizeProperty = sizes
        ? (sizes as {
            [SizeKey in keyof AddDefaultToObject<
              ButtonSizes,
              ButtonSizeProps
            >]: ButtonSizeProps
          })[size as keyof AddDefaultToObject<ButtonSizes, ButtonSizeProps>]
        : DEFAULT_BUTTON_SIZES[size as UnionDefaultKey<DefaultButtonSizes>];

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
          BORDER_RADIUS_MULTIPLIERS[variation as ButtonVariations] *
          buttonSizeProperty.borderRadius;
      } else {
        borderRadius = DEFAULT_BUTTON_SIZES.default.horizontalPadding;
      }

      const touchableStyle = {
        borderRadius: borderRadius,
        backgroundColor: buttonColor,
        paddingHorizontal:
          (buttonSizeProperty && buttonSizeProperty.horizontalPadding) ||
          DEFAULT_BUTTON_SIZES.default.horizontalPadding,
        alignItems: align,
        alignSelf: !isStretched
          ? DEFAULT_BUTTON_ALIGN
          : ('stretch' as FlexAlignType),
        paddingVertical:
          (buttonSizeProperty && buttonSizeProperty.verticalPaddding) ||
          DEFAULT_BUTTON_SIZES.default.verticalPaddding,
        ...borderStyles,
        ...(_additionalButtonStyle || {}),
      };

      // Text Style
      const textStyle = {
        color: fontColor,
        fontSize:
          (buttonSizeProperty && buttonSizeProperty.fontSize) ||
          DEFAULT_BUTTON_SIZES.default.fontSize,
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
    buttons[variation as ButtonVariations] = Button;
  });
  const Button = {
    Circular: buttons.Circular as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          ButtonSizes,
          typeof DEFAULT_BUTTON_SIZES,
          ButtonSizes
        >,
        AllowCustomProps
      >
    >,
    Round: buttons.Round as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          ButtonSizes,
          typeof DEFAULT_BUTTON_SIZES,
          ButtonSizes
        >,
        AllowCustomProps
      >
    >,
    Sharp: buttons.Sharp as React.FunctionComponent<
      Props<
        AdditionalPalettes,
        OptionalExistCondition<
          ButtonSizes,
          typeof DEFAULT_BUTTON_SIZES,
          ButtonSizes
        >,
        AllowCustomProps
      >
    >,
  };
  return Button;
}

export default buttonFactory;
