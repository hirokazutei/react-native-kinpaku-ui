import { DefaultObject, Color } from '../types';
declare type Themes<ThemeObject> = {
    [ThemesKey in keyof (ThemeObject & DefaultObject<ThemePalette>)]: ThemePalette;
};
declare type ThemePalette = {
    primary: Color;
    secondary: Color;
    tertiary: Color;
    disabled: Color;
    background: Color;
    text: Color;
};
export { Themes, ThemePalette };
//# sourceMappingURL=types.d.ts.map