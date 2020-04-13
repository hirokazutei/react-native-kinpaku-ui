import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colorResolverFactory } from '../../helper';
import { DEFAULT_BUTTON_SIZE, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, BORDER_RADIUS_MULTIPLIER, BUTTON_SHAPE_VARIATION_KEYS, } from './constants';
function buttonFactory({ themes, sizes, additionalPalettes, defaultColor, defaultType = 'fill', }) {
    const themeContext = React.createContext('default');
    const buttons = {};
    for (const key in BUTTON_SHAPE_VARIATION_KEYS) {
        if (BUTTON_SHAPE_VARIATION_KEYS.hasOwnProperty(key)) {
            const Button = ({ _additionalButtonProps, _additionalButtonStyle, _additionalTextProps, _additionalTextStyle, align = DEFAULT_BUTTON_ALIGN, color = defaultColor, isDisabled, isStretched, onPress, size = 'default', title, type = defaultType, }) => {
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
                let borderRadius = 0;
                if (buttonSizeProperty) {
                    borderRadius =
                        BORDER_RADIUS_MULTIPLIER[key] *
                            buttonSizeProperty.borderRadius;
                }
                else {
                    borderRadius = DEFAULT_BUTTON_SIZE.default.paddingHorizontal;
                }
                // Touchable Style
                const touchableStyle = Object.assign({ borderRadius: borderRadius, backgroundColor: buttonColor, paddingHorizontal: (buttonSizeProperty && buttonSizeProperty.paddingHorizontal) ||
                        DEFAULT_BUTTON_SIZE.default.paddingHorizontal, alignItems: align, alignSelf: !isStretched
                        ? DEFAULT_BUTTON_ALIGN
                        : 'stretch', paddingVertical: (buttonSizeProperty && buttonSizeProperty.paddingVertical) ||
                        DEFAULT_BUTTON_SIZE.default.paddingVertical }, borderStyles, (_additionalButtonStyle || {}));
                // Text Style
                const textStyle = Object.assign({ color: fontColor, fontSize: (buttonSizeProperty && buttonSizeProperty.fontSize) ||
                        DEFAULT_BUTTON_SIZE.default.fontSize, fontWeight: DEFAULT_BUTTON_FONT_WEIGHT }, (_additionalTextStyle || {}));
                return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} accessibilityLabel={title} {..._additionalButtonProps || {}}>
            <Text style={textStyle} {..._additionalTextProps || {}}>
              {title}
            </Text>
          </TouchableOpacity>);
            };
            buttons[key] = Button;
        }
    }
    return buttons;
}
export default buttonFactory;
//# sourceMappingURL=index.js.map