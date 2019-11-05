import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { DEFAULT_TOUCHABLE_SIZES, DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, } from './constants';
function touchableFactory({ themes, sizes, additionalPalettes, defaultType = 'solid', allowCustomProps, }) {
    const paletteContext = React.createContext('default');
    const Touchable = ({ color = 'primary', size = 'default', children, isDisabled = false, isStretched, align = DEFAULT_TOUCHABLE_ALIGN, onPress, type = defaultType, _additionalProps, _additionalStyle, }) => {
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
        const fillColor = type === 'solid' ? primaryColor : currentTheme.background;
        // Size
        const touchablePaddingProperty = sizes && sizes[size];
        // BorderStyles
        const borderStyles = {
            borderColor: borderColor,
            borderWidth: DEFAULT_TOUCHABLE_BORDER_WIDTH,
        };
        // Border Radius
        let borderRadius = 0;
        if (touchablePaddingProperty) {
            borderRadius = touchablePaddingProperty.borderRadius;
        }
        else {
            borderRadius = DEFAULT_TOUCHABLE_SIZES.default.borderRadius;
        }
        const touchableVerticalPadding = (touchablePaddingProperty &&
            touchablePaddingProperty
                .verticalPadding) ||
            touchablePaddingProperty.padding;
        const touchableHorizontalPadding = (touchablePaddingProperty &&
            touchablePaddingProperty
                .horizontalPadding) ||
            touchablePaddingProperty.padding;
        const touchableStyle = Object.assign({ alignSelf: !isStretched ? align : 'stretch', borderRadius: borderRadius, backgroundColor: fillColor, paddingHorizontal: touchableHorizontalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding, paddingVertical: touchableVerticalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding }, borderStyles, _additionalStyle);
        return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} {..._additionalProps}>
        {children}
      </TouchableOpacity>);
    };
    return Touchable;
}
export default touchableFactory;
//# sourceMappingURL=index.js.map