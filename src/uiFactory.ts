import {Themes} from './Theme/types';
import buttonFactory from './components/Button';
import touchableFactory from './components/Touchable';
import {DEFAULT_BUTTON_SIZES} from './components/Button/constants';
import {DEFAULT_TOUCHABLE_SIZES} from './components/Touchable/constants';

type TouchableSizes = typeof DEFAULT_TOUCHABLE_SIZES;

export default function UIFactory<ThemeObject>(themes: Themes<ThemeObject>) {
  const Button = buttonFactory<
    Themes<ThemeObject>,
    null,
    typeof DEFAULT_BUTTON_SIZES
  >({
    themes,
    sizes: DEFAULT_BUTTON_SIZES,
  }); // Button Sizes
  const Touchable = touchableFactory<Themes<ThemeObject>, null, TouchableSizes>(
    {
      themes,
      touchablePaddingSizes: DEFAULT_TOUCHABLE_SIZES,
    },
  );
  return {Button, Touchable};
}
