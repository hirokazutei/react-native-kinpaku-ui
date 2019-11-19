import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { DEFAULT_BUTTON_SIZES, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, BORDER_RADIUS_MULTIPLIERS, BUTTON_VARIATION_KEYS, } from './constants';
function buttonFactory({ themes, sizes, additionalPalettes, defaultType = 'solid', }) {
    const paletteContext = React.createContext('default');
    const buttons = {};
    BUTTON_VARIATION_KEYS.forEach((variation) => {
        const Button = ({ color = 'primary', size = 'default', isDisabled, isStretched, align = DEFAULT_BUTTON_ALIGN, onPress, title, type = defaultType, _additionalButtonProps, _additionalButtonStyle, _additionalTextProps, _additionalTextStyle, }) => {
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
            const buttonSizeProperty = sizes
                ? sizes[size]
                : DEFAULT_BUTTON_SIZES[size];
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
                    BORDER_RADIUS_MULTIPLIERS[variation] *
                        buttonSizeProperty.borderRadius;
            }
            else {
                borderRadius = DEFAULT_BUTTON_SIZES.default.horizontalPadding;
            }
            const touchableStyle = Object.assign({ borderRadius: borderRadius, backgroundColor: buttonColor, paddingHorizontal: (buttonSizeProperty && buttonSizeProperty.horizontalPadding) ||
                    DEFAULT_BUTTON_SIZES.default.horizontalPadding, alignSelf: !isStretched
                    ? DEFAULT_BUTTON_ALIGN
                    : 'stretch', paddingVertical: (buttonSizeProperty && buttonSizeProperty.verticalPaddding) ||
                    DEFAULT_BUTTON_SIZES.default.verticalPaddding }, borderStyles, (_additionalButtonStyle || {}));
            // Text Style
            const textStyle = Object.assign({ color: fontColor, alignSelf: align, fontSize: (buttonSizeProperty && buttonSizeProperty.fontSize) ||
                    DEFAULT_BUTTON_SIZES.default.fontSize, fontWeight: DEFAULT_BUTTON_FONT_WEIGHT }, (_additionalTextStyle || {}));
            return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} accessibilityLabel={title} {...(_additionalButtonProps || {})}>
          <Text style={textStyle} {...(_additionalTextProps || {})}>
            {title}
          </Text>
        </TouchableOpacity>);
        };
        buttons[variation] = Button;
    });
    const Button = {
        Circular: buttons.Circular,
        Round: buttons.Round,
        Sharp: buttons.Sharp,
    };
    return Button;
}
export default buttonFactory;
//# sourceMappingURL=index.js.map