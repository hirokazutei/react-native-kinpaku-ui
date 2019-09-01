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

export { Color, DefaultObject, ThemePalette };

// Palette
