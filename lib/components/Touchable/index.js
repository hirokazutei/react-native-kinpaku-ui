import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, DEFAULT_TOUCHABLE_SIZE, TOUCHABLE_SHAPE_VARIATION_KEYS, FILL, OUTLINE, CLEAR, } from './constants';
import { colorResolverFactory } from '../../helper';
function touchableFactory({ themes, sizes, additionalPalettes, defaultType = OUTLINE, }) {
    // Context
    const themeContext = React.createContext('default');
    const touchables = {};
    for (const shapeKey of TOUCHABLE_SHAPE_VARIATION_KEYS) {
        const Touchable = ({ _customProps, _customStyle, align = DEFAULT_TOUCHABLE_ALIGN, children, color, isDisabled = false, isStretched, onPress, size = 'default', type = defaultType, }) => {
            // Palettes
            const currentThemeKey = useContext(themeContext) || 'default';
            const currentTheme = themes[`${currentThemeKey}`];
            const colorResolver = colorResolverFactory({
                currentTheme,
                additionalPalettes,
            });
            // Type
            const isFill = type === FILL;
            const isClear = type === CLEAR;
            // Color
            const primaryColor = isDisabled
                ? currentTheme.disabled
                : colorResolver({ color, defaultColor: currentTheme.primary });
            const borderColor = primaryColor;
            const fillColor = isFill ? primaryColor : currentTheme.background;
            // Size
            const touchableSizeProperty = sizes
                ? sizes[size]
                : DEFAULT_TOUCHABLE_SIZE[size];
            // Border Radius
            const borderRadius = (() => {
                if (shapeKey === 'Circular') {
                    return touchableSizeProperty.borderRadius * 256;
                }
                else if (shapeKey === 'Round') {
                    return touchableSizeProperty.borderRadius;
                }
                else {
                    return 0;
                }
            })();
            // Border Width
            const borderWidth = isClear
                ? {}
                : { borderWidth: DEFAULT_TOUCHABLE_BORDER_WIDTH };
            // BorderStyles
            const borderStyles = Object.assign({ borderColor: borderColor, borderRadius: borderRadius }, borderWidth);
            const touchableStyle = Object.assign(Object.assign(Object.assign({ alignSelf: !isStretched ? align : 'stretch', alignItems: 'center', backgroundColor: fillColor }, (touchableSizeProperty.touchableSpacing
                ? touchableSizeProperty.touchableSpacing
                : {})), borderStyles), _customStyle);
            return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} {..._customProps}>
          {children}
        </TouchableOpacity>);
        };
        touchables[shapeKey] = Touchable;
    }
    return touchables;
}
export default touchableFactory;
//# sourceMappingURL=index.js.map