import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { DEFAULT_TOUCHABLE_SIZES, DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, } from './constants';
function touchableFactory({ themes, touchablePaddingSizes, additionalPalettes, defaultTouchableType = 'filled', }) {
    const paletteContext = React.createContext('default');
    const Touchable = ({ color = 'primary', size = 'default', children, isDisabled = false, isStretched, align = DEFAULT_TOUCHABLE_ALIGN, onPress, type = defaultTouchableType, additionalProps, additionalStyle, }) => {
        // Palettes
        const currentThemeKey = useContext(paletteContext) || 'default';
        const currentTheme = themes[`${currentThemeKey}`];
        // Color
        const primaryColor = !isDisabled
            ? (additionalPalettes &&
                additionalPalettes[color]) ||
                currentTheme[color]
            : currentTheme.disabled;
        const borderColor = primaryColor;
        const fillColor = type === 'filled' ? primaryColor : currentTheme.background;
        // Size
        const TouchablePaddingProperty = touchablePaddingSizes &&
            touchablePaddingSizes[size];
        // BorderStyles
        const borderStyles = {
            borderColor: borderColor,
            borderWidth: DEFAULT_TOUCHABLE_BORDER_WIDTH,
        };
        // Border Radius
        let borderRadius = 0;
        if (TouchablePaddingProperty) {
            borderRadius = TouchablePaddingProperty.borderRadius;
        }
        else {
            borderRadius = DEFAULT_TOUCHABLE_SIZES.default.borderRadius;
        }
        const touchableVerticalPadding = (TouchablePaddingProperty &&
            TouchablePaddingProperty
                .verticalPadding) ||
            TouchablePaddingProperty.padding;
        const touchableHorizontalPadding = (TouchablePaddingProperty &&
            TouchablePaddingProperty
                .horizontalPadding) ||
            TouchablePaddingProperty.padding;
        const touchableStyle = Object.assign({ alignSelf: !isStretched ? align : 'stretch', borderRadius: borderRadius, backgroundColor: fillColor, paddingHorizontal: touchableHorizontalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding, paddingVertical: touchableVerticalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding }, borderStyles, additionalStyle);
        return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} {...additionalProps}>
        {children}
      </TouchableOpacity>);
    };
    return Touchable;
}
export default touchableFactory;
//# sourceMappingURL=index.js.map