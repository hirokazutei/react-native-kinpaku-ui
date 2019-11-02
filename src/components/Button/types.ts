import {
  TouchableOpacityProps,
  TextProperties,
  ViewStyle,
  TextStyle,
  FlexAlignType,
} from 'react-native';
import {Color, DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';

type ButtonShapes = 'circular' | 'round' | 'sharp';
type ButtonShapeOptions = 'Circular' | 'Round' | 'Sharp';
type ButtonType = 'solid' | 'clear' | 'outline';

type ButtonSizeProps = {
  horizontalPadding: number;
  verticalPaddding: number;
  fontSize: number;
  borderRadius: number;
};

type ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSizes> = {
  themes: {
    [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
  };
  buttonSizes?: {
    [SizeKey in keyof ButtonSizes &
      DefaultObject<ButtonSizeProps>]: ButtonSizeProps;
  };
  defaultButtonType?: ButtonType;
};

type ButtonProps<AdditionalPalettes, ButtonSizes> = {
  additionalButtonProps?: TouchableOpacityProps;
  additionalButtonStyle?: ViewStyle;
  additionalTextProps?: TextProperties;
  additionalTextStyle?: TextStyle;
  align?: FlexAlignType;
  color?: keyof ThemePalette | keyof AdditionalPalettes;
  isDisabled?: boolean;
  isStretched?: boolean;
  size?: keyof ButtonSizes | keyof DefaultObject<ButtonSizeProps>;
  title: string;
  type?: ButtonType;
  onPress: (args: any) => any;
};

type ButtonSizeKeys =
  | 'tiny'
  | 'small'
  | 'medium'
  | 'default'
  | 'large'
  | 'huge'
  | 'massive';

export {
  ButtonProps,
  ButtonShapeOptions,
  ButtonShapes,
  ButtonSizeKeys,
  ButtonSizeProps,
  ButtonType,
  ButtonFactoryProps,
};