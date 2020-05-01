import {
  FlexAlignType,
  TextProperties,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {
  Color,
  OptionalTrueCondition,
  UnionDefaultKey,
  RequiredIfSpecified,
  NonExistent,
} from '../../types';
import {
  ThemePalette,
  Themes as ThemesType,
  GenericTheme,
  GenericAdditionalPalette,
} from '../../theme/types';
import {PaddingSpacing} from '../../common/spacing';

type ButtonShapeVariation = 'Circular' | 'Round' | 'Sharp';

type ButtonType = 'fill' | 'clear' | 'outline';

type ButtonSizeProps = {
  borderRadius: number;
  fontSize: number;
  fontWeight?: TextStyle['fontWeight'];
  buttonSpacing?: PaddingSpacing;
};

type ButtonFactoryProps<
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  ButtonSize extends Record<string | string, ButtonSizeProps> | NonExistent,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps extends boolean | NonExistent
> = {
  themes: ThemesType<Themes>;
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    Record<keyof AdditionalPalettes, Color>
  >;
  sizes?: RequiredIfSpecified<
    ButtonSize,
    Record<UnionDefaultKey<keyof ButtonSize>, ButtonSizeProps>
  >;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultType?: ButtonType;
};

type ButtonProps<
  AdditionalPalettes extends Record<string, Color> | NonExistent,
  ButtonSize extends Record<string | string, ButtonSizeProps> | NonExistent,
  AllowCustomProps extends boolean | NonExistent
> = {
  _customButtonProps?: OptionalTrueCondition<
    AllowCustomProps,
    TouchableOpacityProps,
    never
  >;
  _customButtonStyle?: OptionalTrueCondition<
    AllowCustomProps,
    ViewStyle,
    never
  >;
  _customTextProps?: OptionalTrueCondition<
    AllowCustomProps,
    TextProperties,
    never
  >;
  _customTextStyle?: OptionalTrueCondition<AllowCustomProps, TextStyle, never>;
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
  ButtonFactoryProps,
  ButtonProps,
  ButtonShapeVariation,
  ButtonSizeProps,
  ButtonType,
};
