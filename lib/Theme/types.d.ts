import { AddDefaultToObject, Color } from '../types';
declare type ThemePalette = {
    primary: Color;
    secondary: Color;
    tertiary: Color;
    disabled: Color;
    background: Color;
    text: Color;
};
declare type Themes<ThemeObject> = {
    [ThemesKey in keyof AddDefaultToObject<ThemeObject, ThemePalette>]: ThemePalette;
};
export { Themes, ThemePalette };
//# sourceMappingURL=types.d.ts.map