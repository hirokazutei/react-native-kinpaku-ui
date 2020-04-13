import {TextProps as ReactNativeTextProps, TextStyle} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalExistCondition,
  OptionalTrueCondition,
} from '../../types';
import {ThemePalette} from '../../theme/types';

type TextSizeProps<FontSize extends string | string> = {
  [key in FontSize]: number
};

type TextVariationProps<FontSize, AdditionalPalettes> = {
  allowFontScaling?: boolean;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultFontSize?: OptionalExistCondition<
    FontSize,
    undefined | keyof FontSize,
    NonNullable<number>
  >;
  fontFamily?: string;
  fontSize?: FontSize extends string | string
    ? NonNullable<TextSizeProps<FontSize>>
    : undefined;
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
  TextVariation,
  FontSize,
  //@ts-ignore: TS6133 Unused Variable
  EmphasisToggleable
> = {
  themes: {
    [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color
  };
  defaultFontSizeKey?: OptionalExistCondition<
    FontSize,
    undefined | keyof FontSize,
    undefined
  >;
  textVariation?: {
    [VariationKeys in keyof TextVariation]: TextVariationProps<
      OptionalExistCondition<FontSize, keyof FontSize, null>,
      AdditionalPalettes
    >
  };
};

type TextProps<AdditionalPalettes, FontSize, EmphasisToggleable> = {
  align?: TextStyle['textAlign'];
  bold?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
  color?: keyof (ThemePalette & AdditionalPalettes);
  children: string;
  ellipsizeMode?: ReactNativeTextProps['ellipsizeMode'];
  italic?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
  numberOfLines?: number;
  size?: OptionalExistCondition<FontSize, FontSize, number>;
  lineThrough?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
  underline?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
};

export {TextSizeProps, TextVariationProps, TextFactoryProps, TextProps};
