import { TextStyle } from 'react-native';
import { Color, DefaultObject } from '../../types';
import { ThemePalette } from '../../Theme/types';
declare type FontSizeProps<FontSizes> = {
    [key in keyof FontSizes]: number;
};
declare type TextVariationProps<FontSizes, Themes, AdditionalPalettes> = {
    allowBold?: boolean;
    allowItalic?: boolean;
    allowLineThrough?: boolean;
    allowUnderline?: boolean;
    defaultColor?: keyof (Themes & AdditionalPalettes);
    defaultFontSize?: FontSizes extends null | undefined ? NonNullable<number> : never;
    fontFamily?: string;
    fontSizes?: FontSizes extends null | undefined ? never : NonNullable<FontSizeProps<FontSizes>>;
    fontWeight?: TextStyle['fontWeight'];
    isBold?: boolean;
    isItalic?: boolean;
    letterSpacing?: number;
    lineHeight?: number;
};
declare type TextFactoryProps<Themes, AdditionalPalettes, TextVariations, FontSizes> = {
    themes: {
        [ThemeKey in keyof (Themes & DefaultObject<ThemePalette>)]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
    };
    defaultFontSizeKey: FontSizes extends null | undefined ? never : keyof FontSizes;
    textVariations: {
        [VariationKeys in keyof TextVariations]: TextVariationProps<FontSizes, Themes, AdditionalPalettes>;
    };
};
declare type TextProps<Themes, AdditionalPalettes, FontSizes, AllowBold, AllowItalic, AllowStrikeThrough, AllowUnderline> = {
    align?: TextStyle['textAlign'];
    bold?: AllowBold extends true ? boolean : never;
    color?: keyof (Themes & AdditionalPalettes);
    children: string;
    italic?: AllowItalic extends true ? boolean : never;
    size?: FontSizes extends null | undefined ? number : keyof FontSizes;
    lineThrough?: AllowStrikeThrough extends true ? boolean : never;
    underline?: AllowUnderline extends true ? boolean : never;
};
export { FontSizeProps, TextVariationProps, TextFactoryProps, TextProps };
//# sourceMappingURL=types.d.ts.map