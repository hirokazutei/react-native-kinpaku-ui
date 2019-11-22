import {Themes} from './Theme/types';
import buttonFactory from './components/Button';
import touchableFactory from './components/Touchable';
import radioButtonFactory from './components/RadioButton';
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
    null,
    false
  >({
    ...commonProps,
  });
  const RadioButton = radioButtonFactory<
    Themes<ThemeObject>,
    AdditionalPalettes,
    null,
    false
  >({
    ...commonProps,
  });
  const Touchable = touchableFactory<
    Themes<ThemeObject>,
    AdditionalPalettes,
    null,
    false
  >({
    ...commonProps,
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
