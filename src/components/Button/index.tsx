import React, {useContext} from 'react';
import {TouchableOpacity, Text, FlexAlignType} from 'react-native';
import {
  ButtonFactoryProps,
  ButtonProps as Props,
  ButtonSizeProps,
  ButtonShapeOptions,
  ButtonShapes,
} from './types';
import {DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';
import {
  DEFAULT_BUTTON_SIZES,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_FONT_WEIGHT,
  DEFAULT_BUTTON_BORDER_WIDTH,
  BORDER_RADIUS_MULTIPLIERS,
  buttonShapeKeys,
} from './constants';

function buttonFactory<PaletteObjectType, AdditionalPalettes, ButtonSizes>({
  themes,
  buttonSizes,
  additionalPalettes,
  defaultButtonType = 'solid',
}: ButtonFactoryProps<PaletteObjectType, AdditionalPalettes, ButtonSizes>): {
  [key in ButtonShapeOptions]: React.FunctionComponent<
    Props<AdditionalPalettes, ButtonSizes>
  >;
} {
  const paletteContext: React.Context<
    keyof PaletteObjectType
  > = React.createContext('default' as keyof PaletteObjectType);
  const buttons: {
    [key in ButtonShapes]?: React.FC<Props<AdditionalPalettes, ButtonSizes>>;
  } = {};
  buttonShapeKeys.forEach((shape: ButtonShapes) => {
    const Button: React.FC<Props<AdditionalPalettes, ButtonSizes>> = ({
      color = 'primary',
      size = 'default',
      isDisabled,
      isStretched,
      align = DEFAULT_BUTTON_ALIGN,
      onPress,
      title,
      type = defaultButtonType,
      additionalButtonProps,
      additionalButtonStyle,
      additionalTextProps,
      additionalTextStyle,
    }: Props<AdditionalPalettes, ButtonSizes>): React.ReactElement => {
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
      const buttonColor =
        type === 'solid' ? primaryColor : currentTheme.background;
      const fontColor =
        type === 'solid' ? currentTheme.background : primaryColor;

      // Size
      const buttonSizeProperty =
        buttonSizes &&
        buttonSizes[
          `${size}` as keyof ButtonSizes & DefaultObject<ButtonSizeProps>
        ];

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
          BORDER_RADIUS_MULTIPLIERS[shape as ButtonShapes] *
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
        ...additionalButtonStyle,
      };

      // Text Style
      const textStyle = {
        color: fontColor,
        alignSelf: align,
        fontSize:
          (buttonSizeProperty && buttonSizeProperty.fontSize) ||
          DEFAULT_BUTTON_SIZES.default.fontSize,
        fontWeight: DEFAULT_BUTTON_FONT_WEIGHT,
        ...additionalTextStyle,
      };
      return (
        <TouchableOpacity
          style={touchableStyle}
          disabled={isDisabled}
          onPress={onPress}
          accessibilityLabel={title}
          {...additionalButtonProps}>
          <Text style={textStyle} {...additionalTextProps}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    };
    buttons[shape as ButtonShapes] = Button;
  });
  const Button = {
    Circular: buttons.circular as React.FunctionComponent<
      Props<AdditionalPalettes, ButtonSizes>
    >,
    Round: buttons.round as React.FunctionComponent<
      Props<AdditionalPalettes, ButtonSizes>
    >,
    Sharp: buttons.sharp as React.FunctionComponent<
      Props<AdditionalPalettes, ButtonSizes>
    >,
  };
  return Button;
}

export default buttonFactory;