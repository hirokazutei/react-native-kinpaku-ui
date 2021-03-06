import {
  GenericTheme,
  GenericAdditionalPalette,
  ThemePalette,
} from './theme/types';
import buttonFactory from './components/Button';
import checkBoxFactory from './components/CheckBox';
import inputFieldFactory from './components/InputField';
import touchableFactory from './components/Touchable';
import radioButtonFactory from './components/RadioButton';
import textFactory from './components/Text';
import {
  Color,
  RequiredIfSpecified,
  NonExistent,
  UnionDefaultKey,
} from './types';

const UIFactory = <
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent
>(
  themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>,
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    Required<Record<keyof AdditionalPalettes, Color>>
  >,
) => {
  const commonProps = {themes, additionalPalettes};
  const Button = buttonFactory<Themes, AdditionalPalettes>({
    ...commonProps,
  });
  const CheckBox = checkBoxFactory<Themes, AdditionalPalettes>({
    themes,
  });
  const InputField = inputFieldFactory<Themes, AdditionalPalettes>({
    ...commonProps,
  });
  const RadioButton = radioButtonFactory<Themes, AdditionalPalettes>({
    ...commonProps,
  });
  const Touchable = touchableFactory<Themes, AdditionalPalettes>({
    ...commonProps,
  });
  const {Title, Heading, SubHeading, Body, Label, Quote} = textFactory<
    Themes,
    AdditionalPalettes
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
