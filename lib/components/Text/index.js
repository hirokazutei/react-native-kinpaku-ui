import React, { useContext } from 'react';
import { Text } from 'react-native';
import { colorResolverFactory } from '../../helper';
import { DEFAULT_TEXT_VARIATION } from './constants';
function textFactory({ themes, additionalPalettes, defaultFontSizeKey, textVariation, }) {
    const themeContext = React.createContext('default');
    const texts = {};
    for (const variationName in textVariation
        ? textVariation
        : DEFAULT_TEXT_VARIATION) {
        const { allowFontScaling, defaultColor, defaultFontSize, fontFamily, fontSize, fontWeight, isBold, isItalic, letterSpacing, lineHeight, maxFontSizeMultiplier, minimumFontScale, } = textVariation
            ? textVariation[variationName]
            : DEFAULT_TEXT_VARIATION[variationName];
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
            const sizeKey = (fontSize && size) ||
                defaultFontSizeKey;
            const numericSize = (!fontSize && size) || defaultFontSize;
            const textFontSize = fontSize
                ? fontSize[sizeKey]
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
                fontSize: textFontSize,
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
        texts[`${variationName}`] = text;
    }
    return texts;
}
export default textFactory;
//# sourceMappingURL=index.js.map