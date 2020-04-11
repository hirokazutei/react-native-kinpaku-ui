import React, {useContext} from 'react';
import {TextInput, View, ViewStyle, TextStyle} from 'react-native';
import {
  InputFieldFactoryProps,
  InputFieldProps as Props,
  InputFieldSizeProps,
  InputFieldVariations,
} from './types';
import {
  DEFAULT_BORDER_WIDTH,
  DEFAULT_INPUT_FIELD_SIZE,
  DEFAULT_INPUT_VARIATION_SETTINGS,
} from './constants';
import {UnionDefaultKey, AddDefaultToObject} from '../../types';
import {colorResolverFactory} from '../../helper';

function inputFieldFactory<Themes, AdditionalPalettes, InputFieldSizes>({
  themes,
  additionalPalettes,
  sizes,
  defaultColor,
  inputFieldType = 'Outline',
  defaultShape = 'circular',
}: InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSizes>): {
  [key in InputFieldVariations]: React.FunctionComponent<
    Props<AdditionalPalettes, InputFieldSizes>
  >
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const inputFields: {
    [key in InputFieldVariations]?: React.FunctionComponent<
      Props<AdditionalPalettes, InputFieldSizes>
    >
  } = {};

  for (const key in DEFAULT_INPUT_VARIATION_SETTINGS) {
    if (DEFAULT_INPUT_VARIATION_SETTINGS.hasOwnProperty(key)) {
      const InputField: React.FunctionComponent<
        Props<AdditionalPalettes, InputFieldSizes>
      > = ({
        backgroundColor,
        borderColor,
        color = defaultColor,
        isDisabled,
        maxLength,
        size,
        shape,
        textColor,
        ...inputFieldProps
      }: Props<AdditionalPalettes, InputFieldSizes>): React.ReactElement<
        Props<AdditionalPalettes, InputFieldSizes>
      > => {
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

        // Shape
        const isRounded = shape
          ? shape === 'rounded'
          : defaultShape === 'rounded';
        const isCircular = shape
          ? shape === 'circular'
          : defaultShape === 'circular';

        // Type Color
        const defaultTextColor = isFill
          ? currentTheme.background
          : currentTheme.primary;

        // Set-Up Color
        const primaryBackgroundColor = colorResolver({
          color: backgroundColor,
          defaultColor: currentTheme.primary,
        });
        const primaryTextColor = colorResolver({
          color: textColor,
          defaultColor: defaultTextColor,
        });
        const primaryBorderColor = colorResolver({
          color: borderColor,
          defaultColor: currentTheme.primary,
        });

        // Size
        const sizeProp = sizes
          ? sizes[
              size as keyof AddDefaultToObject<
                InputFieldSizes,
                InputFieldSizeProps
              >
            ]
          : DEFAULT_INPUT_FIELD_SIZE;

        // Border Width
        const borderWidth = sizeProp.borderWidth
          ? sizeProp.borderWidth
          : DEFAULT_BORDER_WIDTH;

        // Padding
        const paddingProp = sizeProp.padding ? {padding: sizeProp.padding} : {};
        const paddingHorizontalProp = sizeProp.paddingHorizontal
          ? {padding: sizeProp.paddingHorizontal}
          : {};
        const paddingVerticalProp = sizeProp.paddingVertical
          ? {padding: sizeProp.paddingVertical}
          : {};

        // Border Radius
        const borderRadiusFontRatio = sizeProp.borderRadiusFontRatio
          ? sizeProp.borderRadiusFontRatio
          : 0.5;

        const staticBorderRadius = sizeProp.staticBorderRadius
          ? sizeProp.staticBorderRadius
          : false;

        const borderRadiusProp = (() => {
          if (staticBorderRadius) {
            return {borderRadius: staticBorderRadius};
          }
          if (isOutline || isFill) {
            if (isRounded) {
              const borderRadius = borderRadiusFontRatio * sizeProp.fontSize;
              return {borderRadius: borderRadius};
            } else if (isCircular) {
              const borderRadius = borderRadiusFontRatio
                ? borderRadiusFontRatio * 256 * sizeProp.fontSize
                : 256;
              return {borderRadius: borderRadius};
            }
          }
          return {borderRadius: 0};
        })();
        // Color
        const backgroundColorProp = isFill
          ? {backgroundColor: primaryBackgroundColor}
          : {};

        // Border
        const borderWidthProp = isOutline ? {borderWidth: borderWidth} : {};
        const borderColorProp = !isFill
          ? {borderColor: primaryBorderColor}
          : {};
        const borderBottomWidthProp = isUnderline
          ? {borderBottomWidth: borderWidth}
          : {};

        // Disabled
        const disabledColor = isFill
          ? currentTheme.background
          : currentTheme.disabled;
        const disabledBackground = isFill
          ? currentTheme.disabled
          : currentTheme.background;

        // Input Field Variation Props
        const {
          fontFamily,
          isBold,
          isItalic,
          leftIcon,
          letterSpacing,
          lineHeight,
          maxLength: defaultMaxLength,
          returnKeyType,
          rightIcon,
          textAlign,
          textContentType,
          ...inputFieldOptions
        } = DEFAULT_INPUT_VARIATION_SETTINGS[key as InputFieldVariations];

        // WrappedStyle
        const wrapperStyleProps = {
          flexDirection: 'row' as ViewStyle['flexDirection'],
          ...(isDisabled ? {borderColor: disabledColor} : borderColorProp),
          ...(isDisabled
            ? {backgroundColor: disabledBackground}
            : backgroundColorProp),
          ...borderWidthProp, // Add that to set-up
          ...borderBottomWidthProp,
          ...borderRadiusProp,
          ...paddingProp,
          ...paddingHorizontalProp,
          ...paddingVerticalProp,
        };

        // FieldStyle
        const fieldStyleProps = {
          flex: 1,
          ...(isBold ? {fontWeight: 'bold' as TextStyle['fontWeight']} : {}),
          ...(isItalic ? {fontStyle: 'italic' as TextStyle['fontStyle']} : {}),
          ...(fontFamily ? {fontFamily} : {}),
          ...(isDisabled ? {color: disabledColor} : {color: primaryTextColor}),
          ...(textAlign ? {textAlign} : {}),
          ...{fontSize: sizeProp.fontSize},
          ...(letterSpacing ? {letterSpacing} : {}),
          ...(lineHeight ? {lineHeight} : {}),
        };

        return (
          <View style={wrapperStyleProps}>
            {leftIcon}
            <TextInput
              style={fieldStyleProps}
              {...(isDisabled ? {editable: !isDisabled} : {})}
              {...(maxLength ? {maxLength} : defaultMaxLength)}
              {...inputFieldProps}
              {...inputFieldOptions}
            />
            {rightIcon}
          </View>
        );
      };
      inputFields[key as InputFieldVariations] = InputField;
    }
  }
  return inputFields as {
    [key in InputFieldVariations]: React.FunctionComponent<
      Props<AdditionalPalettes, InputFieldSizes>
    >
  };
}

export default inputFieldFactory;
