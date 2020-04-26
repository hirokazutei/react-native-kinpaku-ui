/// <reference types="react" />
import { FlexAlignType, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Color, OptionalTrueCondition, UnionDefaultKey, RequiredIfSpecified, NonExistent } from '../../types';
import { ThemePalette, GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare type TouchableType = 'fill' | 'outline';
declare type TouchableShapeVariation = 'Sharp' | 'Round' | 'Circular';
declare type VerHor = {
    paddingHorizontal: number;
    paddingVertical: number;
};
declare type Padding = {
    padding: number;
};
declare type TouchableVerHorSizeProps = {
    borderRadius: number;
} & VerHor;
declare type TouchableAllSizeProps = {
    borderRadius: number;
} & Padding;
declare type TouchableSizeProps = TouchableVerHorSizeProps | TouchableAllSizeProps;
declare type TouchableFactoryProps<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, TouchableSize extends Record<string | string, TouchableSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent> = {
    themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>;
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, Record<keyof AdditionalPalettes, Color>>;
    sizes?: RequiredIfSpecified<TouchableSize, Record<UnionDefaultKey<keyof TouchableSize>, TouchableSizeProps>>;
    defaultType?: TouchableType;
};
declare type TouchableProps<AdditionalPalettes extends GenericAdditionalPalette | NonExistent, TouchableSize extends Record<string | string, TouchableSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent> = {
    _customProps?: OptionalTrueCondition<AllowCustomProps, TouchableOpacityProps, never>;
    _customStyle?: OptionalTrueCondition<AllowCustomProps, ViewStyle, never>;
    align?: FlexAlignType;
    children: React.ReactNode;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    isStretched?: boolean;
    size?: UnionDefaultKey<keyof TouchableSize>;
    type?: TouchableType;
    onPress: (args: any) => any;
};
export { TouchableAllSizeProps, TouchableFactoryProps, TouchableProps, TouchableShapeVariation, TouchableSizeProps, TouchableType, TouchableVerHorSizeProps, };
//# sourceMappingURL=types.d.ts.map