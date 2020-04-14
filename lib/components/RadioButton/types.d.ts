import { TouchableOpacityProps, ViewStyle, ViewProps } from 'react-native';
import { Color, AddDefaultToObject, OptionalTrueCondition, UnionDefaultKey } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type RadioButtonShapeVariation = 'Sharp' | 'Round' | 'Circular';
declare type RadioButtonType = 'fill' | 'outline' | 'reverse';
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
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultType?: RadioButtonType;
};
declare type RadioButtonProps<AdditionalPalettes, RadioButtonSize, AllowCustomProps> = {
    _customOuterViewProps?: OptionalTrueCondition<AllowCustomProps, TouchableOpacityProps, never>;
    _customOuterViewStyle?: OptionalTrueCondition<AllowCustomProps, ViewStyle, never>;
    _customInnerViewProps?: OptionalTrueCondition<AllowCustomProps, ViewProps, never>;
    _customInnerViewStyle?: OptionalTrueCondition<AllowCustomProps, ViewStyle, never>;
    active?: boolean;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    size?: UnionDefaultKey<keyof RadioButtonSize>;
    type?: RadioButtonType;
    onPress: (args: any) => any;
};
export { RadioButtonFactoryProps, RadioButtonProps, RadioButtonSizeProps, RadioButtonShapeVariation, RadioButtonType, };
//# sourceMappingURL=types.d.ts.map