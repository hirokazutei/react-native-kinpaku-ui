import React, {useContext} from 'react';
import {TextInput, View, ViewStyle, TextStyle} from 'react-native';
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
  DEFAULT_INPUT_FIELD_SIZE,
  INPUT_VARIATION_DEFAULT_SETTINGS,
  InputVariations,
} from './constants';
import {UnionDefaultKey, AddDefaultToObject} from '../../types';
import {colorResolverFactory} from '../../helper';

function inputFieldFactory<Themes, AdditionalPalettes, InputFieldSizes>({
  themes,
  additionalPalettes,
  sizes,
  inputFieldType = 'Underline',
  defaultShape = 'sharp',
  highlightOnFocus = true,
}: InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSizes>): {
  [key in InputVariations]: React.FunctionComponent<
    Props<AdditionalPalettes, InputFieldSizes>
  >;
} {
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  const inputFields: {
    [key in InputVariations]?: React.FunctionComponent<
      Props<AdditionalPalettes, InputFieldSizes>
    >;
  } = {};

  const variations = INPUT_VARIATION_DEFAULT_SETTINGS;

  for (const key in variations) {
    if (variations.hasOwnProperty(key)) {
      const InputField: React.FunctionComponent<Props<
        AdditionalPalettes,
        InputFieldSizes
      >> = ({
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
        size,
        shape,
        textColor,
        value,
      }: Props<AdditionalPalettes, InputFieldSizes>): React.ReactElement => {
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

        // Shape
        const isRounded = shape
          ? shape === 'rounded'
          : defaultShape === 'rounded';
        const isCircular = shape
          ? shape === 'circular'
          : defaultShape === 'circular';
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

        // Font Size
        const fontSizeProp = {fontSize: sizeProp.fontSize};

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
            return staticBorderRadius;
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

        // Disabled
        const disabledColor =
          isFill || isUnderlinedFill
            ? currentTheme.background
            : currentTheme.disabled;
        const disabledBackground =
          isFill || isUnderlinedFill
            ? currentTheme.disabled
            : currentTheme.background;

        // Font
        const fontColorProp = isDisabled
          ? {color: disabledColor}
          : {color: textPrimaryColor};

        // Input Field Variation Props
        const variation = variations[key];
        const autoCapitalizeProp = variation.autoCapitalize
          ? {autoCapitalize: variation.autoCapitalize}
          : {};
        const autoCompleteTypeProp = variation.autoCompleteType
          ? {
              autoCompleteType: variation.autoCompleteType,
            }
          : {};
        const autoCorrectProp = variation.autoCorrect
          ? {autoCorrect: variation.autoCorrect}
          : {};

        const caretHiddenProp = variation.caretHidden
          ? {
              caretHidden: variation.caretHidden,
            }
          : {};
        const clearTextOnFocusProp = variation.clearTextOnFocus
          ? {
              clearTextOnFocus: variation.clearTextOnFocus,
            }
          : {};
        const dataDetectorTypesProp = variation.dataDetectorTypes
          ? {
              dataDetectorTypes: variation.dataDetectorTypes,
            }
          : {};
        const defaultMaxLength = variation.maxLength
          ? {
              maxLength: variation.maxLength,
            }
          : {};
        const keyboardTypeProp = variation.keyboardType
          ? {keyboardType: variation.keyboardType}
          : {};
        const leftIcon = variation.leftIcon;
        const multilineProp = variation.multiline
          ? {multiline: variation.multiline}
          : {};
        const returnKeyTypeProp = variation.returnKeyType
          ? {
              returnKeyType: variation.returnKeyType,
            }
          : {};
        const rightIcon = variation.rightIcon;
        const secureTextEntryProp = variation.secureTextEntry
          ? {
              secureTextEntry: variation.secureTextEntry,
            }
          : {};
        const selectTextOnFocusProp = variation.selectTextOnFocus
          ? {
              selectTextOnFocus: variation.selectTextOnFocus,
            }
          : {};
        const spellCheckProp = variation.spellCheck
          ? {
              spellCheck: variation.spellCheck,
            }
          : {};
        const textContentTypeProp = variation.textContentType
          ? {
              textContentType: variation.textContentType,
            }
          : {};
        const textAlignProp = variation.align
          ? {textAlign: variation.align}
          : {};
        const allowFontScalingProp = variation.allowFontScaling
          ? {
              allowFontScaling: variation.allowFontScaling,
            }
          : {};
        const fontFamilyProp = variation.fontFamily
          ? {fontFamily: variation.fontFamily}
          : {};
        const isBoldProp = variation.isBold
          ? {fontWeight: 'bold' as TextStyle['fontWeight']}
          : {};
        const isItalicProp = variation.isItalic
          ? {fontStyle: 'italic' as TextStyle['fontStyle']}
          : {};
        const letterSpacingProp = variation.letterSpacing
          ? {letterSpacing: variation.letterSpacing}
          : {};
        const lineHeightProp = variation.lineHeight
          ? {lineHeight: variation.lineHeight}
          : {};
        const maxFontSizeMultiplierProp = variation.maxFontSizeMultiplier
          ? {
              maxFontSizeMultiplier: variation.maxFontSizeMultiplier,
            }
          : {};
        const minimumFontScaleProp = variation.minimumFontScale
          ? {
              minimumFontScale: variation.minimumFontScale,
            }
          : {};

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
          ...isBoldProp,
          ...fontSizeProp,
        };

        // AllTextStyles are supported
        const autoFocusProp = autoFocus ? {autoFocus} : {};
        const defaultValueProp = defaultValue ? {defaultValue} : {};
        const editableProp = isDisabled ? {editable: !isDisabled} : {};
        const selectTextOnFocus = highlightOnFocus
          ? {selectTextOnFocus: highlightOnFocus}
          : {};
        const maxLengthProp = maxLength ? {maxLength} : defaultMaxLength;
        const onBlurProp = onBlur ? {onBlur} : {};
        const onChangeProp = onChange ? {onChange} : {};
        const onEndEditingProp = onEndEditing ? {onEndEditing} : {};
        const onFocusProp = onFocus ? {onFocus} : {};
        const onKeyPressProp = onKeyPress ? {onKeyPress} : {};
        const placeholderProp = placeholder ? {placeholder} : {};
        const valueProp = value ? {value} : {};

        // After you Implement the customizable ones, you can take out the icons since the default form doesn't have any
        return (
          <View style={wrapperStyleProps}>
            {leftIcon && leftIcon}
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
                ...autoCapitalizeProp,
                ...autoCompleteTypeProp,
                ...autoCorrectProp,
                ...caretHiddenProp,
                ...clearTextOnFocusProp,
                ...dataDetectorTypesProp,
                ...maxLengthProp,
                ...keyboardTypeProp,
                ...multilineProp,
                ...returnKeyTypeProp,
                ...secureTextEntryProp,
                ...selectTextOnFocusProp,
                ...spellCheckProp,
                ...textContentTypeProp,
                ...textAlignProp,
                ...allowFontScalingProp,
                ...fontFamilyProp,
                ...isBoldProp,
                ...isItalicProp,
                ...letterSpacingProp,
                ...lineHeightProp,
                ...maxFontSizeMultiplierProp,
                ...minimumFontScaleProp,
              }}
            />
            {rightIcon && rightIcon}
          </View>
        );
      };
      inputFields[key] = InputField;
    }
  }
  return inputFields as {
    [key in InputVariations]: React.FunctionComponent<
      Props<AdditionalPalettes, InputFieldSizes>
    >;
  };
}

export default inputFieldFactory;
