type All = {
  padding: number;
  paddingHorizontal?: never;
  paddingVertical?: never;
  paddingTop?: never;
  paddingRight?: never;
  paddingBottom?: never;
  paddingLeft?: never;
};

type VerHor = {
  padding?: never;
  paddingHorizontal: number;
  paddingVertical: number;
  paddingTop?: never;
  paddingRight?: never;
  paddingBottom?: never;
  paddingLeft?: never;
};

type Horizontal = {
  padding?: never;
  paddingHorizontal: number;
  paddingVertical?: never;
  paddingTop?: number;
  paddingRight?: never;
  paddingBottom?: number;
  paddingLeft?: never;
};

type Vertical = {
  padding?: never;
  paddingHorizontal?: never;
  paddingVertical: number;
  paddingTop?: never;
  paddingRight?: number;
  paddingBottom?: never;
  paddingLeft?: number;
};

type Other = {
  padding?: never;
  paddingHorizontal?: never;
  paddingVertical?: never;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
};

type PaddingSpacing = All | VerHor | Horizontal | Vertical | Other;

export {PaddingSpacing};
