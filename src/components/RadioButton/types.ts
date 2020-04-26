import {TouchableOpacityProps, ViewStyle, ViewProps} from 'react-native';
import {
  Color,
  OptionalTrueCondition,
  UnionDefaultKey,
  RequiredIfSpecified,
  NonExistent,
} from '../../types';
import {
  ThemePalette,
  GenericTheme,
  GenericAdditionalPalette,
} from '../../theme/types';

type RadioButtonShapeVariation = 'Sharp' | 'Round' | 'Circular';

type RadioButtonType = 'fill' | 'outline' | 'reverse';

type RadioButtonSizeProps = {
  size: number;
  dotSize: number;
  borderThickness: number;
};

type RadioButtonFactoryProps<
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  RadioButtonSize extends
    | Record<string | string, RadioButtonSizeProps>
    | NonExistent,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps extends boolean | NonExistent
> = {
  themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>;
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    Required<Record<keyof AdditionalPalettes, Color>>
  >;
  sizes?: RequiredIfSpecified<
    RadioButtonSize,
    Record<UnionDefaultKey<keyof RadioButtonSize>, RadioButtonSizeProps>
  >;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultType?: RadioButtonType;
};

type RadioButtonProps<
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  RadioButtonSize extends
    | Record<string | string, RadioButtonSizeProps>
    | NonExistent,
  AllowCustomProps extends boolean | NonExistent
> = {
  _customOuterViewProps?: OptionalTrueCondition<
    AllowCustomProps,
    TouchableOpacityProps,
    never
  >;
  _customOuterViewStyle?: OptionalTrueCondition<
    AllowCustomProps,
    ViewStyle,
    never
  >;
  _customInnerViewProps?: OptionalTrueCondition<
    AllowCustomProps,
    ViewProps,
    never
  >;
  _customInnerViewStyle?: OptionalTrueCondition<
    AllowCustomProps,
    ViewStyle,
    never
  >;
  active?: boolean;
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  size?: UnionDefaultKey<keyof RadioButtonSize>;
  type?: RadioButtonType;
  onPress: (args: any) => any;
};

export {
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonShapeVariation,
  RadioButtonType,
};
