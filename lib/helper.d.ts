declare const colorResolverFactory: <AdditionalPalettes>({ additionalPalettes, currentTheme, }: {
    additionalPalettes?: Record<keyof AdditionalPalettes, string> | undefined;
    currentTheme: Record<"primary" | "secondary" | "tertiary" | "disabled" | "background" | "text", string>;
}) => ({ color, defaultColor, }: {
    color?: keyof AdditionalPalettes | "primary" | "secondary" | "tertiary" | "disabled" | "background" | "text" | undefined;
    defaultColor: string;
}) => string;
declare const lightenColor: ({ color, percent, }: {
    color: number;
    percent: number;
}) => string;
export { colorResolverFactory, lightenColor };
//# sourceMappingURL=helper.d.ts.map