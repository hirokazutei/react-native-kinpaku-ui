import {TouchableOpacityProps, ViewStyle, ViewProps} from 'react-native';
import {Color, DefaultObject, OptionalTrueCheck} from '../../types';
import {ThemePalette} from '../../Theme/types';

type RadioButtonVariations = 'Dot' | 'Reverse' | 'Fill';

type RadioButtonSizeProps = {
  size: number;
  dotSize: number;
  borderThickness: number;
};

type RadioButtonFactoryProps<
  Themes,
  AdditionalPalettes,
  RadioButtonSizes,
  //@ts-ignore: TS6133 Unused Variable
  AllowCustomProps
> = {
  themes: {
    [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
  };
  sizes?: RadioButtonSizes extends null
    ? RadioButtonSizeProps
    : {
        [SizeKey in keyof (RadioButtonSizes &
          DefaultObject<RadioButtonSizeProps>)]: RadioButtonSizeProps;
      };
  defaultVariation?: RadioButtonVariations;
};

type RadioButtonProps<
  AdditionalPalettes,
  RadioButtonSizes,
  AllowCustomProps
> = {
  active: boolean;
  color?: keyof (ThemePalette & AdditionalPalettes);
  isDisabled?: boolean;
  size?: keyof RadioButtonSizes extends 'default'
    ? keyof (RadioButtonSizes & DefaultObject<RadioButtonSizes>)
    : never;
  onPress: (args: any) => any;
  _customOuterViewProps?: OptionalTrueCheck<
    AllowCustomProps,
    TouchableOpacityProps
  >;
  _customOuterViewStyle?: OptionalTrueCheck<AllowCustomProps, ViewStyle>;
  _customInnerViewProps?: OptionalTrueCheck<AllowCustomProps, ViewProps>;
  _customInnerViewStyle?: OptionalTrueCheck<AllowCustomProps, ViewStyle>;
};

export {
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonVariations,
};
