import { ThemePalette } from './theme/types';
declare function colorResolverFactory<AdditionalPalettes>({ additionalPalettes, currentTheme, }: {
    additionalPalettes?: {
        [key in keyof AdditionalPalettes]: string;
    };
    currentTheme: {
        [key in keyof ThemePalette]: string;
    };
}): ({ color, defaultColor, }: {
    color?: keyof AdditionalPalettes | "primary" | "secondary" | "tertiary" | "disabled" | "background" | "text" | undefined;
    defaultColor: string;
}) => string;
export { colorResolverFactory };
//# sourceMappingURL=helper.d.ts.map