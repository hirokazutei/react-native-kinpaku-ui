import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, DEFAULT_TOUCHABLE_SIZE, TOUCHABLE_TYPE_VARIATION_KEYS, } from './constants';
import { colorResolverFactory } from '../../helper';
function touchableFactory({ themes, sizes, additionalPalettes, }) {
    const themeContext = React.createContext('default');
    const touchables = {};
    for (const typeKey in TOUCHABLE_TYPE_VARIATION_KEYS) {
        if (TOUCHABLE_TYPE_VARIATION_KEYS.hasOwnProperty(typeKey)) {
            const Touchable = ({ color, size = 'default', children, isDisabled = false, isStretched, align = DEFAULT_TOUCHABLE_ALIGN, onPress, _additionalProps, _additionalStyle, }) => {
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
                const fillColor = typeKey === 'solid' ? primaryColor : currentTheme.background;
                // Size
                const touchablePaddingProperty = sizes
                    ? sizes[size]
                    : DEFAULT_TOUCHABLE_SIZE[size];
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
                    borderRadius = DEFAULT_TOUCHABLE_SIZE.default.borderRadius;
                }
                const touchablePaddingVertical = (touchablePaddingProperty &&
                    touchablePaddingProperty
                        .paddingVertical) ||
                    touchablePaddingProperty.padding;
                const touchablePaddingHorizontal = (touchablePaddingProperty &&
                    touchablePaddingProperty
                        .paddingHorizontal) ||
                    touchablePaddingProperty.padding;
                const touchableStyle = Object.assign({ alignSelf: !isStretched ? align : 'stretch', alignItems: 'center', borderRadius: borderRadius, backgroundColor: fillColor, paddingHorizontal: touchablePaddingHorizontal ||
                        DEFAULT_TOUCHABLE_SIZE.default.padding, paddingVertical: touchablePaddingVertical || DEFAULT_TOUCHABLE_SIZE.default.padding }, borderStyles, _additionalStyle);
                return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} {..._additionalProps}>
            {children}
          </TouchableOpacity>);
            };
            touchables[typeKey] = Touchable;
        }
    }
    return touchables;
}
export default touchableFactory;
//# sourceMappingURL=index.js.map