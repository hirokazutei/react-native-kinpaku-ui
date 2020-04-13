import { TextProps as ReactNativeTextProps, TextStyle } from 'react-native';
import { AddDefaultToObject, Color, OptionalExistCondition, OptionalTrueCondition } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type TextSizeProps<FontSize extends string | string> = {
    [key in FontSize]: number;
};
declare type TextVariationProps<FontSize, AdditionalPalettes> = {
    allowFontScaling?: boolean;
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultFontSize?: OptionalExistCondition<FontSize, NonNullable<number>, undefined>;
    fontFamily?: string;
    fontSize?: FontSize extends string | string ? NonNullable<TextSizeProps<FontSize>> : undefined;
    fontWeight?: TextStyle['fontWeight'];
    isBold?: boolean;
    isItalic?: boolean;
    letterSpacing?: number;
    lineHeight?: number;
    maxFontSizeMultiplier?: number;
    minimumFontScale?: number;
};
declare type TextFactoryProps<Themes, AdditionalPalettes, TextVariation, FontSize, EmphasisToggleable> = {
    themes: {
        [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    defaultFontSizeKey?: OptionalExistCondition<FontSize, undefined, FontSize>;
    textVariation?: {
        [VariationKeys in keyof TextVariation]: TextVariationProps<OptionalExistCondition<FontSize, undefined, FontSize>, AdditionalPalettes>;
    };
};
declare type TextProps<AdditionalPalettes, FontSize, EmphasisToggleable> = {
    align?: TextStyle['textAlign'];
    bold?: OptionalTrueCondition<EmphasisToggleable, never, boolean>;
    color?: keyof (ThemePalette & AdditionalPalettes);
    children: string;
    ellipsizeMode?: ReactNativeTextProps['ellipsizeMode'];
    italic?: OptionalTrueCondition<EmphasisToggleable, never, boolean>;
    numberOfLines?: number;
    size?: OptionalExistCondition<FontSize, number, FontSize>;
    lineThrough?: OptionalTrueCondition<EmphasisToggleable, never, boolean>;
    underline?: OptionalTrueCondition<EmphasisToggleable, never, boolean>;
};
export { TextSizeProps, TextVariationProps, TextFactoryProps, TextProps };
//# sourceMappingURL=types.d.ts.map