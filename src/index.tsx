import {Themes} from './Theme/types';
import buttonFactory from './components/Button';
import {DEFAULT_BUTTON_SIZES} from './components/Button/constants';

type ButtonSizes = typeof DEFAULT_BUTTON_SIZES;

function UIFactory<ThemeObject>(themes: Themes<ThemeObject>) {
  const Button = buttonFactory<Themes<ThemeObject>, null, ButtonSizes>({
    themes,
    buttonSizes: DEFAULT_BUTTON_SIZES,
  }); // Button Sizes
  return Button;
}

export {UIFactory};
