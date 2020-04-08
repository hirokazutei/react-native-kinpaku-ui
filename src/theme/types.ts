import {AddDefaultToObject, Color} from '../types';

type ThemePalette = {
  primary: Color;
  secondary: Color;
  tertiary: Color;
  disabled: Color;
  background: Color;
  text: Color;
};

type Themes<ThemeObject> = {
  [ThemesKey in keyof AddDefaultToObject<
    ThemeObject,
    ThemePalette
  >]: ThemePalette
};

export {Themes, ThemePalette};
