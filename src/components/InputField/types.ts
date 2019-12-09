import {TextInputProps, TextStyle} from 'react-native';
import {AddDefaultToObject, Color, OptionalExistCondition} from '../../types';
import {ThemePalette} from '../../Theme/types';

type InputFieldTypes = 'Underline' | 'Outline' | 'Fill' | 'UnderlinedFill';

type InputFieldShapes = 'Sharp' | 'Rounded' | 'Circular';

type InputFieldSizeProps = {
  fontSize: number;
  isBold: boolean;
};

type InputFieldVariationProps = {
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoCompleteType?: TextInputProps['autoCompleteType'];
  autoCorrect?: TextInputProps['autoCorrect'];
  clearTextOnFocus?: boolean; // Make yourself
  dataDetectorTypes?: TextInputProps['dataDetectorTypes'];
  defaultMaxLength?: TextInputProps['maxLength'];
  hasClearButton?: boolean; // Make Yourself
  leftIcon?: React.ReactNode;
  keyboardType?: TextInputProps['keyboardType'];
  multiline?: TextInputProps['multiline'];
  returnKeyType?: TextInputProps['returnKeyType'];
  rightIcon?: React.ReactNode;
  secureTextEntry?: TextInputProps['secureTextEntry'];
  selectTextOnFocus?: TextInputProps['selectTextOnFocus'];
  spellCheck?: TextInputProps['spellCheck'];
  textContentType?: TextInputProps['textContentType'];
  // Text Props
  align?: TextStyle['textAlign'];
  allowFontScaling?: boolean;
  fontFamily?: string;
  isBold?: boolean;
  isItalic?: boolean;
  letterSpacing?: number;
  lineHeight?: number;
  maxFontSizeMultiplier?: number;
  minimumFontScale?: number;
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
  defaultColor?: {[key in keyof (ThemePalette & AdditionalPalettes)]: string};
  inputFieldType?: InputFieldTypes;
  defaultShape?: InputFieldShapes;
  highlightOnFocus?: boolean;
};

type InputFieldProps<AdditionalPalettes> = {
  autoFocus: boolean;
  backgroundColor: {[key in keyof (ThemePalette & AdditionalPalettes)]: string};
  color: {[key in keyof (ThemePalette & AdditionalPalettes)]: string};
  defaultValue: string;
  disabled: boolean; // editable
  maxLength: number;
  onBlur: (args: any) => any;
  onChange: (args: any) => any;
  onEndEditing: (args: any) => any;
  onFocus: (args: any) => any;
  onKeyPress: (args: any) => any;
  placeholder: string;
  textColor: {[key in keyof (ThemePalette & AdditionalPalettes)]: string};
  value: string;
};

export {
  InputFieldFactoryProps,
  InputFieldProps,
  InputFieldShapes,
  InputFieldSizeProps,
  InputFieldTypes,
  InputFieldVariationProps,
};
