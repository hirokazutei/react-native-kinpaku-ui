import { FlexAlignType, TextProperties, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { AddDefaultToObject, Color, OptionalTrueCondition, UnionDefaultKey, RequiredIfSpecified } from '../../types';
import { ThemePalette, Themes as ThemesType } from '../../theme/types';
declare type ButtonShapeVariation = 'Circular' | 'Round' | 'Sharp';
declare type ButtonType = 'fill' | 'clear' | 'outline';
declare type ButtonSizeProps = {
    borderRadius: number;
    fontSize: number;
    paddingHorizontal: number;
    paddingVertical: number;
};
declare type ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSize, AllowCustomProps> = {
    themes: ThemesType<Themes>;
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, {
        [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
    }>;
    sizes?: RequiredIfSpecified<ButtonSize, {
        [SizeKey in keyof AddDefaultToObject<ButtonSize, ButtonSizeProps>]: ButtonSizeProps;
    }>;
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultType?: ButtonType;
};
declare type ButtonProps<AdditionalPalettes, ButtonSize, AllowCustomProps> = {
    _customButtonProps?: OptionalTrueCondition<AllowCustomProps, TouchableOpacityProps, never>;
    _customButtonStyle?: OptionalTrueCondition<AllowCustomProps, ViewStyle, never>;
    _customTextProps?: OptionalTrueCondition<AllowCustomProps, TextProperties, never>;
    _customTextStyle?: OptionalTrueCondition<AllowCustomProps, TextStyle, never>;
    align?: FlexAlignType;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    isStretched?: boolean;
    size?: UnionDefaultKey<keyof ButtonSize>;
    label: string;
    type?: ButtonType;
    onPress: (args: any) => any;
};
export { ButtonProps, ButtonShapeVariation, ButtonSizeProps, ButtonType, ButtonFactoryProps, };
//# sourceMappingURL=types.d.ts.map