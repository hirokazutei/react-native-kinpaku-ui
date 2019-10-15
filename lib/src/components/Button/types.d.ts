import { TouchableOpacityProps, TextProperties, ViewStyle, TextStyle, FlexAlignType } from 'react-native';
import { Color, DefaultObject } from '../../types';
import { ThemePalette } from '../../Theme/types';
declare type ButtonShapes = 'circular' | 'round' | 'sharp';
declare type ButtonShapeOptions = 'Circular' | 'Round' | 'Sharp';
declare type ButtonType = 'solid' | 'clear' | 'outline';
declare type ButtonSizeProps = {
    horizontalPadding: number;
    verticalPaddding: number;
    fontSize: number;
    borderRadius: number;
};
declare type ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSizes> = {
    themes: {
        [ThemeKeys in keyof Themes & DefaultObject<ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    buttonSizes?: {
        [SizeKey in keyof ButtonSizes & DefaultObject<ButtonSizeProps>]: ButtonSizeProps;
    };
    defaultButtonType?: ButtonType;
};
declare type ButtonProps<AdditionalPalettes, ButtonSizes> = {
    additionalButtonProps?: TouchableOpacityProps;
    additionalButtonStyle?: ViewStyle;
    additionalTextProps?: TextProperties;
    additionalTextStyle?: TextStyle;
    align?: FlexAlignType;
    color?: keyof ThemePalette | keyof AdditionalPalettes;
    isDisabled?: boolean;
    isStretched?: boolean;
    size?: keyof ButtonSizes | keyof DefaultObject<ButtonSizeProps>;
    title: string;
    type?: ButtonType;
    onPress: (args: any) => any;
};
declare type ButtonSizeKeys = 'tiny' | 'small' | 'medium' | 'default' | 'large' | 'huge' | 'massive';
export { ButtonProps, ButtonShapeOptions, ButtonShapes, ButtonSizeKeys, ButtonSizeProps, ButtonType, ButtonFactoryProps, };
//# sourceMappingURL=types.d.ts.map