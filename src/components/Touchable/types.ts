import {FlexAlignType, TouchableOpacityProps, ViewStyle} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalTrueCondition,
  UnionDefaultKey,
  RequiredIfSpecified,
} from '../../types';
import {ThemePalette} from '../../theme/types';

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
  defaultType?: TouchableType;
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
