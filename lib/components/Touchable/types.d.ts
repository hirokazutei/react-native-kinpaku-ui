/// <reference types="react" />
import { TouchableOpacityProps, ViewStyle, FlexAlignType } from 'react-native';
import { AddDefaultToObject, Color, OptionalTrueCondition, UnionDefaultKey } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type TouchableTypes = 'solid' | 'outline';
declare type VerHor = {
    horizontalPadding: number;
    verticalPadding: number;
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
declare type TouchableFactoryProps<Themes, AdditionalPalettes, TouchableSizes, AllowCustomProps> = {
    themes: {
        [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    sizes?: {
        [SizeKey in keyof AddDefaultToObject<TouchableSizes, TouchableSizeProps>]: TouchableSizeProps;
    };
    defaultType?: TouchableTypes;
};
declare type TouchableProps<AdditionalPalettes, TouchableSizes, AllowCustomProps> = {
    _additionalProps?: OptionalTrueCondition<AllowCustomProps, never, TouchableOpacityProps>;
    _additionalStyle?: OptionalTrueCondition<AllowCustomProps, never, ViewStyle>;
    align?: FlexAlignType;
    children: React.ReactNode;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    isStretched?: boolean;
    size?: UnionDefaultKey<keyof TouchableSizes>;
    type?: TouchableTypes;
    onPress: (args: any) => any;
};
export { TouchableTypes, TouchableProps, TouchableSizeProps, TouchableFactoryProps, TouchableVerHorSizeProps, TouchableAllSizeProps, };
//# sourceMappingURL=types.d.ts.map