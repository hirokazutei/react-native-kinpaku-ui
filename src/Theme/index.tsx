import { Themes } from "./types";
import buttonFactory from "../Button";
import { ButtonSizeKeys } from "../Button/types";
import { ThemePalette } from "../types";

function UIFactory<ThemeObject>(themes: Themes<ThemeObject>) {
  const Button = buttonFactory<Themes<ThemeObject>, null, null>({ themes });
  return Button;
}

export { UIFactory };
