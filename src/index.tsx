import {Themes} from './Theme/types';
import buttonFactory from './components/Button';
import touchableFactory from './components/Touchable';
import {DEFAULT_BUTTON_SIZES} from './components/Button/constants';
import {DEFAULT_TOUCHABLE_SIZES} from './components/Touchable/constants';
import {TouchablePaddingKeys} from './components/Touchable/types';

type ButtonSizes = typeof DEFAULT_BUTTON_SIZES;

export default function UIFactory<ThemeObject>(themes: Themes<ThemeObject>) {
  const Button = buttonFactory<Themes<ThemeObject>, null, ButtonSizes>({
    themes,
    buttonSizes: DEFAULT_BUTTON_SIZES,
  }); // Button Sizes
  const Touchable = touchableFactory<
    Themes<ThemeObject>,
    null,
    TouchablePaddingKeys
  >({
    themes,
    touchablePaddingSizes: DEFAULT_TOUCHABLE_SIZES,
  });
  return {Button, Touchable};
}
