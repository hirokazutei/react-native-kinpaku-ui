import {TouchableOpacityProps, ViewStyle} from 'react-native';
import {Color, DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';

type RadioButtonVariations = 'dot' | 'reverse' | 'fill';
type RadioButtonVariationOptions = 'Dot' | 'Reverse' | 'Fill';

type RadioButtonSizeProps = {
  size: number;
  dotSize: number;
  borderThickness: number;
};

type RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSizes> = {
  themes: {
    [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
  };
  sizes?: {
    [SizeKey in keyof RadioButtonSizes &
      DefaultObject<RadioButtonSizeProps>]: RadioButtonSizeProps;
  };
  defaultVariation?: RadioButtonVariations;
};

type RadioButtonProps<
  AdditionalPalettes,
  RadioButtonSizes,
  AllowAdditionalProps
> = {
  additionalRadioButtonProps?: AllowAdditionalProps extends boolean
    ? TouchableOpacityProps
    : never;
  additionalRadioButtonStyle?: AllowAdditionalProps extends boolean
    ? ViewStyle
    : never;
  color?: keyof ThemePalette | keyof AdditionalPalettes;
  isDisabled?: boolean;
  size?: keyof RadioButtonSizes extends 'default'
    ? keyof RadioButtonSizes | keyof DefaultObject<RadioButtonSizes>
    : never;
  onPress: (args: any) => any;
};

export {
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonVariations,
  RadioButtonVariationOptions,
};
