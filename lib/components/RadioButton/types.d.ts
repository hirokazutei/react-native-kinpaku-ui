import { TouchableOpacityProps, ViewStyle, ViewProps } from 'react-native';
import { Color, OptionalTrueCondition, UnionDefaultKey, RequiredIfSpecified, NonExistent } from '../../types';
import { ThemePalette, GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare type RadioButtonShapeVariation = 'Sharp' | 'Round' | 'Circular';
declare type RadioButtonType = 'fill' | 'outline' | 'reverse';
declare type RadioButtonSizeProps = {
    size: number;
    dotSize: number;
    borderThickness: number;
};
declare type RadioButtonFactoryProps<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, RadioButtonSize extends Record<string | string, RadioButtonSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent> = {
    themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>;
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, Required<Record<keyof AdditionalPalettes, Color>>>;
    sizes?: RequiredIfSpecified<RadioButtonSize, Record<UnionDefaultKey<keyof RadioButtonSize>, RadioButtonSizeProps>>;
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultType?: RadioButtonType;
};
declare type RadioButtonProps<AdditionalPalettes extends GenericAdditionalPalette | NonExistent, RadioButtonSize extends Record<string | string, RadioButtonSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent> = {
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