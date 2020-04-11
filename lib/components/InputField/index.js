var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import { DEFAULT_BORDER_WIDTH, DEFAULT_INPUT_FIELD_SIZE, DEFAULT_INPUT_VARIATION_SETTINGS, } from './constants';
import { colorResolverFactory } from '../../helper';
function inputFieldFactory({ themes, additionalPalettes, sizes, defaultColor, inputFieldType = 'Outline', defaultShape = 'circular', }) {
    const themeContext = React.createContext('default');
    const inputFields = {};
    for (const key in DEFAULT_INPUT_VARIATION_SETTINGS) {
        if (DEFAULT_INPUT_VARIATION_SETTINGS.hasOwnProperty(key)) {
            const InputField = (_a) => {
                var { backgroundColor, borderColor, color = defaultColor, isDisabled, maxLength, size, shape, textColor } = _a, inputFieldProps = __rest(_a, ["backgroundColor", "borderColor", "color", "isDisabled", "maxLength", "size", "shape", "textColor"]);
                // Palettes
                const currentThemeKey = useContext(themeContext) || 'default';
                const currentTheme = themes[`${currentThemeKey}`];
                const colorResolver = colorResolverFactory({
                    currentTheme,
                    additionalPalettes,
                });
                // variation ->
                // Type
                const isOutline = inputFieldType === 'Outline';
                const isFill = inputFieldType === 'Fill';
                const isUnderline = inputFieldType === 'Underline';
                // Shape
                const isRounded = shape
                    ? shape === 'rounded'
                    : defaultShape === 'rounded';
                const isCircular = shape
                    ? shape === 'circular'
                    : defaultShape === 'circular';
                // Type Color
                const defaultTextColor = isFill
                    ? currentTheme.background
                    : currentTheme.primary;
                // Set-Up Color
                const primaryBackgroundColor = colorResolver({
                    color: backgroundColor,
                    defaultColor: currentTheme.primary,
                });
                const primaryTextColor = colorResolver({
                    color: textColor,
                    defaultColor: defaultTextColor,
                });
                const primaryBorderColor = colorResolver({
                    color: borderColor,
                    defaultColor: currentTheme.primary,
                });
                // Size
                const sizeProp = sizes
                    ? sizes[size]
                    : DEFAULT_INPUT_FIELD_SIZE;
                // Border Width
                const borderWidth = sizeProp.borderWidth
                    ? sizeProp.borderWidth
                    : DEFAULT_BORDER_WIDTH;
                // Padding
                const paddingProp = sizeProp.padding ? { padding: sizeProp.padding } : {};
                const paddingHorizontalProp = sizeProp.paddingHorizontal
                    ? { padding: sizeProp.paddingHorizontal }
                    : {};
                const paddingVerticalProp = sizeProp.paddingVertical
                    ? { padding: sizeProp.paddingVertical }
                    : {};
                // Border Radius
                const borderRadiusFontRatio = sizeProp.borderRadiusFontRatio
                    ? sizeProp.borderRadiusFontRatio
                    : 0.5;
                const staticBorderRadius = sizeProp.staticBorderRadius
                    ? sizeProp.staticBorderRadius
                    : false;
                const borderRadiusProp = (() => {
                    if (staticBorderRadius) {
                        return { borderRadius: staticBorderRadius };
                    }
                    if (isOutline || isFill) {
                        if (isRounded) {
                            const borderRadius = borderRadiusFontRatio * sizeProp.fontSize;
                            return { borderRadius: borderRadius };
                        }
                        else if (isCircular) {
                            const borderRadius = borderRadiusFontRatio
                                ? borderRadiusFontRatio * 256 * sizeProp.fontSize
                                : 256;
                            return { borderRadius: borderRadius };
                        }
                    }
                    return { borderRadius: 0 };
                })();
                // Color
                const backgroundColorProp = isFill
                    ? { backgroundColor: primaryBackgroundColor }
                    : {};
                // Border
                const borderWidthProp = isOutline ? { borderWidth: borderWidth } : {};
                const borderColorProp = !isFill
                    ? { borderColor: primaryBorderColor }
                    : {};
                const borderBottomWidthProp = isUnderline
                    ? { borderBottomWidth: borderWidth }
                    : {};
                // Disabled
                const disabledColor = isFill
                    ? currentTheme.background
                    : currentTheme.disabled;
                const disabledBackground = isFill
                    ? currentTheme.disabled
                    : currentTheme.background;
                // Input Field Variation Props
                const _b = DEFAULT_INPUT_VARIATION_SETTINGS[key], { fontFamily, isBold, isItalic, leftIcon, letterSpacing, lineHeight, maxLength: defaultMaxLength, returnKeyType, rightIcon, textAlign, textContentType } = _b, inputFieldOptions = __rest(_b, ["fontFamily", "isBold", "isItalic", "leftIcon", "letterSpacing", "lineHeight", "maxLength", "returnKeyType", "rightIcon", "textAlign", "textContentType"]);
                // WrappedStyle
                const wrapperStyleProps = Object.assign({ flexDirection: 'row' }, (isDisabled ? { borderColor: disabledColor } : borderColorProp), (isDisabled
                    ? { backgroundColor: disabledBackground }
                    : backgroundColorProp), borderWidthProp, borderBottomWidthProp, borderRadiusProp, paddingProp, paddingHorizontalProp, paddingVerticalProp);
                // FieldStyle
                const fieldStyleProps = Object.assign({ flex: 1 }, (isBold ? { fontWeight: 'bold' } : {}), (isItalic ? { fontStyle: 'italic' } : {}), (fontFamily ? { fontFamily } : {}), (isDisabled ? { color: disabledColor } : { color: primaryTextColor }), (textAlign ? { textAlign } : {}), { fontSize: sizeProp.fontSize }, (letterSpacing ? { letterSpacing } : {}), (lineHeight ? { lineHeight } : {}));
                return (<View style={wrapperStyleProps}>
            {leftIcon}
            <TextInput style={fieldStyleProps} {...(isDisabled ? { editable: !isDisabled } : {})} {...(maxLength ? { maxLength } : defaultMaxLength)} {...inputFieldProps} {...inputFieldOptions}/>
            {rightIcon}
          </View>);
            };
            inputFields[key] = InputField;
        }
    }
    return inputFields;
}
export default inputFieldFactory;
//# sourceMappingURL=index.js.map