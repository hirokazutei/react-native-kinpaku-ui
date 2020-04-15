import {TextStyle, TextInputProps, ViewProps, ViewStyle} from 'react-native';
import {AddDefaultToObject, Color, OptionalTrueCondition} from '../../types';
import {ThemePalette} from '../../theme/types';

type InputFieldVariation =
  | 'creditCardNumber'
  | 'decimal'
  | 'email'
  | 'freeField'
  | 'name'
  | 'number'
  | 'oneTimeNumberCode'
  | 'oneTimeCode'
  | 'paragragh'
  | 'passcode'
  | 'password'
  | 'phone'
  | 'url'
  | 'username';

type InputFieldShape = 'sharp' | 'rounded' | 'circular';

type InputFieldType = 'underline' | 'outline' | 'fill';

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
  hasClearButton?: boolean; // Available Only in Custom
  keyboardType?: TextInputProps['keyboardType'];
  leftIcon?: React.ReactNode; // Available Only in Custom
  maxLength?: TextInputProps['maxLength'];
  multiline?: TextInputProps['multiline'];
  returnKeyType?: TextInputProps['returnKeyType'];
  rightIcon?: React.ReactNode; // Available Only in Custom
  secureTextEntry?: TextInputProps['secureTextEntry'];
  selectTextOnFocus?: TextInputProps['selectTextOnFocus'];
  spellCheck?: TextInputProps['spellCheck'];
  textContentType?: TextInputProps['textContentType'];
  // Text Props
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

type InputFieldFactoryProps<
  Themes,
  AdditionalPalettes,
  InputFieldSize,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps
> = {
  themes: {
    [ThemeKey in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette
  };
  additionalPalettes?: {
    [AdditionalPaletteKey in keyof AdditionalPalettes]: Color
  };
  sizes?: {
    [SizeKey in keyof AddDefaultToObject<
      InputFieldSize,
      InputFieldSizeProps
    >]: InputFieldSizeProps
  };
  inputFieldType?: InputFieldType;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultShape?: InputFieldShape;
};

type InputFieldProps<AdditionalPalettes, InputFieldSize, AllowCustomProps> = {
  _customTextInputProps?: OptionalTrueCondition<
    AllowCustomProps,
    TextInputProps,
    never
  >;
  _customTextInputStyle?: OptionalTrueCondition<
    AllowCustomProps,
    TextStyle,
    never
  >;
  _customWrapperProps?: OptionalTrueCondition<
    AllowCustomProps,
    ViewProps,
    never
  >;
  _customWrapperStyle?: OptionalTrueCondition<
    AllowCustomProps,
    ViewStyle,
    never
  >;
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

export {
  InputFieldFactoryProps,
  InputFieldProps,
  InputFieldShape,
  InputFieldSizeProps,
  InputFieldType,
  InputFieldVariationProps,
  InputFieldVariation,
};
