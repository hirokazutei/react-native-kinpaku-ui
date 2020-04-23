import { TextProps as RNTextProps, TextStyle } from 'react-native';
import { AddDefaultToObject, Color, OptionalExistCondition, OptionalTrueCondition, RequiredIfSpecified, UnionDefaultKey } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type TextSizeProps<FontSize> = {
    [key in keyof UnionDefaultKey<FontSize>]: number;
};
declare type TextVariationProps<FontSize, AdditionalPalettes> = {
    allowFontScaling?: boolean;
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    fontFamily?: string;
    fontSize: FontSize extends number ? number : NonNullable<TextSizeProps<FontSize>>;
    fontWeight?: TextStyle['fontWeight'];
    fontBoldWeight?: TextStyle['fontWeight'];
    isBold?: boolean;
    isItalic?: boolean;
    letterSpacing?: number;
    lineHeight?: number;
    maxFontSizeMultiplier?: number;
    minimumFontScale?: number;
};
declare type TextFactoryProps<Themes, AdditionalPalettes, TextVariation, FontSize, EmphasisToggleable, AllowCustomProps> = {
    themes: {
        [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    }>;
    variation?: RequiredIfSpecified<TextVariation, TextVariation>;
};
declare type TextProps<AdditionalPalettes, FontSize, EmphasisToggleable, AllowCustomProps> = {
    _customTextProps?: OptionalTrueCondition<AllowCustomProps, RNTextProps, never>;
    _customTextStyle?: OptionalTrueCondition<AllowCustomProps, TextStyle, never>;
    align?: TextStyle['textAlign'];
    color?: keyof (ThemePalette & AdditionalPalettes);
    children: string;
    ellipsizeMode?: RNTextProps['ellipsizeMode'];
    isBold?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
    isItalic?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
    isLinethrough?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
    isUnderline?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
    numberOfLines?: number;
    size?: OptionalExistCondition<FontSize, keyof FontSize, number>;
};
export { TextSizeProps, TextVariationProps, TextFactoryProps, TextProps };
//# sourceMappingURL=types.d.ts.map