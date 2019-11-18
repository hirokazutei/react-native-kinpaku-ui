import {TextStyle} from 'react-native';
import {Color, DefaultObject, OptionalTrueCheck} from '../../types';
import {ThemePalette} from '../../Theme/types';

type TextSizeProps<FontSizes extends string | string> = {
  [key in FontSizes]: number;
};

type TextVariationProps<
  FontSizes extends string | string,
  AdditionalPalettes
> = {
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultFontSize?: FontSizes extends null | undefined
    ? NonNullable<number>
    : never;
  fontFamily?: string;
  fontSizes?: FontSizes extends null | undefined
    ? never
    : NonNullable<TextSizeProps<FontSizes>>;
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
  //@ts-ignore: TS6133 Unused Variable
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
      AdditionalPalettes
    >;
  };
};

type TextProps<AdditionalPalettes, FontSizes, EmphasisToggleable> = {
  align?: TextStyle['textAlign'];
  bold?: OptionalTrueCheck<EmphasisToggleable, boolean>;
  color?: keyof (ThemePalette & AdditionalPalettes);
  children: string;
  italic?: OptionalTrueCheck<EmphasisToggleable, boolean>;
  size?: FontSizes extends null | undefined ? number : FontSizes;
  lineThrough?: OptionalTrueCheck<EmphasisToggleable, boolean>;
  underline?: OptionalTrueCheck<EmphasisToggleable, boolean>;
};

export {TextSizeProps, TextVariationProps, TextFactoryProps, TextProps};
