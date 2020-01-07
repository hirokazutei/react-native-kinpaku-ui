import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { ThemePalette } from '../../theme/types';
import { Color, AddDefaultToObject, OptionalTrueCondition, UnionDefaultKey } from '../../types';
declare type CheckBoxVariations = 'Outline' | 'Fill' | 'Reverse';
declare type CheckBoxShapes = 'Sharp' | 'Rounded' | 'Circular';
declare type CheckBoxSizeProps = {
    size: number;
};
declare type CheckBoxFactoryProps<Themes, AdditionalPalettes, CheckBoxSizes, AllowCustomProps> = {
    themes: {
        [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    sizes?: {
        [SizeKey in keyof AddDefaultToObject<CheckBoxSizes, CheckBoxSizeProps>]: CheckBoxSizeProps;
    };
    checkBoxShape?: CheckBoxShapes;
};
declare type CheckBoxProps<AdditionalPalettes, CheckBoxSizes, AllowCustomProps> = {
    active?: boolean;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    size?: UnionDefaultKey<keyof CheckBoxSizes>;
    onPress: (args: any) => any;
    _customOuterViewStyle?: OptionalTrueCondition<AllowCustomProps, never, ViewStyle>;
    _customOuterViewProps?: OptionalTrueCondition<AllowCustomProps, never, TouchableOpacityProps>;
};
export { CheckBoxProps, CheckBoxShapes, CheckBoxSizeProps, CheckBoxVariations, CheckBoxFactoryProps, };
//# sourceMappingURL=types.d.ts.map