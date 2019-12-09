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
  CustomInputVariations extends string | string
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
  >]: React.FunctionComponent<Props<AdditionalPalettes>>;
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const inputFields: {
    [key in OptionalExistCondition<
      typeof customInputVariations,
      InputVariations,
      CustomInputVariations
    >]?: React.FunctionComponent<Props<AdditionalPalettes>>;
  } = {};

  const variations = customInputVariations
    ? (customInputVariations as {
        [Variation in CustomInputVariations]: InputFieldVariationProps;
      })
    : INPUT_VARIATION_DEFAULT_SETTINGS;

  for (const key in variations) {
    if (variations.hasOwnProperty(key)) {
      const InputField: React.FunctionComponent<Props<AdditionalPalettes>> = ({
        autoFocus,
        backgroundColor,
        color,
        defaultValue,
        disabled,
        maxLength,
        onBlur,
        onChange,
        onEndEditing,
        onFocus,
        onKeyPress,
        placeholder,
        textColor,
        value,
      }: Props<AdditionalPalettes>): React.ReactElement => {
        // Palettes
        const currentThemeKey =
          useContext(themeContext) || ('default' as UnionDefaultKey<Themes>);
        const currentTheme =
          themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];

        // variation ->
        // Color
        // Shape
        // FontSize

        // AllTextStyles are supported
        const autoFocusProp = autoFocus ? {autoFocus} : {};
        const defaultValueProp = defaultValue ? {defaultValue} : {};
        const editableProp = disabled ? {editable: !disabled} : {};
        const maxLengthProp = maxLength ? {maxLength} : {};
        const onBlurProp = onBlur ? {onBlur} : {};
        const onChangeProp = onChange ? {onChange} : {};
        const onEndEditingProp = onEndEditing ? {onEndEditing} : {};
        const onFocusProp = onFocus ? {onFocus} : {};
        const onKeyPressProp = onKeyPress ? {onKeyPress} : {};
        const placeholderProp = placeholder ? {placeholder} : {};
        const valueProp = value ? {value} : {};

        // TextInputProps
        const textInputProps = {
          ...autoFocusProp,
          defaultValueProp,
          editableProp,
          maxLengthProp,
          onBlurProp,
          onChangeProp,
          onEndEditingProp,
          onFocusProp,
          onKeyPressProp,
          placeholderProp,
          valueProp,
        };

        return <TextInput {...textInputProps} />;
      };
      inputFields[
        key as OptionalExistCondition<
          typeof customInputVariations,
          InputVariations,
          CustomInputVariations
        >
      ] = InputField;
    }
  }

  return inputFields;
}

export default InputFieldFactory;
