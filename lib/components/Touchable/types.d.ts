/// <reference types="react" />
import { FlexAlignType, TouchableOpacityProps, ViewStyle } from 'react-native';
import { Color, OptionalTrueCondition, UnionDefaultKey, RequiredIfSpecified, NonExistent } from '../../types';
import { ThemePalette, GenericTheme, GenericAdditionalPalette, DefaultTheme } from '../../theme/types';
import { PaddingSpacing } from '../../common/spacing';
declare type TouchableType = 'fill' | 'outline' | 'clear';
declare type TouchableShapeVariation = 'Sharp' | 'Round' | 'Circular';
declare type TouchableSizeProps = {
    borderRadius: number;
    touchableSpacing?: PaddingSpacing;
};
declare type TouchableFactoryProps<Themes extends GenericTheme = DefaultTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null, TouchableSize extends Record<string | string, TouchableSizeProps> | NonExistent = null, AllowCustomProps extends boolean | NonExistent = false> = {
    themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>;
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, Record<keyof AdditionalPalettes, Color>>;
    sizes?: RequiredIfSpecified<TouchableSize, Record<UnionDefaultKey<keyof TouchableSize>, TouchableSizeProps>>;
    defaultType?: TouchableType;
};
declare type TouchableProps<AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null, TouchableSize extends Record<string | string, TouchableSizeProps> | NonExistent = null, AllowCustomProps extends boolean | NonExistent = null> = {
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
export { TouchableFactoryProps, TouchableProps, TouchableShapeVariation, TouchableSizeProps, TouchableType, };
//# sourceMappingURL=types.d.ts.map