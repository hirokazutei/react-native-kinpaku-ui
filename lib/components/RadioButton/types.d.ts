import { TouchableOpacityProps, ViewStyle, ViewProps } from 'react-native';
import { AddDefaultKey, Color, AddDefaultToObject, OptionalTrueCheck } from '../../types';
import { ThemePalette } from '../../Theme/types';
declare type RadioButtonVariations = 'Dot' | 'Reverse' | 'Fill';
declare type RadioButtonSizeProps = {
    size: number;
    dotSize: number;
    borderThickness: number;
};
declare type RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSizes, AllowCustomProps> = {
    themes: {
        [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    sizes?: {
        [SizeKey in keyof AddDefaultToObject<RadioButtonSizes, RadioButtonSizeProps>]: RadioButtonSizeProps;
    };
    defaultVariation?: RadioButtonVariations;
};
declare type RadioButtonProps<AdditionalPalettes, RadioButtonSizes, AllowCustomProps> = {
    active: boolean;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    size?: AddDefaultKey<keyof RadioButtonSizes>;
    onPress: (args: any) => any;
    _customOuterViewProps?: OptionalTrueCheck<AllowCustomProps, TouchableOpacityProps>;
    _customOuterViewStyle?: OptionalTrueCheck<AllowCustomProps, ViewStyle>;
    _customInnerViewProps?: OptionalTrueCheck<AllowCustomProps, ViewProps>;
    _customInnerViewStyle?: OptionalTrueCheck<AllowCustomProps, ViewStyle>;
};
export { RadioButtonFactoryProps, RadioButtonProps, RadioButtonSizeProps, RadioButtonVariations, };
//# sourceMappingURL=types.d.ts.map