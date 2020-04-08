import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { DEFAULT_TOUCHABLE_SIZES, DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, } from './constants';
import { colorResolverFactory } from '../../helper';
function touchableFactory({ themes, sizes, additionalPalettes, defaultType = 'solid', }) {
    const themeContext = React.createContext('default');
    const Touchable = ({ color, size = 'default', children, isDisabled = false, isStretched, align = DEFAULT_TOUCHABLE_ALIGN, onPress, type = defaultType, _additionalProps, _additionalStyle, }) => {
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
        const fillColor = type === 'solid' ? primaryColor : currentTheme.background;
        // Size
        const touchablePaddingProperty = sizes
            ? sizes[size]
            : DEFAULT_TOUCHABLE_SIZES[size];
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
        const touchableStyle = Object.assign({ alignSelf: !isStretched ? align : 'stretch', alignItems: 'center', borderRadius: borderRadius, backgroundColor: fillColor, paddingHorizontal: touchableHorizontalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding, paddingVertical: touchableVerticalPadding || DEFAULT_TOUCHABLE_SIZES.default.padding }, borderStyles, _additionalStyle);
        return (<TouchableOpacity style={touchableStyle} disabled={isDisabled} onPress={onPress} {..._additionalProps}>
        {children}
      </TouchableOpacity>);
    };
    return Touchable;
}
export default touchableFactory;
//# sourceMappingURL=index.js.map