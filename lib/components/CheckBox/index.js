import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { CHECK_BOX_SHAPE_VARIATION_KEYS, DEFAULT_CHECK_BOX_SIZES, REVERSE, } from './constants';
import { colorResolverFactory } from '../../helper';
import { OUTLINE } from './constants';
import { FILL } from '../Button/constants';
function checkBoxFactory({ themes, sizes, additionalPalettes, defaultColor, defaultType = OUTLINE, }) {
    // Context
    const themeContext = React.createContext('default');
    // CheckBox Collections
    const checkBoxes = {};
    // Creating Each CheckBox Components
    for (const variationKey of CHECK_BOX_SHAPE_VARIATION_KEYS) {
        const CheckBox = ({ _customOuterViewProps, _customOuterViewStyle, active, color = defaultColor, isDisabled, onPress, size = 'default', type = defaultType, }) => {
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
            const activeColor = type === FILL || type === REVERSE
                ? currentTheme.background
                : primaryColor;
            const inactiveColor = type === FILL ? primaryColor : currentTheme.background;
            const outerBorderColor = primaryColor;
            const checkColor = active ? activeColor : inactiveColor;
            const innerBackgroundColor = (type === REVERSE && active) || type === FILL
                ? primaryColor
                : currentTheme.background;
            // Size
            const sizeProperty = sizes
                ? sizes[size]
                : DEFAULT_CHECK_BOX_SIZES[size];
            // BorderStyles
            const borderThickness = sizeProperty.size / 10;
            const borderChunk = sizeProperty.size / 8;
            const borderRadius = (() => {
                if (variationKey === 'Circular') {
                    return sizeProperty.size * 256;
                }
                else
                    return sizeProperty.size / 5;
            })();
            // Outer Ring Style
            const outerRingStyle = Object.assign({ alignItems: 'center', backgroundColor: innerBackgroundColor, borderColor: outerBorderColor, borderRadius: variationKey === 'Sharp' ? 0 : borderRadius, borderWidth: borderThickness, justifyContent: 'center', width: sizeProperty.size, height: sizeProperty.size }, (_customOuterViewStyle || {}));
            // Dot Style
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
        checkBoxes[variationKey] = CheckBox;
    }
    return checkBoxes;
}
export default checkBoxFactory;
//# sourceMappingURL=index.js.map