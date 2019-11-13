import {DefaultObject, Color} from '../types';

type Themes<ThemeObject> = {
  [ThemesKey in ThemeObject & keyof DefaultObject<ThemePalette>]: ThemePalette;
};

type ThemePalette = {
  primary: Color;
  secondary: Color;
  tertiary: Color;
  disabled: Color;
  background: Color;
  text: Color;
};

export {Themes, ThemePalette};
