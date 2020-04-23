import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, DEFAULT_TOUCHABLE_SIZE, TOUCHABLE_SHAPE_VARIATION_KEYS, } from './constants';
import { colorResolverFactory } from '../../helper';
function touchableFactory({ themes, sizes, additionalPalettes, defaultType = 'fill', }) {
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
            // Color
            const primaryColor = isDisabled
                ? currentTheme.disabled
                : colorResolver({ color, defaultColor: currentTheme.primary });
            const borderColor = primaryColor;
            // TODO: Solid/Outline types should be each individual component and not a proptype
            const fillColor = type === 'fill' ? primaryColor : currentTheme.background;
            // Size
            const touchableSizeProperty = sizes
                ? sizes[size]
                : DEFAULT_TOUCHABLE_SIZE[size];
            // BorderStyles
            const borderStyles = {
                borderColor: borderColor,
                borderWidth: DEFAULT_TOUCHABLE_BORDER_WIDTH,
            };
            // Border Radius
            const borderRadius = (() => {
                if (shapeKey === 'Circular') {
                    return touchableSizeProperty.borderRadius * 256;
                }
                else if (shapeKey == 'Round') {
                    return touchableSizeProperty.borderRadius;
                }
                else {
                    return 0;
                }
            })();
            const touchablePaddingVertical = (touchableSizeProperty &&
                touchableSizeProperty
                    .paddingVertical) ||
                touchableSizeProperty.padding;
            const touchablePaddingHorizontal = (touchableSizeProperty &&
                touchableSizeProperty
                    .paddingHorizontal) ||
                touchableSizeProperty.padding;
            const touchableStyle = Object.assign(Object.assign({ alignSelf: !isStretched ? align : 'stretch', alignItems: 'center', borderRadius, backgroundColor: fillColor, paddingHorizontal: touchablePaddingHorizontal || DEFAULT_TOUCHABLE_SIZE.default.padding, paddingVertical: touchablePaddingVertical || DEFAULT_TOUCHABLE_SIZE.default.padding }, borderStyles), _customStyle);
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