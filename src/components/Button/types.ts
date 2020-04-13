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
import {ThemePalette, Themes as ThemesType} from '../../theme/types';

type ButtonShapeVariation = 'Circular' | 'Round' | 'Sharp';
type ButtonType = 'fill' | 'clear' | 'outline';

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
  themes: ThemesType<Themes>;
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
    TouchableOpacityProps,
    never
  >;
  _additionalButtonStyle?: OptionalTrueCondition<
    AllowCustomProps,
    ViewStyle,
    never
  >;
  _additionalTextProps?: OptionalTrueCondition<
    AllowCustomProps,
    TextProperties,
    never
  >;
  _additionalTextStyle?: OptionalTrueCondition<
    AllowCustomProps,
    TextStyle,
    never
  >;
  align?: FlexAlignType;
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  isStretched?: boolean;
  size?: UnionDefaultKey<keyof ButtonSize>;
  label: string;
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
