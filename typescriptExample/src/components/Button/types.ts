import {
  TouchableOpacityProps,
  TextProperties,
  ViewStyle,
  TextStyle,
  FlexAlignType,
} from 'react-native';
import {Color, DefaultObject, ThemePalette} from '../../types';

type ButtonShapes = 'circular' | 'round' | 'sharp';
type ButtonType = 'solid' | 'clear' | 'outline';

type ButtonSizeProps = {
  horizontalPadding: number;
  verticalPaddding: number;
  fontSize: number;
  borderRadius: number;
};

type FactoryProps<Themes, AdditionalPalettes, ButtonSizes> = {
  themes: {
    [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [ButtonPaletteKeys in keyof AdditionalPalettes]: Color;
  };
  buttonSizes?: {
    [SizeKey in keyof ButtonSizes &
      DefaultObject<ButtonSizeProps>]: ButtonSizeProps;
  };
  defaultButtonShape?: ButtonShapes;
  defaultButtonType?: ButtonType;
};

type ButtonProps<AdditionalPalettes, ButtonSizes> = {
  color?: keyof ThemePalette | keyof AdditionalPalettes;
  size?: keyof ButtonSizes | keyof DefaultObject<number>;
  isDisabled?: boolean;
  isStretched?: boolean;
  align?: FlexAlignType;
  onPress: (args: any) => any;
  title: string;
  type?: ButtonType;
  additionalButtonProps?: TouchableOpacityProps;
  additionalButtonStyle?: ViewStyle;
  additionalTextProps?: TextProperties;
  additionalTextStyle?: TextStyle;
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
  ButtonShapes,
  ButtonType,
  FactoryProps,
  ButtonProps,
  ButtonSizeKeys,
  ButtonSizeProps,
};
