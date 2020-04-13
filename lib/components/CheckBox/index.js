import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CHECK_BOX_SHAPE_VARIATION_KEYS, DEFAULT_CHECK_BOX_SIZES, } from './constants';
function checkBoxFactory({ themes, sizes, additionalPalettes, defaultColor, defaultType = 'fill', }) {
    const themeContext = React.createContext('default');
    const checkBoxes = {};
    for (const key in CHECK_BOX_SHAPE_VARIATION_KEYS) {
        if (CHECK_BOX_SHAPE_VARIATION_KEYS.hasOwnProperty(key)) {
            const CheckBox = ({ _customOuterViewProps, _customOuterViewStyle, active, color = defaultColor, isDisabled, onPress, size = 'default', type = defaultType, }) => {
                // Palettes
                const currentThemeKey = useContext(themeContext) || 'default';
                const currentTheme = themes[`${currentThemeKey}`];
                // Color
                const primaryColor = !isDisabled
                    ? (additionalPalettes &&
                        additionalPalettes[color]) ||
                        currentTheme[color]
                    : currentTheme.disabled;
                const activeColor = type === 'fill' || type === 'reverse'
                    ? currentTheme.background
                    : primaryColor;
                const inactiveColor = type === 'fill' ? primaryColor : currentTheme.background;
                const outerBorderColor = primaryColor;
                const checkColor = active ? activeColor : inactiveColor;
                const innerBackgroundColor = (type === 'reverse' && active) || type === 'fill'
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
                    key && key === 'Circular' ? borderRadius * 256 : borderRadius;
                const outerRingStyle = Object.assign({ alignItems: 'center', backgroundColor: innerBackgroundColor, borderColor: outerBorderColor, borderRadius: key && key === 'Sharp' ? 0 : borderRadius, borderWidth: borderThickness, justifyContent: 'center', width: sizeProperty.size, height: sizeProperty.size }, (_customOuterViewStyle || {}));
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
            checkBoxes[key] = CheckBox;
        }
    }
    return checkBoxes;
}
export default checkBoxFactory;
//# sourceMappingURL=index.js.map