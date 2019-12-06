import React, {useContext} from 'react';
import {TextInput} from 'react-native';
import {
  InputFieldFactoryProps,
  InputFieldProps as Props,
  InputFieldShapes,
  InputFieldSizeProps,
  InputFieldTypes,
  InputFieldVariationProps,
} from './types';
import {
  INPUT_VARIATION_DEFAULT_SETTINGS,
  InputVariations,
  InputFieldSizes,
} from './const';
import {
  UnionDefaultKey,
  OptionalExistCondition,
  AddDefaultToObject,
} from '../../types';

function InputFieldFactory<
  Themes,
  AdditionalPalettes,
  InputFieldSizes,
  CustomInputVariations extends string
>({
  themes,
  additionalPalettes,
  sizes,
  customInputVariations,
  inputFieldType = 'Underline',
  defaultShape = 'Sharp',
  highlightOnFocus = true,
}: InputFieldFactoryProps<
  Themes,
  AdditionalPalettes,
  InputFieldSizes,
  CustomInputVariations
>): {
  [key in OptionalExistCondition<
    typeof customInputVariations,
    InputVariations,
    CustomInputVariations
  >]: React.FunctionComponent<Props>;
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );
  const inputFields: {
    [key in OptionalExistCondition<
      typeof customInputVariations,
      InputVariations,
      CustomInputVariations
    >]?: React.FunctionComponent<Props>;
  } = {};

  for (const variation in customInputVariations
    ? (customInputVariations as {
        [Variation in CustomInputVariations]: InputFieldVariationProps;
      })
    : INPUT_VARIATION_DEFAULT_SETTINGS) {
    const InputField: {
      [key in OptionalExistCondition<
        typeof customInputVariations,
        InputVariations,
        CustomInputVariations
      >]?: React.FunctionComponent<Props>;
    } = ({
      autoFocus,
      defaultValue,
      disabled,
      maxLength,
      onBlur,
      onChange,
      onEndEditing,
      onFocus,
      onKeyPress,
      palceholder,
      value,
      ...props
    }: Props): React.ReactElement => {
      // Palettes
      const currentThemeKey =
        useContext(themeContext) || ('default' as UnionDefaultKey<Themes>);
      const currentTheme =
        themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];

      const textInputProps = {
        autoFocus,
        defaultValue,
        editable: disabled,
        maxLength,
        onBlur,
        onChange,
        onEndEditing,
        onFocus,
        onKeyPress,
        palceholder,
        value,
      };
      return <TextInput {...textInputProps} />;
    };
  }

  return inputFields;
}
