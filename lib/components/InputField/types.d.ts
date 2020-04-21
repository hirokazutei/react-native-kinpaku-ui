/// <reference types="react" />
import { TextStyle, TextInputProps, ViewProps, ViewStyle } from 'react-native';
import { AddDefaultToObject, Color, OptionalTrueCondition, RequiredIfSpecified } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type InputFieldVariation = 'creditCardNumber' | 'decimal' | 'email' | 'freeField' | 'name' | 'number' | 'oneTimeNumberCode' | 'oneTimeCode' | 'paragraph' | 'passcode' | 'password' | 'phone' | 'url' | 'username';
declare type InputFieldShape = 'sharp' | 'rounded' | 'circular';
declare type InputFieldType = 'underline' | 'outline' | 'fill';
declare type InputFieldSizeProps = {
    borderRadiusFontRatio?: number;
    borderWidth?: number;
    fontSize: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    padding?: number;
    staticBorderRadius?: number;
};
declare type InputFieldVariationProps = {
    autoCapitalize?: TextInputProps['autoCapitalize'];
    autoCompleteType?: TextInputProps['autoCompleteType'];
    autoCorrect?: TextInputProps['autoCorrect'];
    clearTextOnFocus?: boolean;
    caretHidden?: TextInputProps['caretHidden'];
    dataDetectorTypes?: TextInputProps['dataDetectorTypes'];
    hasClearButton?: boolean;
    keyboardType?: TextInputProps['keyboardType'];
    leftIcon?: React.ReactNode;
    maxLength?: TextInputProps['maxLength'];
    multiline?: TextInputProps['multiline'];
    returnKeyType?: TextInputProps['returnKeyType'];
    rightIcon?: React.ReactNode;
    secureTextEntry?: TextInputProps['secureTextEntry'];
    selectTextOnFocus?: TextInputProps['selectTextOnFocus'];
    spellCheck?: TextInputProps['spellCheck'];
    textContentType?: TextInputProps['textContentType'];
    allowFontScaling?: boolean;
    fontFamily?: string;
    isBold?: boolean;
    isItalic?: boolean;
    letterSpacing?: number;
    lineHeight?: number;
    maxFontSizeMultiplier?: number;
    minimumFontScale?: number;
    textAlign?: TextStyle['textAlign'];
};
declare type InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSize, AllowCustomProps> = {
    themes: {
        [ThemeKey in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, {
        [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
    }>;
    sizes?: RequiredIfSpecified<InputFieldSize, {
        [SizeKey in keyof AddDefaultToObject<InputFieldSize, InputFieldSizeProps>]: InputFieldSizeProps;
    }>;
    inputFieldType?: InputFieldType;
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultShape?: InputFieldShape;
};
declare type InputFieldProps<AdditionalPalettes, InputFieldSize, AllowCustomProps> = {
    _customTextInputProps?: OptionalTrueCondition<AllowCustomProps, TextInputProps, never>;
    _customTextInputStyle?: OptionalTrueCondition<AllowCustomProps, TextStyle, never>;
    _customWrapperProps?: OptionalTrueCondition<AllowCustomProps, ViewProps, never>;
    _customWrapperStyle?: OptionalTrueCondition<AllowCustomProps, ViewStyle, never>;
    autoFocus?: boolean;
    backgroundColor?: keyof (ThemePalette & AdditionalPalettes);
    borderColor?: keyof (ThemePalette & AdditionalPalettes);
    color?: keyof (ThemePalette & AdditionalPalettes);
    defaultValue?: string;
    isDisabled?: boolean;
    maxLength?: number;
    onBlur?: (args: any) => any;
    onChange?: (args: any) => any;
    onEndEditing?: (args: any) => any;
    onFocus?: (args: any) => any;
    onKeyPress?: (args: any) => any;
    placeholder?: string;
    size?: keyof AddDefaultToObject<InputFieldSize, InputFieldSizeProps>;
    shape?: InputFieldShape;
    textColor?: keyof (ThemePalette & AdditionalPalettes);
    value: string;
};
export { InputFieldFactoryProps, InputFieldProps, InputFieldShape, InputFieldSizeProps, InputFieldType, InputFieldVariationProps, InputFieldVariation, };
//# sourceMappingURL=types.d.ts.map