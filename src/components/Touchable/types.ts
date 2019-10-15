import {TouchableOpacityProps, ViewStyle, FlexAlignType} from 'react-native';
import {Color, DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';

type TouchableType = 'filled' | 'bordered';
type TouchableTypeOptions = 'Filled' | 'Bordered';

type VerHor = {horizontalPadding: number; verticalPadding: number};
type Padding = {padding: number};

type TouchableVerHorPaddingProps = {
  borderRadius: number;
} & VerHor;
type TouchableAllPaddingProps = {
  borderRadius: number;
} & Padding;

type TouchablePaddingProps =
  | TouchableVerHorPaddingProps
  | TouchableAllPaddingProps;

type TouchableFactoryProps<
  Themes,
  AdditionalPalettes,
  TouchablePaddingSizes
> = {
  themes: {
    [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
  };
  touchablePaddingSizes?: {
    [SizeKey in keyof TouchablePaddingSizes &
      DefaultObject<TouchablePaddingProps>]: TouchablePaddingProps;
  };
  defaultTouchableType?: TouchableType;
};

type TouchableProps<AdditionalPalettes, TouchablePaddingSizes> = {
  additionalProps?: TouchableOpacityProps;
  additionalStyle?: ViewStyle;
  align?: FlexAlignType;
  children: React.ReactChildren;
  color?: keyof ThemePalette | keyof AdditionalPalettes;
  isDisabled?: boolean;
  isStretched?: boolean;
  size?:
    | keyof TouchablePaddingSizes
    | keyof DefaultObject<TouchablePaddingProps>;
  type?: TouchableType;
  onPress: (args: any) => any;
};

type TouchablePaddingKeys =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'default'
  | 'large'
  | 'huge'
  | 'massive';

export {
  TouchableType,
  TouchableTypeOptions,
  TouchablePaddingKeys,
  TouchableProps,
  TouchablePaddingProps,
  TouchableFactoryProps,
  TouchableVerHorPaddingProps,
  TouchableAllPaddingProps,
};
