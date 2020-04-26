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

type TouchableType = 'fill' | 'outline';

type TouchableShapeVariation = 'Sharp' | 'Round' | 'Circular';

type VerHor = {paddingHorizontal: number; paddingVertical: number};

type Padding = {padding: number};

type TouchableVerHorSizeProps = {
  borderRadius: number;
} & VerHor;

type TouchableAllSizeProps = {
  borderRadius: number;
} & Padding;

type TouchableSizeProps = TouchableVerHorSizeProps | TouchableAllSizeProps;

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
  TouchableAllSizeProps,
  TouchableFactoryProps,
  TouchableProps,
  TouchableShapeVariation,
  TouchableSizeProps,
  TouchableType,
  TouchableVerHorSizeProps,
};
