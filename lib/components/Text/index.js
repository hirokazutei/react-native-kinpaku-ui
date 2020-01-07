import React, { useContext } from 'react';
import { Text } from 'react-native';
import { DEFAULT_TEXT_VARIATIONS } from './constants';
import { colorResolverFactory } from '../../helper';
function textFactory({ themes, additionalPalettes, defaultFontSizeKey, textVariations, }) {
    const themeContext = React.createContext('default');
    const TextComponents = {};
    for (const variationName in textVariations
        ? textVariations
        : DEFAULT_TEXT_VARIATIONS) {
        const { allowFontScaling, defaultColor, defaultFontSize, fontFamily, fontSizes, fontWeight, isBold, isItalic, letterSpacing, lineHeight, maxFontSizeMultiplier, minimumFontScale, } = textVariations
            ? textVariations[variationName]
            : DEFAULT_TEXT_VARIATIONS[variationName];
        const text = ({ align, bold, color, children, ellipsizeMode, italic, numberOfLines, size, lineThrough, underline, }) => {
            // Palettes
            const currentThemeKey = useContext(themeContext) || 'default';
            const currentTheme = themes[`${currentThemeKey}`];
            const colorResolver = colorResolverFactory({
                currentTheme,
                additionalPalettes,
            });
            // Color
            const fontColor = colorResolver({
                color,
                defaultColor: colorResolver({
                    color: defaultColor,
                    defaultColor: currentTheme.text,
                }),
            });
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
            // Text Props
            const textProps = {
                allowFontScaling,
                ellipsizeMode,
                maxFontSizeMultiplier,
                minimumFontScale,
                numberOfLines,
            };
            return (<Text style={textStyle} {...textProps}>
          {children}
        </Text>);
        };
        TextComponents[`${variationName}`] = text;
    }
    return TextComponents;
}
export default textFactory;
//# sourceMappingURL=index.js.map