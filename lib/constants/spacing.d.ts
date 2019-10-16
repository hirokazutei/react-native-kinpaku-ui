declare type SpacingKeys = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'massive';
declare type Spacing = Readonly<{
    [key in SpacingKeys]: number;
}>;
declare const spacing: Spacing;
export { SpacingKeys, spacing };
//# sourceMappingURL=spacing.d.ts.map