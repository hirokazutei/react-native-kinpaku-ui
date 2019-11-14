import React, { useContext } from 'react';
import { Text } from 'react-native';
function textFactory({ themes, additionalPalettes, defaultFontSizeKey, textVariations, }) {
    const paletteContext = React.createContext('default');
    const TextComponents = {};
    for (const variationName in textVariations) {
        const { allowBold, allowItalic, allowLineThrough, allowUnderline, defaultColor, defaultFontSize, fontFamily, fontSizes, fontWeight, isBold, isItalic, letterSpacing, lineHeight, } = textVariations[variationName];
        const text = ({ align, bold, color = defaultColor, children, italic, size = defaultFontSizeKey || defaultFontSize, lineThrough, underline, }) => {
            // Palettes
            const currentThemeKey = useContext(paletteContext) || 'default';
            const currentTheme = themes[`${currentThemeKey}`];
            // Color
            const fontColor = (additionalPalettes &&
                additionalPalettes[color]) ||
                currentTheme[color];
            // Size
            const fontSize = fontSizes
                ? fontSizes[size]
                : size;
            // DecorationLine
            let textDecorationLine = 'none';
            if (underline && lineThrough) {
                textDecorationLine = 'underline line-through';
            }
            else if (underline) {
                textDecorationLine = 'underline';
            }
            else if (lineThrough) {
                textDecorationLine = 'line-through';
            }
            // FontStyle
            let fontStyle = isItalic ? 'italic' : 'normal';
            fontStyle = !italic && italic !== undefined ? 'normal' : fontStyle;
            // Bold
            let fontWeightStyle = isBold ? 'bold' : 'normal';
            fontWeightStyle =
                fontWeight && fontWeight !== undefined ? fontWeight : fontWeightStyle;
            fontWeightStyle =
                !bold && bold !== undefined ? 'normal' : fontWeightStyle;
            // Text Style
            const textStyle = {
                color: fontColor,
                fontFamily,
                fontSize,
                fontStyle,
                fontWeight: fontWeightStyle,
                letterSpacing,
                lineHeight,
                textAlign: align,
                textDecorationLine,
            };
            return <Text style={textStyle}>{children}</Text>;
        };
        TextComponents[`${variationName}`] = text;
    }
    return TextComponents;
}
export default textFactory;
//# sourceMappingURL=index.js.map