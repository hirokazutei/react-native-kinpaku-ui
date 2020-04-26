import UIFactory from './uiFactory';
import {
  GenericAdditionalPalette,
  GenericTheme,
  Themes,
  ThemePalette,
} from './theme/types';
// Button
import buttonFactory from './components/Button';
import {
  ButtonFactoryProps,
  ButtonProps,
  ButtonShapeVariation,
  ButtonSizeProps,
  ButtonType,
} from './components/Button/types';
// CheckBox
import checkBoxFactory from './components/CheckBox';
import {
  CheckBoxFactoryProps,
  CheckBoxProps,
  CheckBoxShapeVariation,
  CheckBoxSizeProps,
  CheckBoxType,
} from './components/CheckBox/types';
// Input
import inputFieldFactory from './components/InputField';
import {
  InputFieldFactoryProps,
  InputFieldProps,
  InputFieldShape,
  InputFieldSizeProps,
  InputFieldType,
  InputFieldVariation,
  InputFieldVariationProps,
} from './components/InputField/types';
// Touchable
import touchableFactory from './components/Touchable';
import {
  TouchableAllSizeProps,
  TouchableFactoryProps,
  TouchableProps,
  TouchableSizeProps,
  TouchableShapeVariation,
  TouchableVerHorSizeProps,
} from './components/Touchable/types';
// RadioButton
import radioButtonFactory from './components/RadioButton';
import {
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonShapeVariation,
} from './components/RadioButton/types';
// Text
import textFactory from './components/Text';
import {
  TextFactoryProps,
  TextProps,
  TextSizeProps,
  TextVariationProps,
} from './components/Text/types';

export {
  ButtonFactoryProps,
  ButtonProps,
  ButtonType,
  ButtonShapeVariation,
  ButtonSizeProps,
  buttonFactory,
  CheckBoxFactoryProps,
  CheckBoxProps,
  CheckBoxShapeVariation,
  CheckBoxSizeProps,
  CheckBoxType,
  checkBoxFactory,
  GenericAdditionalPalette,
  GenericTheme,
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
  RadioButtonShapeVariation,
  radioButtonFactory,
  ThemePalette,
  Themes,
  TextFactoryProps,
  TextProps,
  TextSizeProps,
  TextVariationProps,
  textFactory,
  TouchableAllSizeProps,
  TouchableFactoryProps,
  TouchableProps,
  TouchableSizeProps,
  TouchableShapeVariation,
  TouchableVerHorSizeProps,
  touchableFactory,
  UIFactory,
};
