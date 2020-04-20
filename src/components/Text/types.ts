import {TextProps as RNTextProps, TextStyle} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalExistCondition,
  OptionalTrueCondition,
  RequiredIfSpecified,
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
  EmphasisToggleable,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps
> = {
  themes: {
    [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette
  };
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    {[AdditionalPaletteKeys in keyof AdditionalPalettes]: Color}
  >;
  defaultFontSizeKey?: OptionalExistCondition<
    FontSize,
    undefined | FontSize,
    undefined
  >;
  textVariation?: RequiredIfSpecified<TextVariation, TextVariation>;
};

type TextProps<
  AdditionalPalettes,
  FontSize,
  EmphasisToggleable,
  AllowCustomProps
> = {
  _customTextProps?: OptionalTrueCondition<
    AllowCustomProps,
    RNTextProps,
    never
  >;
  _customTextStyle?: OptionalTrueCondition<AllowCustomProps, TextStyle, never>;
  align?: TextStyle['textAlign'];
  bold?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
  color?: keyof (ThemePalette & AdditionalPalettes);
  children: string;
  ellipsizeMode?: RNTextProps['ellipsizeMode'];
  italic?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
  lineThrough?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
  numberOfLines?: number;
  size?: OptionalExistCondition<FontSize, FontSize, number>;
  underline?: OptionalTrueCondition<EmphasisToggleable, boolean, never>;
};

export {TextSizeProps, TextVariationProps, TextFactoryProps, TextProps};
