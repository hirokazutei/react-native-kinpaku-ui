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
  DefaultTheme,
} from '../../theme/types';

type TextSizeProps<FontSizeKey extends string | string> = Record<
  UnionDefaultKey<FontSizeKey>,
  number
>;

type TextVariationProps<FontSizeKey = null, AdditionalPalettes = null> = {
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
  Themes extends GenericTheme = DefaultTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null,
  TextVariation extends
    | Record<
        string | string,
        TextVariationProps<FontSizeKey | null, AdditionalPalettes | null>
      >
    | NonExistent = null,
  //@ts-ignore: TS6133 Unused Variable
  FontSizeKey extends string | string | NonExistent = null,
  //@ts-ignore: TS6133 Unused Variable
  EmphasisDisabled extends boolean | NonExistent = false,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps extends boolean | NonExistent = false
> = {
  themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>;
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    Record<keyof AdditionalPalettes, Color>
  >;
  variation?: RequiredIfSpecified<TextVariation>;
};

type TextProps<
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null,
  FontSizeKey extends string | string | NonExistent = null,
  EmphasisDisabled extends boolean | NonExistent = false,
  AllowCustomProps extends boolean | NonExistent = false
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
  isBold?: OptionalTrueCondition<EmphasisDisabled, never, boolean>;
  isItalic?: OptionalTrueCondition<EmphasisDisabled, never, boolean>;
  isLinethrough?: OptionalTrueCondition<EmphasisDisabled, never, boolean>;
  isUnderline?: OptionalTrueCondition<EmphasisDisabled, never, boolean>;
  numberOfLines?: number;
  size?: OptionalExistCondition<FontSizeKey, FontSizeKey, number>;
};

export {TextSizeProps, TextVariationProps, TextFactoryProps, TextProps};
