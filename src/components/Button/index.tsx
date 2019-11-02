import React, {useContext} from 'react';
import {TouchableOpacity, Text, FlexAlignType} from 'react-native';
import {
  ButtonFactoryProps,
  ButtonProps as Props,
  ButtonSizeProps,
  ButtonVariations,
} from './types';
import {DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {
  DEFAULT_BUTTON_SIZES,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_FONT_WEIGHT,
  DEFAULT_BUTTON_BORDER_WIDTH,
  BORDER_RADIUS_MULTIPLIERS,
  BUTTON_VARIATION_KEYS,
} from './constants';

function buttonFactory<Themes, AdditionalPalettes, ButtonSizes>({
  themes,
  sizes,
  additionalPalettes,
  defaultType = 'solid',
  allowAdditionalPalettes,
}: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSizes>): {
  [key in ButtonVariations]: React.FunctionComponent<
    Props<AdditionalPalettes, ButtonSizes, typeof allowAdditionalPalettes>
  >;
} {
  const paletteContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const buttons: {
    [key in ButtonVariations]?: React.FC<
      Props<AdditionalPalettes, ButtonSizes, typeof allowAdditionalPalettes>
    >;
  } = {};
  BUTTON_VARIATION_KEYS.forEach((variation: ButtonVariations) => {
    const Button: React.FC<
      Props<AdditionalPalettes, ButtonSizes, typeof allowAdditionalPalettes>
    > = ({
      color = 'primary',
      size = 'default',
      isDisabled,
      isStretched,
      align = DEFAULT_BUTTON_ALIGN,
      onPress,
      title,
      type = defaultType,
      additionalButtonProps,
      additionalButtonStyle,
      additionalTextProps,
      additionalTextStyle,
    }: Props<
      AdditionalPalettes,
      ButtonSizes,
      typeof allowAdditionalPalettes
    >): React.ReactElement => {
      // Palettes
      const currentThemeKey = useContext(paletteContext) || 'default';
      const currentTheme =
        themes[
          `${currentThemeKey}` as keyof Themes & DefaultObject<ThemePalette>
        ];

      // Color
      const primaryColor = !isDisabled
        ? (additionalPalettes &&
            additionalPalettes[color as keyof AdditionalPalettes]) ||
          currentTheme[color as keyof ThemePalette]
        : currentTheme.disabled;
      const buttonColor =
        type === 'solid' ? primaryColor : currentTheme.background;
      const fontColor =
        type === 'solid' ? currentTheme.background : primaryColor;

      // Size
      const buttonSizeProperty =
        sizes &&
        sizes[`${size}` as keyof ButtonSizes & DefaultObject<ButtonSizeProps>];

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
        alignSelf: !isStretched
          ? DEFAULT_BUTTON_ALIGN
          : ('stretch' as FlexAlignType),
        paddingVertical:
          (buttonSizeProperty && buttonSizeProperty.verticalPaddding) ||
          DEFAULT_BUTTON_SIZES.default.verticalPaddding,
        ...borderStyles,
        ...(additionalButtonStyle || {}),
      };

      // Text Style
      const textStyle = {
        color: fontColor,
        alignSelf: align,
        fontSize:
          (buttonSizeProperty && buttonSizeProperty.fontSize) ||
          DEFAULT_BUTTON_SIZES.default.fontSize,
        fontWeight: DEFAULT_BUTTON_FONT_WEIGHT,
        ...(additionalTextStyle || {}),
      };
      return (
        <TouchableOpacity
          style={touchableStyle}
          disabled={isDisabled}
          onPress={onPress}
          accessibilityLabel={title}
          {...(additionalButtonProps || {})}>
          <Text style={textStyle} {...(additionalTextProps || {})}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    };
    buttons[variation as ButtonVariations] = Button;
  });
  const Button = {
    Circular: buttons.Circular as React.FunctionComponent<
      Props<AdditionalPalettes, ButtonSizes, typeof allowAdditionalPalettes>
    >,
    Round: buttons.Round as React.FunctionComponent<
      Props<AdditionalPalettes, ButtonSizes, typeof allowAdditionalPalettes>
    >,
    Sharp: buttons.Sharp as React.FunctionComponent<
      Props<AdditionalPalettes, ButtonSizes, typeof allowAdditionalPalettes>
    >,
  };
  return Button;
}

export default buttonFactory;
