import {TextInputProps, TextStyle} from 'react-native';
import {AddDefaultToObject, Color} from '../../types';
import {ThemePalette} from '../../theme/types';

type InputFieldTypes = 'Underline' | 'Outline' | 'Fill' | 'UnderlinedFill';

type InputFieldShapes = 'sharp' | 'rounded' | 'circular';

type InputFieldSizeProps = {
  borderRadiusFontRatio?: number; // Ratio depends on the fontSize
  borderWidth?: number;
  fontSize: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  padding?: number;
  staticBorderRadius?: number;
};

type InputFieldVariationProps = {
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoCompleteType?: TextInputProps['autoCompleteType'];
  autoCorrect?: TextInputProps['autoCorrect'];
  clearTextOnFocus?: boolean; // Available Only in Custom (Need to Implement)
  caretHidden?: TextInputProps['caretHidden'];
  dataDetectorTypes?: TextInputProps['dataDetectorTypes'];
  maxLength?: TextInputProps['maxLength'];
  hasClearButton?: boolean; // Available Only in Custom
  leftIcon?: React.ReactNode; // Available Only in Custom
  keyboardType?: TextInputProps['keyboardType'];
  multiline?: TextInputProps['multiline'];
  returnKeyType?: TextInputProps['returnKeyType'];
  rightIcon?: React.ReactNode; // Available Only in Custom
  secureTextEntry?: TextInputProps['secureTextEntry'];
  selectTextOnFocus?: TextInputProps['selectTextOnFocus'];
  spellCheck?: TextInputProps['spellCheck'];
  textContentType?: TextInputProps['textContentType'];
  // Text Props
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
  shape?: InputFieldShapes;
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
