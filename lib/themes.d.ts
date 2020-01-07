import { Themes, ThemePalette } from './theme/types';
declare type ThemeKey = 'test';
declare type ThemeObject = {
    [key in ThemeKey]: ThemePalette;
};
declare const themes: Themes<ThemeObject>;
export default themes;
//# sourceMappingURL=themes.d.ts.map