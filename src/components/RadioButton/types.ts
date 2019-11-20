import {TouchableOpacityProps, ViewStyle, ViewProps} from 'react-native';
import {
  Color,
  AddDefaultToObject,
  OptionalTrueCondition,
  UnionDefaultKey,
} from '../../types';
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
    [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
  };
  additionalPalettes?: {
    [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
  };
  sizes?: {
    [SizeKey in keyof AddDefaultToObject<
      RadioButtonSizes,
      RadioButtonSizeProps
    >]: RadioButtonSizeProps;
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
  size?: UnionDefaultKey<keyof RadioButtonSizes>;
  onPress: (args: any) => any;
  _customOuterViewProps?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    TouchableOpacityProps
  >;
  _customOuterViewStyle?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    ViewStyle
  >;
  _customInnerViewProps?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    ViewProps
  >;
  _customInnerViewStyle?: OptionalTrueCondition<
    AllowCustomProps,
    never,
    ViewStyle
  >;
};

export {
  RadioButtonFactoryProps,
  RadioButtonProps,
  RadioButtonSizeProps,
  RadioButtonVariations,
};
