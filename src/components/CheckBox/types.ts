import {TouchableOpacityProps, ViewStyle} from 'react-native';
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

type CheckBoxShapeVariation = 'Sharp' | 'Round' | 'Circular';

type CheckBoxType = 'outline' | 'fill' | 'reverse';

type CheckBoxSizeProps = {
  size: number;
};

type CheckBoxFactoryProps<
  Themes extends GenericTheme,
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  CheckBoxSize extends Record<string, CheckBoxSizeProps> | NonExistent,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps extends boolean | NonExistent
> = {
  themes: ThemesType<Themes>;
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    Record<keyof AdditionalPalettes, Color>
  >;
  sizes?: RequiredIfSpecified<
    CheckBoxSize,
    Record<UnionDefaultKey<keyof CheckBoxSize>, CheckBoxSizeProps>
  >;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultType?: CheckBoxType;
};

type CheckBoxProps<
  AdditionalPalettes extends GenericAdditionalPalette | NonExistent,
  CheckBoxSize extends Record<string, CheckBoxSizeProps> | NonExistent,
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
  active?: boolean;
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  size?: UnionDefaultKey<keyof CheckBoxSize>;
  type?: CheckBoxType;
  onPress: (args: any) => any;
};

export {
  CheckBoxFactoryProps,
  CheckBoxProps,
  CheckBoxShapeVariation,
  CheckBoxSizeProps,
  CheckBoxType,
};
