/// <reference types="react" />
import { TouchableOpacityProps, ViewStyle, FlexAlignType } from 'react-native';
import { Color, DefaultObject } from '../../types';
import { ThemePalette } from '../../Theme/types';
declare type TouchableType = 'solid' | 'outline';
declare type VerHor = {
    horizontalPadding: number;
    verticalPadding: number;
};
declare type Padding = {
    padding: number;
};
declare type TouchableVerHorPaddingProps = {
    borderRadius: number;
} & VerHor;
declare type TouchableAllPaddingProps = {
    borderRadius: number;
} & Padding;
declare type TouchablePaddingProps = TouchableVerHorPaddingProps | TouchableAllPaddingProps;
declare type TouchableFactoryProps<Themes, AdditionalPalettes, TouchablePaddingSizes> = {
    themes: {
        [ThemeKeys in keyof Themes | keyof DefaultObject<ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    touchablePaddingSizes?: {
        [SizeKey in keyof TouchablePaddingSizes | keyof DefaultObject<TouchablePaddingProps>]: TouchablePaddingProps;
    };
    defaultTouchableType?: TouchableType;
};
declare type TouchableProps<AdditionalPalettes, TouchablePaddingSizes> = {
    additionalProps?: TouchableOpacityProps;
    additionalStyle?: ViewStyle;
    align?: FlexAlignType;
    children: React.ReactElement;
    color?: keyof ThemePalette | keyof AdditionalPalettes;
    isDisabled?: boolean;
    isStretched?: boolean;
    size?: keyof TouchablePaddingSizes | keyof DefaultObject<TouchablePaddingProps>;
    type?: TouchableType;
    onPress: (args: any) => any;
};
declare type TouchablePaddingKeys = 'tiny' | 'small' | 'medium' | 'default' | 'large' | 'huge' | 'massive';
export { TouchableType, TouchablePaddingKeys, TouchableProps, TouchablePaddingProps, TouchableFactoryProps, TouchableVerHorPaddingProps, TouchableAllPaddingProps, };
//# sourceMappingURL=types.d.ts.map