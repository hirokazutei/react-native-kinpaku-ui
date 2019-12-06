import {TextInputProps} from 'react-native';
import {AddDefaultToObject, Color, OptionalExistCondition} from '../../types';
import {ThemePalette} from '../../Theme/types';

type InputFieldTypes = 'Underline' | 'Outline' | 'Fill' | 'UnderlinedFill';

type InputFieldShapes = 'Sharp' | 'Rounded' | 'Circular';

type InputFieldSizeProps = {
  fontSize: number;
  isBold: boolean;
};

type InputFieldVariationProps = {
  autoCompleteType: TextInputProps['autoCompleteType'];
  autoCapitalize: TextInputProps['autoCapitalize'];
  autoCorrect: TextInputProps['autoCorrect'];
  clearTextOnFocus: boolean; // Make yourself
  dataDetectorTypes: TextInputProps['dataDetectorTypes'];
  defaultMaxLength: TextInputProps['maxLength'];
  hasClearButton: boolean; // Make Yourself
  leftIcon: React.ReactNode;
  keyboardType: TextInputProps['keyboardType'];
  multiline: TextInputProps['multiline'];
  returnKeyType: TextInputProps['returnKeyType'];
  rightIcon: React.ReactNode;
  secureTextEntry: TextInputProps['secureTextEntry'];
  selectTextOnFocus: TextInputProps['selectTextOnFocus'];
  spellCheck: TextInputProps['spellCheck'];
  textContentType: TextInputProps['textContentType'];
};

type InputFieldFactoryProps<
  Themes,
  AdditionalPalettes,
  InputFieldSizes,
  CustomInputVariations extends string | string
> = {
  themes: {
    [ThemeKey in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
  };
  sizes?: {
    [SizeKey in keyof AddDefaultToObject<
      InputFieldSizes,
      InputFieldSizeProps
    >]: InputFieldSizeProps;
  };
  customInputVariations?: OptionalExistCondition<
    CustomInputVariations,
    never,
    {[Variation in CustomInputVariations]: InputFieldVariationProps}
  >;
  inputFieldType?: InputFieldTypes;
  defaultShape?: InputFieldShapes;
  highlightOnFocus?: boolean;
};

type InputFieldProps = {
  autoFocus: boolean;
  defaultValue: string;
  disabled: boolean; // editable
  maxLength: number;
  onBlur: (args: any) => any;
  onChange: (args: any) => any;
  onEndEditing: (args: any) => any;
  onFocus: (args: any) => any;
  onKeyPress: (args: any) => any;
  palceholder: string;
  value: string;
};

/*
allowFontScaling?: boolean; // Factory
defaultColor?: keyof (ThemePalette & AdditionalPalettes);  // Set-Up
fontFamily?: string; // Variation
isBold?: boolean; // Variation
isItalic?: boolean;  // Variation
letterSpacing?: number; // Variation
lineHeight?: number; // Variation
maxFontSizeMultiplier?: number; // Variation
minimumFontScale?: number; // Variation

align?: TextStyle['textAlign']; // Variation
backgroundColor?: keyof (ThemePalette & AdditionalPalettes); // Prop
textColor?: keyof (ThemePalette & AdditionalPalettes); // Prop
color?: keyof (ThemePalette & AdditionalPalettes); // Prop
*/

export {
  InputFieldFactoryProps,
  InputFieldProps,
  InputFieldShapes,
  InputFieldSizeProps,
  InputFieldTypes,
  InputFieldVariationProps,
};
