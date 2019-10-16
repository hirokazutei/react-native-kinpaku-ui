import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { DEFAULT_BUTTON_SIZES, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, BORDER_RADIUS_MULTIPLIERS, buttonShapeKeys, } from './constants';
function buttonFactory({ themes, buttonSizes, additionalPalettes, defaultButtonType = 'solid', }) {
    const paletteContext = React.createContext('default');
    const buttons = {};
    buttonShapeKeys.forEach((shape) => {
        const Button = ({ color = 'primary', size = 'default', isDisabled, isStretched, align = DEFAULT_BUTTON_ALIGN, onPress, title, type = defaultButtonType, additionalButtonProps, additionalButtonStyle, additionalTextProps, additionalTextStyle, }) => {
            // Palettes
            const currentThemeKey = useContext(paletteContext) || 'default';
            const currentTheme = themes[`${currentThemeKey}`];
            // Color
            const primaryColor = !isDisabled
                ? (additionalPalettes &&
                    additionalPalettes[color]) ||
                    currentTheme[color]
                : currentTheme.disabled;
            const buttonColor = type === 'solid' ? primaryColor : currentTheme.background;
            const fontColor = type === 'solid' ? currentTheme.background : primaryColor;
            // Size
            const buttonSizeProperty = buttonSizes &&
                buttonSizes[`${size}`];
            // BorderStyles
            const borderStyles = type === 'outline'
                ? {
                    borderColor: primaryColor,
                    borderWidth: DEFAULT_BUTTON_BORDER_WIDTH,
                }
                : {};
            // BorderRadius
            let borderRadius = 0;
            if (buttonSizeProperty) {
                borderRadius =
                    BORDER_RADIUS_MULTIPLIERS[shape] *
                        buttonSizeProperty.borderRadius;
            }
            else {
                borderRadius = DEFAULT_BUTTON_SIZES.default.horizontalPadding;
            }
            const touchableStyle = Object.assign({ borderRadius: borderRadius, backgroundColor: buttonColor, paddingHorizontal: (buttonSizeProperty && buttonSizeProperty.horizontalPadding) ||
                    DEFAULT_BUTTON_SIZES.default.horizontalPadding, alignSelf: !isStretched
                    ? DEFAULT_BUTTON_ALIGN
                    : 'stretch', paddingVertical: (buttonSizeProperty && buttonSizeProperty.verticalPaddding) ||
                    DEFAULT_BUTTON_SIZES.default.verticalPaddding }, borderStyles, additionalButtonStyle);
            // Text Style
            const textStyle = Object.assign({ color: fontColor, alignSelf: align, fontSize: (buttonSizeProperty && buttonSizeProperty.fontSize) ||
                    DEFAULT_BUTTON_SIZES.default.fontSize, fontWeight: DEFAULT_BUTTON_FONT_WEIGHT }, additionalTextStyle);
            return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} accessibilityLabel={title} {...additionalButtonProps}>
          <Text style={textStyle} {...additionalTextProps}>
            {title}
          </Text>
        </TouchableOpacity>);
        };
        buttons[shape] = Button;
    });
    const Button = {
        Circular: buttons.circular,
        Round: buttons.round,
        Sharp: buttons.sharp,
    };
    return Button;
}
export default buttonFactory;
//# sourceMappingURL=index.js.map