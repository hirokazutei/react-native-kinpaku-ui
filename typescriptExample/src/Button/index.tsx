import React, {useContext} from 'react';
import {TouchableOpacity, Text, FlexAlignType} from 'react-native';
import {FactoryProps, ButtonProps as Props, ButtonSizeProps} from './types';
import {DefaultObject, ThemePalette} from '../types';
import {
  DEFAULT_BUTTON_SIZES,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_FONT_WEIGHT,
  DEFAULT_BUTTON_BORDER_WIDTH,
  BORDER_RADIUS_MULTIPLIERS,
  BUTTON_SHAPE_KEY,
} from './constants';

function buttonFactory<PaletteObjectType, ButtonPalette, ButtonSizes>({
  themes,
  buttonSizes,
  buttonPalettes,
  defaultButtonType = 'solid',
}: FactoryProps<PaletteObjectType, ButtonPalette, ButtonSizes>) {
  const paletteContext: React.Context<
    keyof PaletteObjectType
  > = React.createContext('default' as keyof PaletteObjectType);
  const buttons = {};
  BUTTON_SHAPE_KEY.map(shape => {
    const Button: React.FC<Props<ButtonPalette, ButtonSizes>> = ({
      color = 'primary',
      size = 'default',
      isDisabled,
      isStretched,
      align = 'center',
      onPress,
      title,
      type = defaultButtonType,
      additionalButtonProps,
      additionalButtonStyle,
      additionalTextProps,
      additionalTextStyle,
    }: Props<ButtonPalette, ButtonSizes>): React.ReactElement => {
      // Palettes
      const currentThemeKey = useContext(paletteContext) || 'default';
      const currentTheme =
        themes[
          `${currentThemeKey}` as keyof PaletteObjectType &
            DefaultObject<ThemePalette>
        ];

      // Color
      const primaryColor =
        (buttonPalettes && buttonPalettes[color as keyof ButtonPalette]) ||
        currentTheme[color as keyof ThemePalette];
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

      // TouchableOpacity Style
      const touchableStyle = {
        borderRadius:
          BORDER_RADIUS_MULTIPLIERS[shape] *
            (buttonSizeProperty && buttonSizeProperty.horizontalPadding) ||
          DEFAULT_BUTTON_SIZES.default.horizontalPadding,
        backgroundColor: !isDisabled ? buttonColor : currentTheme.disabled,
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
    buttons[shape] = Button;
  });
  return {
    Circular: buttons.circular,
    Round: buttons.round,
    Sharp: buttons.sharp,
  };
}

export default buttonFactory;
