declare type All = {
    padding: number;
    paddingHorizontal?: never;
    paddingVertical?: never;
    paddingTop?: never;
    paddingRight?: never;
    paddingBottom?: never;
    paddingLeft?: never;
};
declare type VerHor = {
    padding?: never;
    paddingHorizontal: number;
    paddingVertical: number;
    paddingTop?: never;
    paddingRight?: never;
    paddingBottom?: never;
    paddingLeft?: never;
};
declare type Horizontal = {
    padding?: never;
    paddingHorizontal: number;
    paddingVertical?: never;
    paddingTop?: number;
    paddingRight?: never;
    paddingBottom?: number;
    paddingLeft?: never;
};
declare type Vertical = {
    padding?: never;
    paddingHorizontal?: never;
    paddingVertical: number;
    paddingTop?: never;
    paddingRight?: number;
    paddingBottom?: never;
    paddingLeft?: number;
};
declare type Other = {
    padding?: never;
    paddingHorizontal?: never;
    paddingVertical?: never;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
};
declare type PaddingSpacing = All | VerHor | Horizontal | Vertical | Other;
export { PaddingSpacing };
//# sourceMappingURL=spacing.d.ts.map