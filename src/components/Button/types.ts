import {
  TouchableOpacityProps,
  TextProperties,
  ViewStyle,
  TextStyle,
  FlexAlignType,
} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalTrueCondition,
  UnionDefaultKey,
} from '../../types';
import {ThemePalette} from '../../theme/types';

// FIX: This should be ButtonShape and takes in as an arg in factory
type ButtonVariations = 'Circular' | 'Round' | 'Sharp';
type ButtonTypes = 'solid' | 'clear' | 'outline';

type ButtonSizeProps = {
  paddingHorizontal: number;
  verticalPaddding: number;
  fontSize: number;
  borderRadius: number;
};

type ButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  ButtonSizes,
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
      ButtonSizes,
      ButtonSizeProps
    >]: ButtonSizeProps
  };
  defaultType?: ButtonTypes;
};

type ButtonProps<AdditionalPalettes, ButtonSizes, AllowCustomProps> = {
  _additionalButtonProps?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    TouchableOpacityProps
  >;
  _additionalButtonStyle?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    ViewStyle
  >;
  _additionalTextProps?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    TextProperties
  >;
  _additionalTextStyle?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    TextStyle
  >;
  align?: FlexAlignType;
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  isStretched?: boolean;
  size?: UnionDefaultKey<keyof ButtonSizes>;
  title: string;
  type?: ButtonTypes;
  onPress: (args: any) => any;
};

export {
  ButtonProps,
  ButtonVariations,
  ButtonSizeProps,
  ButtonTypes,
  ButtonFactoryProps,
};
