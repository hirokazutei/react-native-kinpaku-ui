import {Themes} from './Theme/types';

type ThemePalettes = 'test';

const themes: Themes<ThemePalettes> = {
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
