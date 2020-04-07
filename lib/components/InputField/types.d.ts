/// <reference types="react" />
import { TextInputProps, TextStyle } from 'react-native';
import { AddDefaultToObject, Color } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type InputFieldTypes = 'Underline' | 'Outline' | 'Fill' | 'UnderlinedFill';
declare type InputFieldShapes = 'sharp' | 'rounded' | 'circular';
declare type InputFieldVariations = 'creditCardNumber' | 'decimal' | 'email' | 'freeField' | 'name' | 'number' | 'oneTimeNumberCode' | 'oneTimeCode' | 'paragragh' | 'passcode' | 'password' | 'phone' | 'url' | 'username';
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
    maxLength?: TextInputProps['maxLength'];
    hasClearButton?: boolean;
    leftIcon?: React.ReactNode;
    keyboardType?: TextInputProps['keyboardType'];
    multiline?: TextInputProps['multiline'];
    returnKeyType?: TextInputProps['returnKeyType'];
    rightIcon?: React.ReactNode;
    secureTextEntry?: TextInputProps['secureTextEntry'];
    selectTextOnFocus?: TextInputProps['selectTextOnFocus'];
    spellCheck?: TextInputProps['spellCheck'];
    textContentType?: TextInputProps['textContentType'];
    textAlign?: TextStyle['textAlign'];
    allowFontScaling?: boolean;
    fontFamily?: string;
    isBold?: boolean;
    isItalic?: boolean;
    letterSpacing?: number;
    lineHeight?: number;
    maxFontSizeMultiplier?: number;
    minimumFontScale?: number;
};
declare type InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSizes> = {
    themes: {
        [ThemeKey in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
    };
    sizes?: {
        [SizeKey in keyof AddDefaultToObject<InputFieldSizes, InputFieldSizeProps>]: InputFieldSizeProps;
    };
    defaultColor?: {
        [key in keyof (ThemePalette & AdditionalPalettes)]: Color;
    };
    inputFieldType?: InputFieldTypes;
    defaultShape?: InputFieldShapes;
};
declare type InputFieldProps<AdditionalPalettes, InputFieldSizes> = {
    autoFocus?: boolean;
    backgroundColor?: keyof (ThemePalette & AdditionalPalettes);
    borderColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultValue?: string;
    isDisabled?: boolean;
    maxLength?: number;
    onBlur?: (args: any) => any;
    onChange?: (args: any) => any;
    onEndEditing?: (args: any) => any;
    onFocus?: (args: any) => any;
    onKeyPress?: (args: any) => any;
    placeholder?: string;
    size?: keyof AddDefaultToObject<InputFieldSizes, InputFieldSizeProps>;
    shape?: InputFieldShapes;
    textColor?: keyof (ThemePalette & AdditionalPalettes);
    value: string;
};
export { InputFieldFactoryProps, InputFieldProps, InputFieldShapes, InputFieldSizeProps, InputFieldTypes, InputFieldVariationProps, InputFieldVariations, };
//# sourceMappingURL=types.d.ts.map