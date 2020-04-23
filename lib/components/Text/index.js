import React, { useContext } from 'react';
import { Text as RNText } from 'react-native';
import { colorResolverFactory } from '../../helper';
import { DEFAULT_TEXT_VARIATION } from './constants';
function textFactory({ themes, additionalPalettes, variation, }) {
    // Context
    const themeContext = React.createContext('default');
    // Text Collections
    const texts = {};
    for (const variationName in variation
        ? variation
        : DEFAULT_TEXT_VARIATION) {
        if ((variation
            ? variation
            : DEFAULT_TEXT_VARIATION).hasOwnProperty(variationName)) {
            const Text = ({ _customTextProps, _customTextStyle, align, color, children, ellipsizeMode, isBold, isItalic, isLinethrough, isUnderline, numberOfLines, size, }) => {
                // Palettes
                const currentThemeKey = useContext(themeContext) || 'default';
                const currentTheme = themes[`${currentThemeKey}`];
                const colorResolver = colorResolverFactory({
                    currentTheme,
                    additionalPalettes,
                });
                // Text Settings
                const { allowFontScaling, defaultColor, fontFamily, fontSize, fontWeight = 'normal', fontBoldWeight = 'bold', isBold: boldTextSetting, isItalic: italicTextSetting, letterSpacing, lineHeight, maxFontSizeMultiplier, minimumFontScale, } = variation
                    ? variation[variationName]
                    : DEFAULT_TEXT_VARIATION[variationName];
                // Color
                const fontColor = colorResolver({
                    color,
                    defaultColor: colorResolver({
                        color: defaultColor,
                        defaultColor: currentTheme.text,
                    }),
                });
                // Size
                const textFontSize = (() => {
                    if (typeof fontSize == 'number') {
                        return size || fontSize;
                    }
                    else {
                        return size
                            ? fontSize[size]
                            : fontSize['default'];
                    }
                })();
                /*
                const sizeKey =
                  (fontSize && (size as keyof typeof fontSize | undefined)) ||
                  defaultFontSizeKey;
                const numericSize = (!fontSize && size) || defaultFontSize;
                const textFontSize = fontSize
                  ? (fontSize as {[SizeKey in keyof typeof fontSize]: number})[
                      sizeKey as keyof typeof fontSize
                    ]
                  : (numericSize as number);
        */
                // DecorationLine
                const textDecorationLine = (() => {
                    if (isUnderline && isLinethrough) {
                        return 'underline line-through';
                    }
                    else if (isUnderline) {
                        return 'underline';
                    }
                    else if (isLinethrough) {
                        return 'line-through';
                    }
                    else {
                        return 'none';
                    }
                })();
                // FontStyle
                const isTextItalic = typeof isItalic !== 'undefined' ? isItalic : italicTextSetting;
                const fontStyle = isTextItalic
                    ? 'italic'
                    : 'normal';
                // Bold
                const isTextBold = typeof isBold !== 'undefined' ? isBold : boldTextSetting;
                const fontWeightStyle = isTextBold
                    ? fontBoldWeight
                    : fontWeight;
                // Text Style
                const textStyle = Object.assign({ color: fontColor, fontFamily, fontSize: textFontSize, fontStyle, fontWeight: fontWeightStyle, letterSpacing,
                    lineHeight, textAlign: align, textDecorationLine }, _customTextStyle);
                // Text Props
                const textProps = Object.assign({ allowFontScaling,
                    ellipsizeMode,
                    maxFontSizeMultiplier,
                    minimumFontScale,
                    numberOfLines }, _customTextProps);
                return (<RNText style={textStyle} {...textProps}>
            {children}
          </RNText>);
            };
            texts[`${variationName}`] = Text;
        }
    }
    return texts;
}
export default textFactory;
//# sourceMappingURL=index.js.map