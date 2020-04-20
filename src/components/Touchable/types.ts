import {FlexAlignType, TouchableOpacityProps, ViewStyle} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalTrueCondition,
  UnionDefaultKey,
  RequiredIfSpecified,
} from '../../types';
import {ThemePalette} from '../../theme/types';

type TouchableTypeVariations = 'Fill' | 'Outline';

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
  Themes,
  AdditionalPalettes,
  TouchableSize,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps
> = {
  themes: {
    [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette
  };
  additionalPalettes?: RequiredIfSpecified<
    AdditionalPalettes,
    {[AdditionalPaletteKeys in keyof AdditionalPalettes]: Color}
  >;
  sizes?: RequiredIfSpecified<
    TouchableSize,
    {
      [SizeKey in keyof AddDefaultToObject<
        TouchableSize,
        TouchableSizeProps
      >]: TouchableSizeProps
    }
  >;
  defaultType?: TouchableTypeVariations;
};

type TouchableProps<AdditionalPalettes, TouchableSize, AllowCustomProps> = {
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
  onPress: (args: any) => any;
};

export {
  TouchableTypeVariations,
  TouchableProps,
  TouchableSizeProps,
  TouchableFactoryProps,
  TouchableVerHorSizeProps,
  TouchableAllSizeProps,
};
