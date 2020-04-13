import {
  FlexAlignType,
  TextProperties,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalTrueCondition,
  UnionDefaultKey,
} from '../../types';
import {ThemePalette} from '../../theme/types';

type ButtonShapeVariation = 'Circular' | 'Round' | 'Sharp';
type ButtonType = 'solid' | 'clear' | 'outline';

type ButtonSizeProps = {
  borderRadius: number;
  fontSize: number;
  paddingHorizontal: number;
  paddingVertical: number;
};

type ButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  ButtonSize,
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
      ButtonSize,
      ButtonSizeProps
    >]: ButtonSizeProps
  };
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultType?: ButtonType;
};

type ButtonProps<AdditionalPalettes, ButtonSize, AllowCustomProps> = {
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
  size?: UnionDefaultKey<keyof ButtonSize>;
  title: string;
  type?: ButtonType;
  onPress: (args: any) => any;
};

export {
  ButtonProps,
  ButtonShapeVariation,
  ButtonSizeProps,
  ButtonType,
  ButtonFactoryProps,
};
