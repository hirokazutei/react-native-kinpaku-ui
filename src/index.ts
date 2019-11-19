import UIFactory from './uiFactory';
import {Themes, ThemePalette} from './Theme/types';
// Buttons
import buttonFactory from './components/Button';
import {
  ButtonProps,
  ButtonVariations,
  ButtonSizeProps,
  ButtonTypes,
  ButtonFactoryProps,
} from './components/Button/types';
// Touchable
import touchableFactory from './components/Touchable';
import {
  TouchableTypes,
  TouchableProps,
  TouchableSizeProps,
  TouchableFactoryProps,
  TouchableVerHorSizeProps,
  TouchableAllSizeProps,
} from './components/Touchable/types';
// RadioButton
import radioButtonFactory from './components/RadioButton';
import {
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonVariations,
} from './components/RadioButton/types';
// Text
import textFactory from './components/Text';
import {
  TextSizeProps,
  TextVariationProps,
  TextFactoryProps,
  TextProps,
} from './components/Text/types';

export {
  buttonFactory,
  ButtonFactoryProps,
  ButtonProps,
  ButtonSizeProps,
  ButtonTypes,
  ButtonVariations,
  radioButtonFactory,
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonVariations,
  ThemePalette,
  Themes,
  textFactory,
  TextFactoryProps,
  TextProps,
  TextSizeProps,
  TextVariationProps,
  TouchableAllSizeProps,
  touchableFactory,
  TouchableFactoryProps,
  TouchableProps,
  TouchableSizeProps,
  TouchableTypes,
  TouchableVerHorSizeProps,
  UIFactory,
};
