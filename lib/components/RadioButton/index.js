import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { colorResolverFactory } from '../../helper';
import { RADIO_BUTTON_SHAPE_VARIATION_KEYS, DEFAULT_RADIO_BUTTON_SIZE, } from './constants';
function radioButtonFactory({ themes, sizes, additionalPalettes, }) {
    const themeContext = React.createContext('default');
    const radioButtons = {};
    for (const shapeKey of RADIO_BUTTON_SHAPE_VARIATION_KEYS) {
        const Button = ({ active, color = 'primary', isDisabled, onPress, size = 'default', _customInnerViewProps, _customInnerViewStyle, _customOuterViewProps, _customOuterViewStyle, }) => {
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
                : colorResolver({ color, defaultColor: currentTheme.primary })
                    ? (additionalPalettes &&
                        additionalPalettes[color]) ||
                        currentTheme[color]
                    : currentTheme.disabled;
            const activeColor = shapeKey === 'Reverse' ? currentTheme.background : primaryColor;
            const inactiveColor = shapeKey === 'Reverse' ? primaryColor : currentTheme.background;
            const outerRingColor = primaryColor;
            const dotColor = active ? activeColor : inactiveColor;
            const innerRingColor = shapeKey === 'Reverse' ? primaryColor : currentTheme.background;
            // Size
            const sizeProperty = sizes
                ? sizes[size]
                : DEFAULT_RADIO_BUTTON_SIZE[size];
            const dotSize = shapeKey === 'Fill'
                ? sizeProperty.size - sizeProperty.borderThickness * 2
                : sizeProperty.dotSize;
            // BorderStyles
            const borderStyles = sizeProperty.borderThickness;
            const outerRingStyle = Object.assign({ alignItems: 'center', backgroundColor: innerRingColor, borderColor: outerRingColor, borderRadius: 100, borderWidth: borderStyles, justifyContent: 'center', width: sizeProperty.size, height: sizeProperty.size }, (_customOuterViewStyle || {}));
            const dotStyle = Object.assign({ borderRadius: 100, backgroundColor: dotColor, width: dotSize, height: dotSize }, (_customInnerViewStyle || {}));
            return (<TouchableOpacity style={outerRingStyle} disabled={isDisabled} onPress={onPress} {..._customOuterViewProps}>
          <View style={dotStyle} {..._customInnerViewProps}/>
        </TouchableOpacity>);
        };
        radioButtons[shapeKey] = Button;
    }
    return radioButtons;
}
export default radioButtonFactory;
//# sourceMappingURL=index.js.map