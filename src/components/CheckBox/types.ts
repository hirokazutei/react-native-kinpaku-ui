import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalTrueCondition,
  UnionDefaultKey,
} from '../../types';
import {ThemePalette} from '../../theme/types';

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
  themes: {
    [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color
  };
  sizes?: {
    [SizeKey in keyof AddDefaultToObject<
      CheckBoxSize,
      CheckBoxSizeProps
    >]: CheckBoxSizeProps
  };
  defaultColor?: keyof (ThemePalette & AdditionalPalettes);
  defaultType?: CheckBoxType;
};

type CheckBoxProps<AdditionalPalettes, CheckBoxSize, AllowCustomProps> = {
  _customOuterViewProps?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    TouchableOpacityProps
  >;
  _customOuterViewStyle?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    ViewStyle
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
