import { Color, UnionDefaultKey } from '../types';
declare type ThemePalette = {
    primary: Color;
    secondary: Color;
    tertiary: Color;
    disabled: Color;
    background: Color;
    text: Color;
};
declare type Themes<ThemeObject> = Record<UnionDefaultKey<keyof ThemeObject>, ThemePalette>;
declare type GenericTheme = Record<UnionDefaultKey<string | string>, ThemePalette>;
declare type DefaultTheme = Record<'default', ThemePalette>;
declare type GenericAdditionalPalette = Record<string, Color>;
export { GenericAdditionalPalette, DefaultTheme, GenericTheme, Themes, ThemePalette, };
//# sourceMappingURL=types.d.ts.map