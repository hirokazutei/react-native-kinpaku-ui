import UIFactory from './uiFactory';
import {Themes, ThemePalette} from './theme/types';
// Button
import buttonFactory from './components/Button';
import {
  ButtonProps,
  ButtonShapeVariation,
  ButtonSizeProps,
  ButtonType,
  ButtonFactoryProps,
} from './components/Button/types';
// CheckBox
import checkBoxFactory from './components/CheckBox';
import {
  CheckBoxProps,
  CheckBoxShapeVariation,
  CheckBoxSizeProps,
  CheckBoxType,
  CheckBoxFactoryProps,
} from './components/CheckBox/types';
// Input
import inputFieldFactory from './components/InputField';
import {
  InputFieldFactoryProps,
  InputFieldProps,
  InputFieldShape,
  InputFieldSizeProps,
  InputFieldType,
  InputFieldVariationProps,
  InputFieldVariation,
} from './components/InputField/types';
// Touchable
import touchableFactory from './components/Touchable';
import {
  TouchableTypeVariations,
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
  RadioButtonTypeVariation,
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
  ButtonType,
  ButtonShapeVariation,
  checkBoxFactory,
  CheckBoxProps,
  CheckBoxShapeVariation,
  CheckBoxSizeProps,
  CheckBoxType,
  CheckBoxFactoryProps,
  radioButtonFactory,
  InputFieldFactoryProps,
  InputFieldProps,
  InputFieldShape,
  InputFieldSizeProps,
  InputFieldType,
  InputFieldVariationProps,
  InputFieldVariation,
  inputFieldFactory,
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonTypeVariation,
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
  TouchableTypeVariations,
  TouchableVerHorSizeProps,
  UIFactory,
};
