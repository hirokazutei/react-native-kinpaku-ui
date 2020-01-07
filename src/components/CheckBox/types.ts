import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {ThemePalette} from '../../theme/types';
import {
  Color,
  AddDefaultToObject,
  OptionalTrueCondition,
  UnionDefaultKey,
} from '../../types';

type CheckBoxVariations = 'Outline' | 'Fill' | 'Reverse';
type CheckBoxShapes = 'Sharp' | 'Rounded' | 'Circular';

type CheckBoxSizeProps = {
  size: number;
};

type CheckBoxFactoryProps<
  Themes,
  AdditionalPalettes,
  CheckBoxSizes,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps
> = {
  themes: {
    [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
  };
  sizes?: {
    [SizeKey in keyof AddDefaultToObject<
      CheckBoxSizes,
      CheckBoxSizeProps
    >]: CheckBoxSizeProps;
  };
  checkBoxShape?: CheckBoxShapes;
};

type CheckBoxProps<AdditionalPalettes, CheckBoxSizes, AllowCustomProps> = {
  active?: boolean;
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  size?: UnionDefaultKey<keyof CheckBoxSizes>;
  onPress: (args: any) => any;
  _customOuterViewStyle?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    ViewStyle
  >;
  _customOuterViewProps?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    TouchableOpacityProps
  >;
};

export {
  CheckBoxProps,
  CheckBoxShapes,
  CheckBoxSizeProps,
  CheckBoxVariations,
  CheckBoxFactoryProps,
};
