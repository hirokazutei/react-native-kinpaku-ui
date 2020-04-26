import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { Color, OptionalTrueCondition, UnionDefaultKey, RequiredIfSpecified, NonExistent } from '../../types';
import { ThemePalette, Themes as ThemesType, GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare type CheckBoxShapeVariation = 'Sharp' | 'Round' | 'Circular';
declare type CheckBoxType = 'outline' | 'fill' | 'reverse';
declare type CheckBoxSizeProps = {
    size: number;
};
declare type CheckBoxFactoryProps<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, CheckBoxSize extends Record<string, CheckBoxSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent> = {
    themes: ThemesType<Themes>;
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, Record<keyof AdditionalPalettes, Color>>;
    sizes?: RequiredIfSpecified<CheckBoxSize, Record<UnionDefaultKey<keyof CheckBoxSize>, CheckBoxSizeProps>>;
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultType?: CheckBoxType;
};
declare type CheckBoxProps<AdditionalPalettes extends GenericAdditionalPalette | NonExistent, CheckBoxSize extends Record<string, CheckBoxSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent> = {
    _customOuterViewProps?: OptionalTrueCondition<AllowCustomProps, TouchableOpacityProps, never>;
    _customOuterViewStyle?: OptionalTrueCondition<AllowCustomProps, ViewStyle, never>;
    active?: boolean;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    size?: UnionDefaultKey<keyof CheckBoxSize>;
    type?: CheckBoxType;
    onPress: (args: any) => any;
};
export { CheckBoxFactoryProps, CheckBoxProps, CheckBoxShapeVariation, CheckBoxSizeProps, CheckBoxType, };
//# sourceMappingURL=types.d.ts.map