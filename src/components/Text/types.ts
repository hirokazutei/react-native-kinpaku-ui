import {TextStyle} from 'react-native';
import {Color, DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';

type FontSizeProps<FontSizes extends string | string> = {
  [key in FontSizes]: number;
};

type TextVariationProps<
  FontSizes extends string | string,
  Themes,
  AdditionalPalettes
> = {
  defaultColor?: keyof (Themes & AdditionalPalettes);
  defaultFontSize?: FontSizes extends null | undefined
    ? NonNullable<number>
    : never;
  fontFamily?: string;
  fontSizes?: FontSizes extends null | undefined
    ? never
    : NonNullable<FontSizeProps<FontSizes>>;
  fontWeight?: TextStyle['fontWeight'];
  isBold?: boolean;
  isItalic?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
};

type TextFactoryProps<
  Themes,
  AdditionalPalettes,
  TextVariations,
  FontSizes extends string | string,
  EmphasisToggleable
> = {
  themes: {
    [ThemeKey in keyof (Themes & DefaultObject<ThemePalette>)]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
  };
  defaultFontSizeKey: FontSizes extends null | undefined ? never : FontSizes;
  textVariations: {
    [VariationKeys in keyof TextVariations]: TextVariationProps<
      FontSizes,
      Themes,
      AdditionalPalettes
    >;
  };
  emphasisToggleable?: EmphasisToggleable extends true ? Required<true> : never;
};

type TextProps<Themes, AdditionalPalettes, FontSizes, EmphasisToggleable> = {
  align?: TextStyle['textAlign'];
  bold?: EmphasisToggleable extends true ? boolean : never;
  color?: keyof (Themes & AdditionalPalettes);
  children: string;
  italic?: EmphasisToggleable extends true ? boolean : never;
  size?: FontSizes extends null | undefined ? number : FontSizes;
  lineThrough?: EmphasisToggleable extends true ? boolean : never;
  underline?: EmphasisToggleable extends true ? boolean : never;
};

export {FontSizeProps, TextVariationProps, TextFactoryProps, TextProps};
