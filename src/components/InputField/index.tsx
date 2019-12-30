import React, {useContext} from 'react';
import {TextInput, View, ViewStyle} from 'react-native';
import {
  InputFieldFactoryProps,
  InputFieldProps as Props,
  InputFieldShapes,
  InputFieldSizeProps,
  InputFieldTypes,
  InputFieldVariationProps,
} from './types';
import {
  DEFAULT_BORDER_WIDTH,
  INPUT_VARIATION_DEFAULT_SETTINGS,
  InputVariations,
  InputFieldSizes,
} from './constants';
import {
  UnionDefaultKey,
  OptionalExistCondition,
  AddDefaultToObject,
} from '../../types';
import {colorResolverFactory} from '../../helper';

function inputFieldFactory<Themes, AdditionalPalettes, InputFieldSizes>({
  themes,
  additionalPalettes,
  sizes,
  inputFieldType = 'Underline',
  defaultShape = 'Sharp',
  highlightOnFocus = true,
}: InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSizes>): {
  [key in InputVariations]: React.FunctionComponent<Props<AdditionalPalettes>>;
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const inputFields: {
    [key in InputVariations]?: React.FunctionComponent<
      Props<AdditionalPalettes>
    >;
  } = {};

  const variations = INPUT_VARIATION_DEFAULT_SETTINGS;

  for (const key in variations) {
    if (variations.hasOwnProperty(key)) {
      const InputField: React.FunctionComponent<Props<AdditionalPalettes>> = ({
        autoFocus,
        backgroundColor,
        borderColor,
        defaultValue,
        isDisabled,
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
        const colorResolver = colorResolverFactory<AdditionalPalettes>({
          currentTheme,
          additionalPalettes,
        });
        // variation ->

        // Type
        const isOutline = inputFieldType === 'Outline';
        const isFill = inputFieldType === 'Fill';
        const isUnderline = inputFieldType === 'Underline';
        const isUnderlinedFill = inputFieldType === 'UnderlinedFill';

        // Set-Up Color
        const primaryBackgroundColor = colorResolver({
          color: backgroundColor,
          defaultColor: currentTheme.background,
        });
        const textPrimaryColor = colorResolver({
          color: textColor,
          defaultColor: currentTheme.primary,
        });
        const primaryBorderColor = colorResolver({
          color: borderColor,
          defaultColor: currentTheme.primary,
        });

        // borderWidth
        const borderWidth = 2 || DEFAULT_BORDER_WIDTH; // Kaz

        // Color
        const backgroundColorProp =
          isFill || isUnderlinedFill
            ? {backgroundColor: primaryBackgroundColor}
            : {};

        // Border
        const borderWidthProp = isOutline ? {borderWidth: borderWidth} : {};
        const borderColorProp = !isFill
          ? {borderColor: primaryBorderColor}
          : {};
        const borderBottomWidthProp =
          isUnderline || isUnderlinedFill
            ? {borderBottomWidth: borderWidth}
            : {};

        // Font
        const fontColorProp = isDisabled
          ? {color: currentTheme.text}
          : {color: textPrimaryColor};

        // Shape
        // FontSize

        // WrappedStyle
        const wrapperStyleProps = {
          flexDirection: 'row' as ViewStyle['flexDirection'],
          ...(isDisabled
            ? {borderColor: currentTheme.disabled}
            : borderColorProp),
          ...(isDisabled
            ? {backgroundColor: currentTheme.disabled}
            : backgroundColorProp),
          ...borderWidthProp, // Add that to set-up
          ...borderBottomWidthProp,
        };

        // FieldStyle
        const fieldStyleProps = {
          flex: 1,
          height: 40,
        };

        // AllTextStyles are supported
        const autoFocusProp = autoFocus ? {autoFocus} : {};
        const defaultValueProp = defaultValue ? {defaultValue} : {};
        const editableProp = isDisabled ? {editable: !isDisabled} : {};
        const selectTextOnFocus = highlightOnFocus
          ? {selectTextOnFocus: highlightOnFocus}
          : {};
        const maxLengthProp = maxLength ? {maxLength} : {};
        const onBlurProp = onBlur ? {onBlur} : {};
        const onChangeProp = onChange ? {onChange} : {};
        const onEndEditingProp = onEndEditing ? {onEndEditing} : {};
        const onFocusProp = onFocus ? {onFocus} : {};
        const onKeyPressProp = onKeyPress ? {onKeyPress} : {};
        const placeholderProp = placeholder ? {placeholder} : {};
        const valueProp = value ? {value} : {};

        return (
          <View style={wrapperStyleProps}>
            <TextInput
              style={fieldStyleProps}
              {...{
                ...autoFocusProp,
                ...defaultValueProp,
                ...editableProp,
                ...fontColorProp,
                ...selectTextOnFocus,
                ...maxLengthProp,
                ...onBlurProp,
                ...onChangeProp,
                ...onEndEditingProp,
                ...onFocusProp,
                ...onKeyPressProp,
                ...placeholderProp,
                ...valueProp,
              }}
            />
          </View>
        );
      };
      inputFields[key as InputVariations] = InputField;
    }
  }

  return inputFields as {
    [key in InputVariations]: React.FunctionComponent<
      Props<AdditionalPalettes>
    >;
  };
}

export default inputFieldFactory;
