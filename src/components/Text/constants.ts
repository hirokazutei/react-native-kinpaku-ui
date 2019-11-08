export type TextVariations =
  | 'Title'
  | 'SubTitle'
  | 'Heading'
  | 'Body'
  | 'Caption'
  | 'Quote';

export const textVariations = {
  Title: {},
};

/*
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
  letterSpacing?: number;
  lineHeight?: number;
};
*/
