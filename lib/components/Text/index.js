import React, { useContext } from 'react';
import { Text } from 'react-native';
import { DEFAULT_TEXT_VARIATIONS } from './constants';
function textFactory({ themes, additionalPalettes, defaultFontSizeKey, textVariations, }) {
    const paletteContext = React.createContext('default');
    const TextComponents = {};
    for (const variationName in textVariations
        ? textVariations
        : DEFAULT_TEXT_VARIATIONS) {
        const { defaultColor = 'text', defaultFontSize, fontFamily, fontSizes, fontWeight, isBold, isItalic, letterSpacing, lineHeight, } = textVariations
            ? textVariations[variationName]
            : DEFAULT_TEXT_VARIATIONS[variationName];
        const text = ({ align, bold, color = defaultColor, children, italic, size, lineThrough, underline, }) => {
            // Palettes
            const currentThemeKey = useContext(paletteContext) || 'default';
            const currentTheme = themes[`${currentThemeKey}`];
            // Color
            const fontColor = (additionalPalettes &&
                additionalPalettes[color]) ||
                currentTheme[color];
            // Size
            // = defaultFontSizeKey || defaultFontSize
            const sizeKey = (fontSizes && size) ||
                defaultFontSizeKey;
            const numericSize = (!fontSizes && size) || defaultFontSize;
            const fontSize = fontSizes
                ? fontSizes[sizeKey]
                : numericSize;
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
            let fontStyle = isItalic || italic ? 'italic' : 'normal';
            fontStyle = italic === false ? 'normal' : fontStyle;
            // Bold
            let fontWeightStyle = isBold || bold ? 'bold' : 'normal';
            fontWeightStyle =
                fontWeight && fontWeight !== undefined ? fontWeight : fontWeightStyle;
            fontWeightStyle = bold === false ? 'normal' : fontWeightStyle;
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