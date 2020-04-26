import {TextProps as RNTextProps, TextStyle} from 'react-native';
import {
  Color,
  OptionalExistCondition,
  OptionalTrueCondition,
  RequiredIfSpecified,
  UnionDefaultKey,
  NonExistent,
} from '../../types';
import {
  ThemePalette,
  GenericTheme,
  GenericAdditionalPalette,
} from '../../theme/types';

type TextSizeProps<FontSizeKey extends string | string> = Record<
  UnionDefaultKey<FontSizeKey>,
  number
>;

type TextVariationProps<FontSizeKey, AdditionalPalettes> = {
  allowFontScaling?: boolean;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  fontFamily?: string;
  fontSize: FontSizeKey extends string | string
    ? TextSizeProps<FontSizeKey>
    : number;
  fontWeight?: TextStyle['fontWeight'];
  fontBoldWeight?: TextStyle['fontWeight'];
  isBold?: boolean;
  isItalic?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  maxFontSizeMultiplier?: number;
  minimumFontScale?: number;
};

type TextFactoryProps<
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  TextVariation extends
    | Record<
        string | string,
        TextVariationProps<FontSizeKey | null, AdditionalPalettes | null>
      >
    | NonExistent,
  //@ts-ignore: TS6133 Unused Variable
  FontSizeKey extends string | string | NonExistent,
  //@ts-ignore: TS6133 Unused Variable
  EmphasisToggleable extends boolean | NonExistent,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps extends boolean | NonExistent
> = {
  themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>;
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    Record<keyof AdditionalPalettes, Color>
  >;
  variation?: RequiredIfSpecified<TextVariation, TextVariation>;
};

type TextProps<
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  FontSizeKey extends string | string | NonExistent,
  EmphasisToggleable extends boolean | NonExistent,
  AllowCustomProps extends boolean | NonExistent
> = {
  _customTextProps?: OptionalTrueCondition<
    AllowCustomProps,
    RNTextProps,
    never
  >;
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
  size?: OptionalExistCondition<FontSizeKey, FontSizeKey, number>;
};

export {TextSizeProps, TextVariationProps, TextFactoryProps, TextProps};
