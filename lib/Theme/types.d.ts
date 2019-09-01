import { DefaultObject, ThemePalette } from "../types";
declare type Themes<ThemeObject> = {
    [ThemesKey in keyof (ThemeObject & DefaultObject<ThemePalette>)]: ThemePalette;
};
export { Themes };
//# sourceMappingURL=types.d.ts.map