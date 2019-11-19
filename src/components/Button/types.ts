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
  OptionalTrueCheck,
  AddDefaultKey,
} from '../../types';
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
    [ThemeKey in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
  };
  sizes?: {
    [SizeKey in keyof AddDefaultToObject<
      ButtonSizes,
      ButtonSizeProps
    >]: ButtonSizeProps;
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
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  isStretched?: boolean;
  size?: AddDefaultKey<keyof ButtonSizes>;
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
