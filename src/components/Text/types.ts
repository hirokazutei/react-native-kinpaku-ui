import {TextStyle} from 'react-native';
import {Color, DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';

type FontSizeProps<FontSizes> = {[SizeKey in keyof FontSizes]: number};

type TextVariationProps<FontSizes> = {
  allowBold?: boolean;
  alloqItalic?: boolean;
  allowLineThrough?: boolean;
  allowUnderline?: boolean;
  allowNumericFontSize?: boolean;
  defaultFontSize: number;
  fontFamily?: string;
  fontSizes?: FontSizeProps<FontSizes>;
  fontWeight?: TextStyle['fontWeight'];
  isBold?: boolean;
  isItalic?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
};

type TextFactoryProps<Themes, AdditionalPalettes, TextVariations, FontSizes> = {
  themes: {
    [ThemeKey in keyof (Themes & DefaultObject<ThemePalette>)]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
  };
  textVariations: {
    [VariationKeys in keyof (TextVariations &
      DefaultObject<TextVariationProps<FontSizes>>)]: TextVariationProps<
      FontSizes
    >;
  };
};

type TextProps<
  AdditionalPalettes,
  FontSizes,
  AllowBold,
  AllowItalic,
  AllowStrikeThrough,
  AllowUnderline
> = {
  align?: TextStyle['textAlign'];
  bold?: AllowBold extends true ? boolean : never;
  color?: keyof (ThemePalette & DefaultObject<AdditionalPalettes>);
  children: string;
  italic?: AllowItalic extends true ? boolean : never;
  size?: keyof (FontSizes & DefaultObject<number>);
  strikeThrough?: AllowStrikeThrough extends true ? boolean : never;
  underline?: AllowUnderline extends true ? boolean : never;
};

export {TextVariationProps, TextFactoryProps, TextProps};
