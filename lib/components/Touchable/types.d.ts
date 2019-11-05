/// <reference types="react" />
import { TouchableOpacityProps, ViewStyle, FlexAlignType } from 'react-native';
import { Color, DefaultObject } from '../../types';
import { ThemePalette } from '../../Theme/types';
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
declare type TouchableFactoryProps<Themes, AdditionalPalettes, TouchableSizes> = {
    themes: {
        [ThemeKeys in keyof (Themes & DefaultObject<ThemePalette>)]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    sizes?: {
        [SizeKey in keyof (TouchableSizes & DefaultObject<TouchableSizeProps>)]: TouchableSizeProps;
    };
    defaultType?: TouchableTypes;
    allowCustomProps?: boolean;
};
declare type TouchableProps<AdditionalPalettes, TouchableSizes, AllowCustomProps> = {
    _additionalProps?: AllowCustomProps extends true ? TouchableOpacityProps : never;
    _additionalStyle?: AllowCustomProps extends true ? ViewStyle : never;
    align?: FlexAlignType;
    children: React.ReactNode;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    isStretched?: boolean;
    size?: keyof (TouchableSizes & DefaultObject<TouchableSizeProps>);
    type?: TouchableTypes;
    onPress: (args: any) => any;
};
declare type TouchableSizes = 'tiny' | 'small' | 'medium' | 'default' | 'large' | 'huge' | 'massive';
export { TouchableTypes, TouchableSizes, TouchableProps, TouchableSizeProps, TouchableFactoryProps, TouchableVerHorSizeProps, TouchableAllSizeProps, };
//# sourceMappingURL=types.d.ts.map