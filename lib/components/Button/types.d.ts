import { TouchableOpacityProps, TextProperties, ViewStyle, TextStyle, FlexAlignType } from 'react-native';
import { Color, DefaultObject } from '../../types';
import { ThemePalette } from '../../Theme/types';
declare type ButtonVariations = 'Circular' | 'Round' | 'Sharp';
declare type ButtonTypes = 'solid' | 'clear' | 'outline';
declare type ButtonSizeProps = {
    horizontalPadding: number;
    verticalPaddding: number;
    fontSize: number;
    borderRadius: number;
};
declare type ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSizes> = {
    themes: {
        [ThemeKey in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKey in keyof AdditionalPalettes]: Color;
    };
    sizes?: {
        [SizeKey in keyof ButtonSizes & DefaultObject<ButtonSizeProps>]: ButtonSizeProps;
    };
    defaultType?: ButtonTypes;
    allowAdditionalPalettes?: boolean;
};
declare type ButtonProps<AdditionalPalettes, ButtonSizes, AllowAdditionalPalettes> = {
    additionalButtonProps?: AllowAdditionalPalettes extends true ? never : TouchableOpacityProps;
    additionalButtonStyle?: AllowAdditionalPalettes extends true ? never : ViewStyle;
    additionalTextProps?: AllowAdditionalPalettes extends true ? never : TextProperties;
    additionalTextStyle?: AllowAdditionalPalettes extends true ? never : TextStyle;
    align?: FlexAlignType;
    color?: keyof ThemePalette | keyof AdditionalPalettes;
    isDisabled?: boolean;
    isStretched?: boolean;
    size?: keyof ButtonSizes | keyof DefaultObject<ButtonSizeProps>;
    title: string;
    type?: ButtonTypes;
    onPress: (args: any) => any;
};
declare type ButtonSizes = 'tiny' | 'small' | 'medium' | 'default' | 'large' | 'huge' | 'massive';
export { ButtonProps, ButtonVariations, ButtonSizes, ButtonSizeProps, ButtonTypes, ButtonFactoryProps, };
//# sourceMappingURL=types.d.ts.map