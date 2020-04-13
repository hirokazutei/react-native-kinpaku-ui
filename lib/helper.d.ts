declare const colorResolverFactory: <AdditionalPalettes>({ additionalPalettes, currentTheme, }: {
    additionalPalettes?: { [key in keyof AdditionalPalettes]: string; } | undefined;
    currentTheme: {
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        background: string;
        text: string;
    };
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