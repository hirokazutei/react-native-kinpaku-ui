import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colorResolverFactory } from '../../helper';
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, BORDER_RADIUS_MULTIPLIER, BUTTON_SHAPE_VARIATION_KEYS, } from './constants';
function buttonFactory({ themes, sizes, additionalPalettes, defaultColor, defaultType = 'fill', }) {
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
            const colorResolver = colorResolverFactory({
                currentTheme,
                additionalPalettes,
            });
            // Color
            const primaryColor = isDisabled
                ? currentTheme.disabled
                : colorResolver({ color, defaultColor: currentTheme.primary });
            const buttonColor = type === 'fill'
                ? primaryColor
                : currentTheme.background;
            const fontColor = type === 'fill'
                ? currentTheme.background
                : primaryColor;
            // Size
            const buttonSizeProperty = sizes
                ? sizes[size]
                : DEFAULT_BUTTON_SIZE[size];
            // BorderStyles
            const borderStyles = type === 'outline'
                ? {
                    borderColor: primaryColor,
                    borderWidth: DEFAULT_BUTTON_BORDER_WIDTH,
                }
                : {};
            // BorderRadius
            const borderRadius = (() => {
                if (buttonSizeProperty) {
                    return (BORDER_RADIUS_MULTIPLIER[variationKey] *
                        buttonSizeProperty.borderRadius);
                }
                else {
                    return DEFAULT_BUTTON_SIZE.default.paddingHorizontal;
                }
            })();
            // Touchable Style
            const touchableStyle = Object.assign({ borderRadius: borderRadius, backgroundColor: buttonColor, paddingHorizontal: (buttonSizeProperty && buttonSizeProperty.paddingHorizontal) ||
                    DEFAULT_BUTTON_SIZE.default.paddingHorizontal, alignItems: align, alignSelf: !isStretched
                    ? DEFAULT_BUTTON_ALIGN
                    : 'stretch', paddingVertical: (buttonSizeProperty && buttonSizeProperty.paddingVertical) ||
                    DEFAULT_BUTTON_SIZE.default.paddingVertical }, borderStyles, (_customButtonStyle || {}));
            // Text Style
            const textStyle = Object.assign({ color: fontColor, fontSize: (buttonSizeProperty && buttonSizeProperty.fontSize) ||
                    DEFAULT_BUTTON_SIZE.default.fontSize, fontWeight: DEFAULT_BUTTON_FONT_WEIGHT }, (_customTextStyle || {}));
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