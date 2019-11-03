import {TouchableOpacityProps, ViewStyle, ViewProps} from 'react-native';
import {Color, DefaultObject} from '../../types';
import {ThemePalette} from '../../Theme/types';

type RadioButtonVariations = 'Dot' | 'Reverse' | 'Fill';

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
  sizes?: RadioButtonSizes extends null
    ? RadioButtonSizeProps
    : {
        [SizeKey in keyof RadioButtonSizes]: RadioButtonSizeProps;
      } &
        DefaultObject<RadioButtonSizeProps>;
  defaultVariation?: RadioButtonVariations;
  allowCustomProps?: boolean;
};

type RadioButtonProps<
  AdditionalPalettes,
  RadioButtonSizes,
  AllowCustomProps
> = {
  active: boolean;
  color?: keyof ThemePalette | keyof AdditionalPalettes;
  isDisabled?: boolean;
  size?: keyof RadioButtonSizes extends 'default'
    ? keyof RadioButtonSizes | keyof DefaultObject<RadioButtonSizes>
    : never;
  onPress: (args: any) => any;
  _customOuterViewProps?: AllowCustomProps extends true
    ? TouchableOpacityProps
    : never;
  _customOuterViewStyle?: AllowCustomProps extends true ? ViewStyle : never;
  _customInnerViewProps?: AllowCustomProps extends true ? ViewProps : never;
  _customInnerViewStyle?: AllowCustomProps extends true ? ViewStyle : never;
};

export {
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonVariations,
};
