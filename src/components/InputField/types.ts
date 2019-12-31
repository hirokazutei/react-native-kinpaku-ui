import {TextInputProps, TextStyle} from 'react-native';
import {AddDefaultToObject, Color, OptionalExistCondition} from '../../types';
import {ThemePalette} from '../../theme/types';

type InputFieldTypes = 'Underline' | 'Outline' | 'Fill' | 'UnderlinedFill';

type InputFieldShapes = 'Sharp' | 'Rounded' | 'Circular';

type InputFieldSizeProps = {
  borderWidth?: number;
  fontSize: number;
  isBold?: boolean;
  // Padding Kaz
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

type InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSizes> = {
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
  defaultColor?: {[key in keyof (ThemePalette & AdditionalPalettes)]: string};
  inputFieldType?: InputFieldTypes;
  defaultShape?: InputFieldShapes;
  highlightOnFocus?: boolean;
};

type InputFieldProps<AdditionalPalettes, InputFieldSizes> = {
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
  textColor?: keyof (ThemePalette & AdditionalPalettes);
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
