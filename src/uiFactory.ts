import {Themes} from './theme/types';
import buttonFactory from './components/Button';
import checkBoxFactory from './components/CheckBox';
import inputFieldFactory from './components/InputField';
import touchableFactory from './components/Touchable';
import radioButtonFactory from './components/RadioButton';
import textFactory from './components/Text';
import {Color, DefaultObject} from './types';

const UIFactory = <ThemeObject, AdditionalPalettes>(
  themes: Themes<ThemeObject>,
  additionalPalettes?: {
    [key in keyof (AdditionalPalettes & DefaultObject<Color>)]: Color
  },
) => {
  const commonProps = {themes, additionalPalettes};
  const Button = buttonFactory<
    Themes<ThemeObject>,
    AdditionalPalettes,
    null,
    false
  >({
    ...commonProps,
  });
  const CheckBox = checkBoxFactory<
    Themes<ThemeObject>,
    AdditionalPalettes,
    null,
    false
  >({
    themes,
  });
  const InputField = inputFieldFactory<
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
  const {Title, Heading, SubHeading, Body, Label, Quote} = textFactory<
    Themes<ThemeObject>,
    AdditionalPalettes,
    null,
    null,
    true,
    false
  >({
    ...commonProps,
  });
  return {
    Body,
    Button,
    Label,
    CheckBox,
    Heading,
    InputField,
    RadioButton,
    SubHeading,
    Title,
    Touchable,
    Quote,
  };
};

export default UIFactory;
