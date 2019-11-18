import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RADIO_BUTTON_VARIATION_KEYS, DEFAULT_RADIO_BUTTON_SIZE, } from './constants';
function radioButtonFactory({ themes, sizes, additionalPalettes, }) {
    const themeContext = React.createContext('default');
    const radioButtons = {};
    RADIO_BUTTON_VARIATION_KEYS.forEach((variation) => {
        const Button = ({ active, color, isDisabled, onPress, size, _customInnerViewProps, _customInnerViewStyle, _customOuterViewProps, _customOuterViewStyle, }) => {
            // Palettes
            const currentThemeKey = useContext(themeContext) || 'default';
            const currentTheme = themes[`${currentThemeKey}`];
            // Color
            const primaryColor = !isDisabled
                ? (additionalPalettes &&
                    additionalPalettes[color]) ||
                    currentTheme[color]
                : currentTheme.disabled;
            const activeColor = variation === 'Reverse' ? currentTheme.background : primaryColor;
            const deactiveColor = variation === 'Reverse' ? primaryColor : currentTheme.background;
            const outerRingColor = primaryColor;
            const dotColor = active ? activeColor : deactiveColor;
            const innerRingColor = variation === 'Reverse' ? primaryColor : currentTheme.background;
            // Size
            const sizeProperty = (() => {
                if (sizes &&
                    sizes.default) {
                    return sizes[`${size}`];
                }
                else if (sizes && sizes.size) {
                    return sizes;
                }
                else {
                    return DEFAULT_RADIO_BUTTON_SIZE;
                }
            })();
            const dotSize = variation === 'Fill'
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
        radioButtons[variation] = Button;
    });
    const RadioButtons = {
        Dot: radioButtons.Dot,
        Reverse: radioButtons.Reverse,
        Fill: radioButtons.Fill,
    };
    return RadioButtons;
}
export default radioButtonFactory;
//# sourceMappingURL=index.js.map