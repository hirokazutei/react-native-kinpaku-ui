import { FlexAlignType, TextProperties, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { AddDefaultToObject, Color, OptionalTrueCondition, UnionDefaultKey, RequiredIfSpecified, Falsy } from '../../types';
import { ThemePalette, Themes as ThemesType } from '../../theme/types';
declare type ButtonShapeVariation = 'Circular' | 'Round' | 'Sharp';
declare type ButtonType = 'fill' | 'clear' | 'outline';
declare type ButtonSizeProps = {
    borderRadius: number;
    fontSize: number;
    paddingHorizontal: number;
    paddingVertical: number;
};
declare type ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSize extends Record<string | string, ButtonSizeProps> | Falsy, AllowCustomProps extends boolean | Falsy> = {
    themes: ThemesType<Themes>;
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, Record<keyof AdditionalPalettes, Color>>;
    sizes?: RequiredIfSpecified<ButtonSize, Record<keyof AddDefaultToObject<ButtonSize, ButtonSizeProps>, ButtonSizeProps>>;
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultType?: ButtonType;
};
declare type ButtonProps<AdditionalPalettes, ButtonSize extends Record<string | string, ButtonSizeProps> | Falsy, AllowCustomProps extends boolean | Falsy> = {
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
export { ButtonFactoryProps, ButtonProps, ButtonShapeVariation, ButtonSizeProps, ButtonType, };
//# sourceMappingURL=types.d.ts.map