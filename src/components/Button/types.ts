import {
  TouchableOpacityProps,
  TextProperties,
  ViewStyle,
  TextStyle,
  FlexAlignType,
} from 'react-native';
import {Color, DefaultObject, OptionalTrueCheck} from '../../types';
import {ThemePalette} from '../../Theme/types';

type ButtonVariations = 'Circular' | 'Round' | 'Sharp';
type ButtonTypes = 'solid' | 'clear' | 'outline';

type ButtonSizeProps = {
  horizontalPadding: number;
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
    [ThemeKey in keyof (Themes & DefaultObject<ThemePalette>)]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
  };
  sizes?: {
    [SizeKey in keyof (ButtonSizes &
      DefaultObject<ButtonSizeProps>)]: ButtonSizeProps;
  };
  defaultType?: ButtonTypes;
};

type ButtonProps<AdditionalPalettes, ButtonSizes, AllowCustomProps> = {
  _additionalButtonProps?: OptionalTrueCheck<
    AllowCustomProps,
    TouchableOpacityProps
  >;
  _additionalButtonStyle?: OptionalTrueCheck<AllowCustomProps, ViewStyle>;
  _additionalTextProps?: OptionalTrueCheck<AllowCustomProps, TextProperties>;
  _additionalTextStyle?: OptionalTrueCheck<AllowCustomProps, TextStyle>;
  align?: FlexAlignType;
  color?: keyof (ThemePalette & DefaultObject<AdditionalPalettes>);
  isDisabled?: boolean;
  isStretched?: boolean;
  size?: keyof (ButtonSizes & DefaultObject<ButtonSizeProps>);
  title: string;
  type?: ButtonTypes;
  onPress: (args: any) => any;
};

type ButtonSizes =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'default'
  | 'large'
  | 'huge'
  | 'massive';

export {
  ButtonProps,
  ButtonVariations,
  ButtonSizes,
  ButtonSizeProps,
  ButtonTypes,
  ButtonFactoryProps,
};
