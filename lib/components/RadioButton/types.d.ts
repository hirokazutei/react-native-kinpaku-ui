import { TouchableOpacityProps, ViewStyle, ViewProps } from 'react-native';
import { Color, AddDefaultToObject, OptionalTrueCondition, UnionDefaultKey } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type RadioButtonTypeVariation = 'Outline' | 'Reverse' | 'Fill';
declare type RadioButtonSizeProps = {
    size: number;
    dotSize: number;
    borderThickness: number;
};
declare type RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSize, AllowCustomProps> = {
    themes: {
        [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    sizes?: {
        [SizeKey in keyof AddDefaultToObject<RadioButtonSize, RadioButtonSizeProps>]: RadioButtonSizeProps;
    };
};
declare type RadioButtonProps<AdditionalPalettes, RadioButtonSize, AllowCustomProps> = {
    _customOuterViewProps?: OptionalTrueCondition<AllowCustomProps, never, TouchableOpacityProps>;
    _customOuterViewStyle?: OptionalTrueCondition<AllowCustomProps, never, ViewStyle>;
    _customInnerViewProps?: OptionalTrueCondition<AllowCustomProps, never, ViewProps>;
    _customInnerViewStyle?: OptionalTrueCondition<AllowCustomProps, never, ViewStyle>;
    active?: boolean;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    size?: UnionDefaultKey<keyof RadioButtonSize>;
    onPress: (args: any) => any;
};
export { RadioButtonFactoryProps, RadioButtonProps, RadioButtonSizeProps, RadioButtonTypeVariation, };
//# sourceMappingURL=types.d.ts.map