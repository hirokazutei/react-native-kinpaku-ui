import {TextStyle, TextInputProps, ViewProps, ViewStyle} from 'react-native';
import {
  Color,
  OptionalTrueCondition,
  RequiredIfSpecified,
  NonExistent,
  UnionDefaultKey,
} from '../../types';
import {
  ThemePalette,
  GenericTheme,
  GenericAdditionalPalette,
  DefaultTheme,
} from '../../theme/types';
import {PaddingSpacing} from '../../common/spacing';

type InputFieldVariation =
  | 'creditCardNumber'
  | 'decimal'
  | 'email'
  | 'freeField'
  | 'name'
  | 'number'
  | 'oneTimeNumberCode'
  | 'oneTimeCode'
  | 'paragraph'
  | 'passcode'
  | 'password'
  | 'phone'
  | 'url'
  | 'username';

type InputFieldShape = 'sharp' | 'round' | 'circular';

type InputFieldType = 'underline' | 'outline' | 'fill' | 'clear';

type InputFieldSizeProps = {
  borderRadiusFontRatio?: number; // Ratio depends on the fontSize
  borderWidth?: number;
  fontSize: number;
  fieldSpacing?: PaddingSpacing;
  textSpacing?: PaddingSpacing;
  leftItemSpacing?: PaddingSpacing;
  rightItemSpacing?: PaddingSpacing;
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
  staticLeftItem?: React.ReactNode;
  maxLength?: TextInputProps['maxLength'];
  multiline?: TextInputProps['multiline'];
  returnKeyType?: TextInputProps['returnKeyType'];
  staticRightItem?: React.ReactNode;
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
  Themes extends GenericTheme = DefaultTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null,
  InputFieldSize extends
    | Record<string | string, InputFieldSizeProps>
    | NonExistent = null,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps extends boolean | NonExistent = null
> = {
  themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>;
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    Record<keyof AdditionalPalettes, Color>
  >;
  sizes?: RequiredIfSpecified<
    InputFieldSize,
    Record<UnionDefaultKey<keyof InputFieldSize>, InputFieldSizeProps>
  >;
  shape?: InputFieldShape;
  defaultType?: InputFieldType;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
};

type InputFieldProps<
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null,
  InputFieldSize extends
    | Record<string | string, InputFieldSizeProps>
    | NonExistent = null,
  AllowCustomProps extends boolean | NonExistent = null
> = {
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
  leftItem?: React.ReactNode;
  maxLength?: number;
  onBlur?: (args: any) => any;
  onChange?: (args: any) => any;
  onChangeText?: (args: any) => any;
  onEndEditing?: (args: any) => any;
  onFocus?: (args: any) => any;
  onKeyPress?: (args: any) => any;
  placeholder?: string;
  rightItem?: React.ReactNode;
  size?: UnionDefaultKey<keyof InputFieldSize>;
  textColor?: keyof (ThemePalette & AdditionalPalettes);
  type?: InputFieldType;
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
