import { DefaultObject, ThemePalette } from "../types";

type Themes<ThemeObject> = {
  [ThemesKey in keyof (ThemeObject &
    DefaultObject<ThemePalette>)]: ThemePalette;
};

export { Themes };
