import { TouchableOpacityProps, ViewStyle, ViewProps } from 'react-native';
import { Color, DefaultObject } from '../../types';
import { ThemePalette } from '../../Theme/types';
declare type RadioButtonVariations = 'Dot' | 'Reverse' | 'Fill';
declare type RadioButtonSizeProps = {
    size: number;
    dotSize: number;
    borderThickness: number;
};
declare type RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSizes> = {
    themes: {
        [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    sizes?: RadioButtonSizes extends null ? RadioButtonSizeProps : {
        [SizeKey in keyof (RadioButtonSizes & DefaultObject<RadioButtonSizeProps>)]: RadioButtonSizeProps;
    };
    defaultVariation?: RadioButtonVariations;
    allowCustomProps?: boolean;
};
declare type RadioButtonProps<AdditionalPalettes, RadioButtonSizes, AllowCustomProps> = {
    active: boolean;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    size?: keyof RadioButtonSizes extends 'default' ? keyof (RadioButtonSizes & DefaultObject<RadioButtonSizes>) : never;
    onPress: (args: any) => any;
    _customOuterViewProps?: AllowCustomProps extends true ? TouchableOpacityProps : never;
    _customOuterViewStyle?: AllowCustomProps extends true ? ViewStyle : never;
    _customInnerViewProps?: AllowCustomProps extends true ? ViewProps : never;
    _customInnerViewStyle?: AllowCustomProps extends true ? ViewStyle : never;
};
export { RadioButtonFactoryProps, RadioButtonProps, RadioButtonSizeProps, RadioButtonVariations, };
//# sourceMappingURL=types.d.ts.map