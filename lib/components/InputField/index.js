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
import { TextInput, View, } from 'react-native';
import { colorResolverFactory } from '../../helper';
import { DEFAULT_INPUT_FIELD_BORDER_WIDTH, DEFAULT_INPUT_FIELD_SIZE, DEFAULT_INPUT_VARIATION_SETTING, } from './constants';
function inputFieldFactory({ themes, additionalPalettes, sizes, shape = 'circular', defaultColor, defaultType = 'outline', }) {
    // Context
    const themeContext = React.createContext('default');
    // InputField Collections
    const inputFields = {};
    // Creating each InputField Components
    for (const settingKey in DEFAULT_INPUT_VARIATION_SETTING) {
        if (DEFAULT_INPUT_VARIATION_SETTING.hasOwnProperty(settingKey)) {
            const InputField = (_a) => {
                var { _customTextInputProps, _customTextInputStyle, _customWrapperProps, _customWrapperStyle, backgroundColor, borderColor, color = defaultColor, isDisabled, leftItem, maxLength, rightItem, size = 'default', textColor, type } = _a, inputFieldProps = __rest(_a, ["_customTextInputProps", "_customTextInputStyle", "_customWrapperProps", "_customWrapperStyle", "backgroundColor", "borderColor", "color", "isDisabled", "leftItem", "maxLength", "rightItem", "size", "textColor", "type"]);
                // Palettes
                const currentThemeKey = useContext(themeContext) || 'default';
                const currentTheme = themes[`${currentThemeKey}`];
                // Type
                const setType = type || defaultType;
                const isOutline = setType === 'outline';
                const isFill = setType === 'fill';
                const isUnderline = setType === 'underline';
                // Shape
                const isRound = shape === 'round';
                const isCircular = shape === 'circular';
                // Set-Up Color
                const colorResolver = colorResolverFactory({
                    currentTheme,
                    additionalPalettes,
                });
                const defaultTextColor = isFill
                    ? currentTheme.background
                    : currentTheme.primary;
                const declaredTextColor = textColor || (isFill ? 'background' : color);
                const primaryBackgroundColor = colorResolver({
                    color: backgroundColor || color,
                    defaultColor: currentTheme.primary,
                });
                const primaryTextColor = colorResolver({
                    color: declaredTextColor,
                    defaultColor: defaultTextColor,
                });
                const primaryBorderColor = colorResolver({
                    color: borderColor || color,
                    defaultColor: currentTheme.primary,
                });
                // Size
                const sizeProp = sizes
                    ? sizes[size]
                    : DEFAULT_INPUT_FIELD_SIZE.default;
                // Border Width
                const borderWidth = sizeProp.borderWidth
                    ? sizeProp.borderWidth
                    : DEFAULT_INPUT_FIELD_BORDER_WIDTH;
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
                        if (isRound) {
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
                const borderWidthProp = isOutline ? { borderWidth } : {};
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
                const _b = DEFAULT_INPUT_VARIATION_SETTING[settingKey], { fontFamily, isBold, isItalic, letterSpacing, lineHeight, maxLength: defaultMaxLength, returnKeyType, staticLeftItem, staticRightItem, textAlign, textContentType } = _b, inputFieldOptions = __rest(_b, ["fontFamily", "isBold", "isItalic", "letterSpacing", "lineHeight", "maxLength", "returnKeyType", "staticLeftItem", "staticRightItem", "textAlign", "textContentType"]);
                // WrappedStyle
                const wrapperStyleProps = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ alignItems: 'center', flexDirection: 'row' }, (isDisabled ? { borderColor: disabledColor } : borderColorProp)), (isDisabled
                    ? { backgroundColor: disabledBackground }
                    : backgroundColorProp)), borderWidthProp), borderBottomWidthProp), borderRadiusProp), paddingProp), paddingHorizontalProp), paddingVerticalProp), (_customWrapperStyle ? _customWrapperStyle : {}));
                // FieldStyle
                const fieldStyleProps = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ flex: 1 }, (isBold ? { fontWeight: 'bold' } : {})), (isItalic ? { fontStyle: 'italic' } : {})), (fontFamily ? { fontFamily } : {})), (isDisabled ? { color: disabledColor } : { color: primaryTextColor })), (textAlign ? { textAlign } : {})), { fontSize: sizeProp.fontSize }), (letterSpacing ? { letterSpacing } : {})), (lineHeight ? { lineHeight } : {})), (_customTextInputStyle ? _customTextInputStyle : {}));
                return (<View style={wrapperStyleProps} {...(_customWrapperProps ? _customWrapperProps : {})}>
            {leftItem || staticLeftItem}
            <TextInput style={fieldStyleProps} {...(isDisabled ? { editable: !isDisabled } : {})} {...(maxLength ? { maxLength } : defaultMaxLength)} {...inputFieldProps} {...inputFieldOptions} {...(_customTextInputProps ? _customTextInputProps : {})}/>
            {rightItem || staticRightItem}
          </View>);
            };
            inputFields[settingKey] = InputField;
        }
    }
    return inputFields;
}
export default inputFieldFactory;
//# sourceMappingURL=index.js.map