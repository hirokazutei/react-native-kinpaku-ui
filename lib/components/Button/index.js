import React, { useContext } from 'react';
import { Text, TouchableOpacity, } from 'react-native';
import { colorResolverFactory } from '../../helper';
import { BORDER_RADIUS_MULTIPLIER, BUTTON_SHAPE_VARIATION_KEYS, DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, FILL, OUTLINE, } from './constants';
function buttonFactory({ themes, sizes, additionalPalettes, defaultColor, defaultType = OUTLINE, }) {
    // Context
    const themeContext = React.createContext('default');
    // Button Collections
    const buttons = {};
    // Creating Each Button Components
    for (const variationKey of BUTTON_SHAPE_VARIATION_KEYS) {
        const Button = ({ _customButtonProps, _customButtonStyle, _customTextProps, _customTextStyle, align = DEFAULT_BUTTON_ALIGN, color = defaultColor, isDisabled, isStretched, onPress, size = 'default', label, type = defaultType, }) => {
            // Palettes
            const currentThemeKey = useContext(themeContext) || 'default';
            const currentTheme = themes[`${currentThemeKey}`];
            // Color
            const colorResolver = colorResolverFactory({
                currentTheme,
                additionalPalettes,
            });
            const primaryColor = isDisabled
                ? currentTheme.disabled
                : colorResolver({ color, defaultColor: currentTheme.primary });
            const buttonColor = type === FILL ? primaryColor : currentTheme.background;
            const fontColor = type === FILL ? currentTheme.background : primaryColor;
            // Size
            const buttonSizeProperty = sizes
                ? sizes[size]
                : DEFAULT_BUTTON_SIZE[size];
            // BorderStyles
            const borderStyles = type === OUTLINE
                ? {
                    borderColor: primaryColor,
                    borderWidth: DEFAULT_BUTTON_BORDER_WIDTH,
                }
                : {};
            // BorderRadius
            const borderRadius = BORDER_RADIUS_MULTIPLIER[variationKey] *
                buttonSizeProperty.borderRadius;
            // Touchable Style
            const touchableStyle = Object.assign(Object.assign(Object.assign({ borderRadius: borderRadius, backgroundColor: buttonColor, alignItems: align, alignSelf: !isStretched
                    ? DEFAULT_BUTTON_ALIGN
                    : 'stretch' }, (buttonSizeProperty.buttonSpacing
                ? buttonSizeProperty.buttonSpacing
                : {})), borderStyles), (_customButtonStyle || {}));
            // Text Style
            const textStyle = Object.assign({ color: fontColor, fontSize: (buttonSizeProperty && buttonSizeProperty.fontSize) ||
                    DEFAULT_BUTTON_SIZE.default.fontSize, fontWeight: buttonSizeProperty.fontWeight || DEFAULT_BUTTON_FONT_WEIGHT }, (_customTextStyle || {}));
            return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} accessibilityLabel={label} {..._customButtonProps || {}}>
          <Text style={textStyle} {..._customTextProps || {}}>
            {label}
          </Text>
        </TouchableOpacity>);
        };
        buttons[variationKey] = Button;
    }
    return buttons;
}
export default buttonFactory;
//# sourceMappingURL=index.js.map