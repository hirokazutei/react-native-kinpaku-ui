/// <reference types="react" />
import { FlexAlignType, TouchableOpacityProps, ViewStyle } from 'react-native';
import { AddDefaultToObject, Color, OptionalTrueCondition, UnionDefaultKey, RequiredIfSpecified } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type TouchableTypeVariations = 'Fill' | 'Outline';
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
declare type TouchableFactoryProps<Themes, AdditionalPalettes, TouchableSize, AllowCustomProps> = {
    themes: {
        [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    }>;
    sizes?: RequiredIfSpecified<TouchableSize, {
        [SizeKey in keyof AddDefaultToObject<TouchableSize, TouchableSizeProps>]: TouchableSizeProps;
    }>;
    defaultType?: TouchableTypeVariations;
};
declare type TouchableProps<AdditionalPalettes, TouchableSize, AllowCustomProps> = {
    _customProps?: OptionalTrueCondition<AllowCustomProps, TouchableOpacityProps, never>;
    _customStyle?: OptionalTrueCondition<AllowCustomProps, ViewStyle, never>;
    align?: FlexAlignType;
    children: React.ReactNode;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    isStretched?: boolean;
    size?: UnionDefaultKey<keyof TouchableSize>;
    onPress: (args: any) => any;
};
export { TouchableTypeVariations, TouchableProps, TouchableSizeProps, TouchableFactoryProps, TouchableVerHorSizeProps, TouchableAllSizeProps, };
//# sourceMappingURL=types.d.ts.map