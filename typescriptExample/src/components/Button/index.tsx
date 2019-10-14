import React, {useContext} from 'react';
import {TouchableOpacity, Text, FlexAlignType} from 'react-native';
import {
  FactoryProps,
  ButtonProps as Props,
  ButtonSizeProps,
  ButtonShapes,
  ButtonType,
} from './types';
import {DefaultObject, ThemePalette} from '../../types';
import {
  DEFAULT_BUTTON_SIZES,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_FONT_WEIGHT,
  DEFAULT_BUTTON_BORDER_WIDTH,
  BORDER_RADIUS_MULTIPLIERS,
  BUTTON_SHAPE_KEY,
} from './constants';

function buttonFactory<PaletteObjectType, AdditionalPalettes, ButtonSizes>({
  themes,
  buttonSizes,
  additionalPalettes,
  defaultButtonShape = 'round',
  defaultButtonType = 'solid',
}: FactoryProps<PaletteObjectType, AdditionalPalettes, ButtonSizes>) {
  const paletteContext: React.Context<
    keyof PaletteObjectType
  > = React.createContext('default' as keyof PaletteObjectType);
  const buttons: {
    [key in ButtonShapes]?: React.FC<Props<AdditionalPalettes, ButtonSizes>>;
  } = {};
  BUTTON_SHAPE_KEY.forEach((shape: ButtonShapes) => {
    const Button: React.FC<Props<AdditionalPalettes, ButtonSizes>> = ({
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

      // TouchableOpacity Style
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
  const defaultSelector = {
    get: function(button: typeof buttons, key: ButtonShapes) {
      if (key) {
        return button[key];
      }
      return button[defaultButtonShape];
    },
  };
  const Buttons = new Proxy(buttons, defaultSelector);

  return Buttons;
}

export default buttonFactory;
