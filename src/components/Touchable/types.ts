import {FlexAlignType, TouchableOpacityProps, ViewStyle} from 'react-native';
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
import {PaddingSpacing} from '../../common/spacing';

type TouchableType = 'fill' | 'outline' | 'clear';

type TouchableShapeVariation = 'Sharp' | 'Round' | 'Circular';

type TouchableSizeProps = {
  borderRadius: number;
  touchableSpacing?: PaddingSpacing;
};

type TouchableFactoryProps<
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  TouchableSize extends
    | Record<string | string, TouchableSizeProps>
    | NonExistent,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps extends boolean | NonExistent
> = {
  themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>;
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    Record<keyof AdditionalPalettes, Color>
  >;
  sizes?: RequiredIfSpecified<
    TouchableSize,
    Record<UnionDefaultKey<keyof TouchableSize>, TouchableSizeProps>
  >;
  defaultType?: TouchableType;
};

type TouchableProps<
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  TouchableSize extends
    | Record<string | string, TouchableSizeProps>
    | NonExistent,
  AllowCustomProps extends boolean | NonExistent
> = {
  _customProps?: OptionalTrueCondition<
    AllowCustomProps,
    TouchableOpacityProps,
    never
  >;
  _customStyle?: OptionalTrueCondition<AllowCustomProps, ViewStyle, never>;
  align?: FlexAlignType;
  children: React.ReactNode;
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  isStretched?: boolean;
  size?: UnionDefaultKey<keyof TouchableSize>;
  type?: TouchableType;
  onPress: (args: any) => any;
};

export {
  TouchableFactoryProps,
  TouchableProps,
  TouchableShapeVariation,
  TouchableSizeProps,
  TouchableType,
};
