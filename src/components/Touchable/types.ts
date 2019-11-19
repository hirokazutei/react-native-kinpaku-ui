import {TouchableOpacityProps, ViewStyle, FlexAlignType} from 'react-native';
import {
  AddDefaultToObject,
  Color,
  OptionalTrueCheck,
  AddDefaultKey,
} from '../../types';
import {ThemePalette} from '../../Theme/types';

type TouchableTypes = 'solid' | 'outline';

type VerHor = {horizontalPadding: number; verticalPadding: number};
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
  TouchableSizes,
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
      TouchableSizes,
      TouchableSizeProps
    >]: TouchableSizeProps;
  };
  defaultType?: TouchableTypes;
};

type TouchableProps<AdditionalPalettes, TouchableSizes, AllowCustomProps> = {
  _additionalProps?: OptionalTrueCheck<AllowCustomProps, TouchableOpacityProps>;
  _additionalStyle?: OptionalTrueCheck<AllowCustomProps, ViewStyle>;
  align?: FlexAlignType;
  children: React.ReactNode;
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  isStretched?: boolean;
  size?: AddDefaultKey<keyof TouchableSizes>;
  type?: TouchableTypes;
  onPress: (args: any) => any;
};

export {
  TouchableTypes,
  TouchableProps,
  TouchableSizeProps,
  TouchableFactoryProps,
  TouchableVerHorSizeProps,
  TouchableAllSizeProps,
};
