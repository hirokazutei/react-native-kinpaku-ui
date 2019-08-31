type Color = string;
type DefaultObject<Type> = { default: Type };

type ThemePalette = {
  primary: Color;
  secondary: Color;
  tertiary: Color;
  disabled: Color;
  background: Color;
  text: Color;
};

type Themes<Themes> = {
  [ThemesKey in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
};

export { Color, DefaultObject, ThemePalette };

// Palette
