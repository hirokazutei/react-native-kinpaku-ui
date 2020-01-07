import {TextStyle, TextProps as ReactNativeTextProps} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalTrueCondition,
  OptionalExistCondition,
} from '../../types';
import {ThemePalette} from '../../theme/themeTypes';

type TextSizeProps<FontSizes extends string | string> = {
  [key in FontSizes]: number;
};

type TextVariationProps<FontSizes, AdditionalPalettes> = {
  allowFontScaling?: boolean;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultFontSize?: OptionalExistCondition<
    FontSizes,
    NonNullable<number>,
    undefined
  >;
  fontFamily?: string;
  fontSizes?: FontSizes extends string | string
    ? NonNullable<TextSizeProps<FontSizes>>
    : never;
  fontWeight?: TextStyle['fontWeight'];
  isBold?: boolean;
  isItalic?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  maxFontSizeMultiplier?: number;
  minimumFontScale?: number;
};

type TextFactoryProps<
  Themes,
  AdditionalPalettes,
  TextVariations,
  FontSizes,
  //@ts-ignore: TS6133 Unused Variable
  EmphasisToggleable
> = {
  themes: {
    [ThemeKey in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKey in keyof AddDefaultToObject<
      AdditionalPalettes,
      Color
    >]: Color;
  };
  defaultFontSizeKey?: OptionalExistCondition<FontSizes, never, FontSizes>;
  textVariations?: {
    [VariationKeys in keyof TextVariations]: TextVariationProps<
      OptionalExistCondition<FontSizes, never, FontSizes>,
      AdditionalPalettes
    >;
  };
};

type TextProps<AdditionalPalettes, FontSizes, EmphasisToggleable> = {
  align?: TextStyle['textAlign'];
  bold?: OptionalTrueCondition<EmphasisToggleable, never, boolean>;
  color?: keyof (ThemePalette & AdditionalPalettes);
  children: string;
  ellipsizeMode?: ReactNativeTextProps['ellipsizeMode'];
  italic?: OptionalTrueCondition<EmphasisToggleable, never, boolean>;
  numberOfLines?: number;
  size?: OptionalExistCondition<FontSizes, number, FontSizes>;
  lineThrough?: OptionalTrueCondition<EmphasisToggleable, never, boolean>;
  underline?: OptionalTrueCondition<EmphasisToggleable, never, boolean>;
};

export {TextSizeProps, TextVariationProps, TextFactoryProps, TextProps};
