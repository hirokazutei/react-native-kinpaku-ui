import React, {useContext} from 'react';
import {
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  FlexAlignType,
} from 'react-native';
import {
  UnionDefaultKey,
  OptionalExistCondition,
  NonExistent,
} from '../../types';
import {colorResolverFactory} from '../../helper';
import {
  InputFieldFactoryProps,
  InputFieldProps as Props,
  InputFieldSizeProps,
  InputFieldVariation,
} from './types';
import {
  CIRCULAR,
  DEFAULT_INPUT_FIELD_BORDER_WIDTH,
  DEFAULT_INPUT_FIELD_SIZE,
  DEFAULT_INPUT_VARIATION_SETTING,
  ROUND,
  OUTLINE,
  UNDERLINE,
  FILL,
} from './constants';
import {
  GenericTheme,
  GenericAdditionalPalette,
  DefaultTheme,
} from '../../theme/types';

function inputFieldFactory<
  Themes extends GenericTheme = DefaultTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null,
  InputFieldSize extends
    | Record<string | string, InputFieldSizeProps>
    | NonExistent = null,
  AllowCustomProps extends boolean | NonExistent = false
>({
  themes,
  additionalPalettes,
  sizes,
  shape = ROUND,
  defaultColor,
  defaultType = OUTLINE,
}: InputFieldFactoryProps<
  Themes,
  AdditionalPalettes,
  InputFieldSize,
  AllowCustomProps
>): Record<
  InputFieldVariation,
  React.FunctionComponent<
    Props<
      AdditionalPalettes,
      OptionalExistCondition<
        InputFieldSize,
        InputFieldSize,
        typeof DEFAULT_INPUT_FIELD_SIZE
      >,
      AllowCustomProps
    >
  >
> {
  // Type
  type InputFieldProps = Props<
    AdditionalPalettes,
    OptionalExistCondition<
      InputFieldSize,
      InputFieldSize,
      typeof DEFAULT_INPUT_FIELD_SIZE
    >,
    AllowCustomProps
  >;

  // Context
  const themeContext: React.Context<keyof Themes> = React.createContext(
    'default' as keyof Themes,
  );

  // InputField Collections
  const inputFields: Partial<
    Record<InputFieldVariation, React.FunctionComponent<InputFieldProps>>
  > = {};

  // Creating each InputField Components
  for (const settingKey in DEFAULT_INPUT_VARIATION_SETTING) {
    if (DEFAULT_INPUT_VARIATION_SETTING.hasOwnProperty(settingKey)) {
      const InputField = ({
        _customTextInputProps,
        _customTextInputStyle,
        _customWrapperProps,
        _customWrapperStyle,
        backgroundColor,
        borderColor,
        color = defaultColor,
        isDisabled,
        leftItem,
        maxLength,
        rightItem,
        size = 'default',
        textColor,
        type = defaultType,
        ...inputFieldProps
      }: InputFieldProps) => {
        // Palettes
        const currentThemeKey =
          useContext(themeContext) || ('default' as UnionDefaultKey<Themes>);
        const currentTheme =
          themes[`${currentThemeKey}` as keyof UnionDefaultKey<Themes>];

        // Type
        const setType = type || defaultType;
        const isOutline = setType === OUTLINE;
        const isFill = setType === FILL;
        const isUnderline = setType === UNDERLINE;

        // Shape
        const isRound = shape === ROUND;
        const isCircular = shape === CIRCULAR;

        // Set-Up Color
        const colorResolver = colorResolverFactory<AdditionalPalettes>({
          currentTheme,
          additionalPalettes,
        });

        const defaultTextColor = isFill
          ? currentTheme.background
          : currentTheme.primary;
        const declaredTextColor = textColor || (isFill ? 'background' : color);

        const primaryBackgroundColor = colorResolver({
          color: backgroundColor || color,
          defaultColor: currentTheme.primary,
        });
        const primaryTextColor = colorResolver({
          color: declaredTextColor,
          defaultColor: defaultTextColor,
        });
        const primaryBorderColor = colorResolver({
          color: borderColor || color,
          defaultColor: currentTheme.primary,
        });

        // Size
        const sizeProp = sizes
          ? sizes[size as UnionDefaultKey<keyof InputFieldSize>]
          : DEFAULT_INPUT_FIELD_SIZE.default;

        // Border Width
        const borderWidth = sizeProp.borderWidth
          ? sizeProp.borderWidth
          : DEFAULT_INPUT_FIELD_BORDER_WIDTH;

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
            if (isRound) {
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
        const borderWidthProp = isOutline ? {borderWidth} : {};
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
          letterSpacing,
          lineHeight,
          maxLength: defaultMaxLength,
          returnKeyType,
          staticLeftItem,
          staticRightItem,
          textAlign,
          textContentType,
          ...inputFieldOptions
        } = DEFAULT_INPUT_VARIATION_SETTING[settingKey as InputFieldVariation];

        // WrappedStyle
        const wrapperStyleProps: ViewStyle = {
          alignItems: 'center' as FlexAlignType,
          flexDirection: 'row' as ViewStyle['flexDirection'],
          ...(isDisabled ? {borderColor: disabledColor} : borderColorProp),
          ...(isDisabled
            ? {backgroundColor: disabledBackground}
            : backgroundColorProp),
          ...borderWidthProp, // Add that to set-up
          ...borderBottomWidthProp,
          ...borderRadiusProp,
          ...(sizeProp.fieldSpacing ? sizeProp.fieldSpacing : {}),
          ...(_customWrapperStyle ? _customWrapperStyle : {}),
        };

        // FieldStyle
        const fieldStyleProps: TextStyle = {
          flex: 1,
          ...(sizeProp.textSpacing ? sizeProp.textSpacing : {}),
          ...(isBold ? {fontWeight: 'bold' as TextStyle['fontWeight']} : {}),
          ...(isItalic ? {fontStyle: 'italic' as TextStyle['fontStyle']} : {}),
          ...(fontFamily ? {fontFamily} : {}),
          ...(isDisabled ? {color: disabledColor} : {color: primaryTextColor}),
          ...(textAlign ? {textAlign} : {}),
          ...{fontSize: sizeProp.fontSize},
          ...(letterSpacing ? {letterSpacing} : {}),
          ...(lineHeight ? {lineHeight} : {}),
          ...(_customTextInputStyle ? _customTextInputStyle : {}),
        };

        // LeftItemViewStyle
        const leftItemViewStyle = {
          style: {
            ...(sizeProp.leftItemSpacing ? sizeProp.leftItemSpacing : {}),
          },
        };

        // RightItemViewStyle
        const rightItemViewStyle = {
          style: {
            ...(sizeProp.rightItemSpacing ? sizeProp.rightItemSpacing : {}),
          },
        };

        return (
          <View
            style={wrapperStyleProps}
            {...(_customWrapperProps ? _customWrapperProps : {})}>
            {!!(leftItem || staticLeftItem) && (
              <View {...leftItemViewStyle}>{leftItem || staticLeftItem}</View>
            )}
            <TextInput
              style={fieldStyleProps}
              {...(isDisabled ? {editable: !isDisabled} : {})}
              {...(maxLength ? {maxLength} : defaultMaxLength)}
              {...inputFieldProps}
              {...inputFieldOptions}
              {...(_customTextInputProps ? _customTextInputProps : {})}
            />
            {!!(rightItem || staticRightItem) && (
              <View {...rightItemViewStyle}>
                {rightItem || staticRightItem}
              </View>
            )}
          </View>
        );
      };
      inputFields[settingKey as InputFieldVariation] = InputField;
    }
  }
  return inputFields as Record<
    InputFieldVariation,
    React.FunctionComponent<InputFieldProps>
  >;
}

export default inputFieldFactory;
