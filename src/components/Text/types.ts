import {TextStyle} from 'react-native';
import {Color, DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';

type FontSizeProps<FontSizes> = {[key in keyof FontSizes]: number};

type TextVariationProps<FontSizes, Themes, AdditionalPalettes> = {
  allowBold?: boolean;
  allowItalic?: boolean;
  allowLineThrough?: boolean;
  allowUnderline?: boolean;
  allowNumericFontSize?: boolean;
  defaultColor?: keyof (Themes & AdditionalPalettes);
  defaultFontSize: FontSizes extends null | undefined
    ? number
    : keyof FontSizes;
  fontFamily?: string;
  fontSizes: FontSizes extends null | undefined
    ? never
    : Required<FontSizeProps<FontSizes>>;
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
      DefaultObject<
        TextVariationProps<FontSizes, Themes, AdditionalPalettes>
      >)]: TextVariationProps<FontSizes, Themes, AdditionalPalettes>;
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

export {FontSizeProps, TextVariationProps, TextFactoryProps, TextProps};
