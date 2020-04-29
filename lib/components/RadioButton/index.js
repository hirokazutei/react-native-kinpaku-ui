import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { colorResolverFactory } from '../../helper';
import { RADIO_BUTTON_SHAPE_VARIATION_KEYS, DEFAULT_RADIO_BUTTON_SIZE, } from './constants';
function radioButtonFactory({ themes, sizes, additionalPalettes, defaultColor, defaultType = 'outline', }) {
    // Context
    const themeContext = React.createContext('default');
    // RadioButton Collections
    const radioButtons = {};
    // Creating Each CheckBox Components
    for (const variationKey of RADIO_BUTTON_SHAPE_VARIATION_KEYS) {
        const RadioButton = ({ _customInnerViewProps, _customInnerViewStyle, _customOuterViewProps, _customOuterViewStyle, active, color = defaultColor, isDisabled, onPress, size = 'default', type = defaultType, }) => {
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
            const activeColor = type === 'reverse' ? currentTheme.background : primaryColor;
            const inactiveColor = type === 'reverse' ? primaryColor : currentTheme.background;
            const outerRingColor = primaryColor;
            const dotColor = active ? activeColor : inactiveColor;
            const innerRingColor = type === 'reverse' ? primaryColor : currentTheme.background;
            // Size
            const { size: ringSize, dotSize: maybeDotSize, borderThickness } = sizes
                ? sizes[size]
                : DEFAULT_RADIO_BUTTON_SIZE[size];
            const dotSize = type === 'fill' ? ringSize - borderThickness * 2 : maybeDotSize;
            // BorderStyles
            const borderStyles = borderThickness;
            const borderRadiusResolver = (size) => {
                if (variationKey === 'Circular') {
                    return size * 256;
                }
                else if (variationKey === 'Round') {
                    return size / 5;
                }
                else
                    return 0;
            };
            const ringBorderRadius = borderRadiusResolver(ringSize);
            const dotBorderRadius = borderRadiusResolver(dotSize);
            // Outer Ring Style
            const outerRingStyle = Object.assign({ alignItems: 'center', backgroundColor: innerRingColor, borderColor: outerRingColor, borderRadius: ringBorderRadius, borderWidth: borderStyles, justifyContent: 'center', width: ringSize, height: ringSize }, (_customOuterViewStyle || {}));
            // Dot Style
            const dotStyle = Object.assign({ borderRadius: dotBorderRadius, backgroundColor: dotColor, width: dotSize, height: dotSize }, (_customInnerViewStyle || {}));
            return (<TouchableOpacity style={outerRingStyle} disabled={isDisabled} onPress={onPress} {..._customOuterViewProps}>
          <View style={dotStyle} {..._customInnerViewProps}/>
        </TouchableOpacity>);
        };
        radioButtons[variationKey] = RadioButton;
    }
    return radioButtons;
}
export default radioButtonFactory;
//# sourceMappingURL=index.js.map