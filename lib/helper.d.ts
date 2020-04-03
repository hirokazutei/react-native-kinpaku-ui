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
export { colorResolverFactory };
//# sourceMappingURL=helper.d.ts.map