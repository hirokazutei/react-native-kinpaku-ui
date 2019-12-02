import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CHECK_BOX_VARIATION_KEYS, DEFAULT_CHECK_BOX_SIZES, } from './constants';
function checkBoxFactory({ themes, sizes, additionalPalettes, checkBoxShape, }) {
    const themeContext = React.createContext('default');
    const checkBoxes = {};
    CHECK_BOX_VARIATION_KEYS.forEach((variation) => {
        const Button = ({ active, color = 'primary', isDisabled, onPress, size = 'default', _customOuterViewProps, _customOuterViewStyle, }) => {
            // Palettes
            const currentThemeKey = useContext(themeContext) || 'default';
            const currentTheme = themes[`${currentThemeKey}`];
            // Color
            const primaryColor = !isDisabled
                ? (additionalPalettes &&
                    additionalPalettes[color]) ||
                    currentTheme[color]
                : currentTheme.disabled;
            const activeColor = variation === 'Fill' || variation === 'Reverse'
                ? currentTheme.background
                : primaryColor;
            const inactiveColor = variation === 'Fill' ? primaryColor : currentTheme.background;
            const outerBorderColor = primaryColor;
            const checkColor = active ? activeColor : inactiveColor;
            const innerBackgroundColor = (variation === 'Reverse' && active) || variation === 'Fill'
                ? primaryColor
                : currentTheme.background;
            // Size
            const sizeProperty = sizes
                ? sizes[size]
                : DEFAULT_CHECK_BOX_SIZES[size];
            // BorderStyles
            const borderThickness = sizeProperty.size / 10;
            const borderChunk = sizeProperty.size / 8;
            let borderRadius = borderThickness * 2;
            borderRadius =
                checkBoxShape && checkBoxShape === 'Circular'
                    ? borderRadius * 256
                    : borderRadius;
            const outerRingStyle = Object.assign({ alignItems: 'center', backgroundColor: innerBackgroundColor, borderColor: outerBorderColor, borderRadius: checkBoxShape && checkBoxShape === 'Sharp' ? 0 : borderRadius, borderWidth: borderThickness, justifyContent: 'center', width: sizeProperty.size, height: sizeProperty.size }, (_customOuterViewStyle || {}));
            const dotStyle = {
                borderBottomColor: checkColor,
                borderBottomWidth: borderThickness,
                borderRightColor: checkColor,
                borderRightWidth: borderThickness,
                bottom: borderChunk / 2.5,
                width: sizeProperty.size / 2 - borderChunk,
                height: sizeProperty.size - borderChunk * 3,
                transform: [{ rotate: '40deg' }],
            };
            return (<TouchableOpacity style={outerRingStyle} disabled={isDisabled} onPress={onPress} {..._customOuterViewProps}>
          <View style={dotStyle}/>
        </TouchableOpacity>);
        };
        checkBoxes[variation] = Button;
    });
    const CheckBoxes = {
        Outline: checkBoxes.Outline,
        Reverse: checkBoxes.Reverse,
        Fill: checkBoxes.Fill,
    };
    return CheckBoxes;
}
export default checkBoxFactory;
//# sourceMappingURL=index.js.map