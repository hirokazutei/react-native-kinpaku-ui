import {Themes, ThemePalette} from './theme/types';

type ThemeKey = 'test';

type ThemeObject = Record<ThemeKey, ThemePalette>;

const themes: Themes<ThemeObject> = {
  test: {
    primary: 'yellow',
    secondary: 'yellow',
    tertiary: 'yellow',
    disabled: 'black',
    background: 'white',
    text: 'black',
  },
  default: {
    primary: '#88EEBB',
    secondary: '#55AADD',
    tertiary: '#116688',
    disabled: '#CCDDDD',
    background: '#FEFFFF',
    text: '#111122',
  },
};

export default themes;
