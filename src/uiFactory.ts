import {Themes} from './Theme/types';
import buttonFactory from './components/Button';
import touchableFactory from './components/Touchable';
import {DEFAULT_BUTTON_SIZES} from './components/Button/constants';
import {DEFAULT_TOUCHABLE_SIZES} from './components/Touchable/constants';
import radioButtonFactory from './components/RadioButton';
import {DEFAULT_RADIO_BUTTON_SIZES} from './components/RadioButton/constants';
import textFactory from './components/Text';
import {DEFAULT_TEXT_VARIATIONS} from './components/Text/constants';
import {Color, DefaultObject} from './types';

export default function UIFactory<ThemeObject, AdditionalPalettes>(
  themes: Themes<ThemeObject>,
  additionalPalettes?: {
    [key in keyof (AdditionalPalettes & DefaultObject<Color>)]: Color;
  },
) {
  const commonProps = {themes, additionalPalettes};
  const Button = buttonFactory<
    Themes<ThemeObject>,
    AdditionalPalettes,
    typeof DEFAULT_BUTTON_SIZES,
    false
  >({
    ...commonProps,
    sizes: DEFAULT_BUTTON_SIZES,
  });
  const RadioButton = radioButtonFactory<
    Themes<ThemeObject>,
    AdditionalPalettes,
    null,
    false
  >({
    ...commonProps,
    sizes: DEFAULT_RADIO_BUTTON_SIZES,
  });
  const Touchable = touchableFactory<
    Themes<ThemeObject>,
    AdditionalPalettes,
    typeof DEFAULT_TOUCHABLE_SIZES,
    false
  >({
    ...commonProps,
    sizes: DEFAULT_TOUCHABLE_SIZES,
  });
  const {Title, Heading, SubHeading, Body, Caption, Quote} = textFactory<
    typeof themes,
    null,
    typeof DEFAULT_TEXT_VARIATIONS,
    null,
    true
  >({
    ...commonProps,
    textVariations: DEFAULT_TEXT_VARIATIONS,
  });
  return {
    Button,
    RadioButton,
    Touchable,
    Title,
    Heading,
    SubHeading,
    Body,
    Caption,
    Quote,
  };
}
