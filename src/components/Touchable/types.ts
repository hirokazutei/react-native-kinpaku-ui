import {TouchableOpacityProps, ViewStyle, FlexAlignType} from 'react-native';
import {Color, DefaultObject} from '../../types';
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

type TouchableFactoryProps<Themes, AdditionalPalettes, TouchableSizes> = {
  themes: {
    [ThemeKeys in
      | keyof Themes
      | keyof DefaultObject<ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
  };
  sizes?: {
    [SizeKey in keyof TouchableSizes]: TouchableSizeProps;
  } &
    DefaultObject<TouchableSizeProps>;
  defaultType?: TouchableTypes;
  allowCustomProps?: boolean;
};

type TouchableProps<AdditionalPalettes, TouchableSizes, AllowCustomProps> = {
  additionalProps?: AllowCustomProps extends true
    ? TouchableOpacityProps
    : never;
  additionalStyle?: AllowCustomProps extends true ? ViewStyle : never;
  align?: FlexAlignType;
  children: React.ReactNode;
  color?: keyof ThemePalette | keyof AdditionalPalettes;
  isDisabled?: boolean;
  isStretched?: boolean;
  size?: keyof (TouchableSizes & DefaultObject<TouchableSizeProps>);
  type?: TouchableTypes;
  onPress: (args: any) => any;
};

type TouchableSizes =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'default'
  | 'large'
  | 'huge'
  | 'massive';

export {
  TouchableTypes,
  TouchableSizes,
  TouchableProps,
  TouchableSizeProps,
  TouchableFactoryProps,
  TouchableVerHorSizeProps,
  TouchableAllSizeProps,
};
