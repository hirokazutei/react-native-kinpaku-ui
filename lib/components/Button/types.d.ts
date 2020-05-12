import { FlexAlignType, TextProperties, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Color, OptionalTrueCondition, UnionDefaultKey, RequiredIfSpecified, NonExistent } from '../../types';
import { ThemePalette, Themes as ThemesType, GenericTheme, GenericAdditionalPalette, DefaultTheme } from '../../theme/types';
import { PaddingSpacing } from '../../common/spacing';
declare type ButtonShapeVariation = 'Circular' | 'Round' | 'Sharp';
declare type ButtonType = 'fill' | 'clear' | 'outline';
declare type ButtonSizeProps = {
    borderRadius: number;
    fontSize: number;
    fontWeight?: TextStyle['fontWeight'];
    buttonSpacing?: PaddingSpacing;
};
declare type ButtonFactoryProps<Themes extends GenericTheme = DefaultTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null, ButtonSize extends Record<string | string, ButtonSizeProps> | NonExistent = null, AllowCustomProps extends boolean | NonExistent = false> = {
    themes: ThemesType<Themes>;
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, Record<keyof AdditionalPalettes, Color>>;
    sizes?: RequiredIfSpecified<ButtonSize, Record<UnionDefaultKey<keyof ButtonSize>, ButtonSizeProps>>;
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultType?: ButtonType;
};
declare type ButtonProps<AdditionalPalettes extends Record<string, Color> | NonExistent = null, ButtonSize extends Record<string | string, ButtonSizeProps> | NonExistent = null, AllowCustomProps extends boolean | NonExistent = false> = {
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