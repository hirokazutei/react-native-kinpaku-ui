import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalTrueCondition,
  UnionDefaultKey,
  RequiredIfSpecified,
} from '../../types';
import {ThemePalette, Themes as ThemesType} from '../../theme/types';

type CheckBoxShapeVariation = 'Sharp' | 'Round' | 'Circular';

type CheckBoxType = 'outline' | 'fill' | 'reverse';

type CheckBoxSizeProps = {
  size: number;
};

type CheckBoxFactoryProps<
  Themes,
  AdditionalPalettes,
  CheckBoxSize,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps
> = {
  themes: ThemesType<Themes>;
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    {[AdditionalPaletteKeys in keyof AdditionalPalettes]: Color}
  >;
  sizes?: RequiredIfSpecified<
    CheckBoxSize,
    {
      [SizeKey in keyof AddDefaultToObject<
        CheckBoxSize,
        CheckBoxSizeProps
      >]: CheckBoxSizeProps
    }
  >;
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultType?: CheckBoxType;
};

type CheckBoxProps<AdditionalPalettes, CheckBoxSize, AllowCustomProps> = {
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
  CheckBoxProps,
  CheckBoxShapeVariation,
  CheckBoxSizeProps,
  CheckBoxFactoryProps,
  CheckBoxType,
};
