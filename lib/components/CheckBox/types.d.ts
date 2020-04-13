import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { AddDefaultToObject, Color, OptionalTrueCondition, UnionDefaultKey } from '../../types';
import { ThemePalette } from '../../theme/types';
declare type CheckBoxShapeVariation = 'Sharp' | 'Round' | 'Circular';
declare type CheckBoxType = 'outline' | 'fill' | 'reverse';
declare type CheckBoxSizeProps = {
    size: number;
};
declare type CheckBoxFactoryProps<Themes, AdditionalPalettes, CheckBoxSize, AllowCustomProps> = {
    themes: {
        [ThemeKeys in keyof AddDefaultToObject<Themes, ThemePalette>]: ThemePalette;
    };
    additionalPalettes?: {
        [AdditionalPaletteKeys in keyof AdditionalPalettes]: Color;
    };
    sizes?: {
        [SizeKey in keyof AddDefaultToObject<CheckBoxSize, CheckBoxSizeProps>]: CheckBoxSizeProps;
    };
    defaultColor?: keyof (ThemePalette & AdditionalPalettes);
    defaultType?: CheckBoxType;
};
declare type CheckBoxProps<AdditionalPalettes, CheckBoxSize, AllowCustomProps> = {
    _customOuterViewProps?: OptionalTrueCondition<AllowCustomProps, never, TouchableOpacityProps>;
    _customOuterViewStyle?: OptionalTrueCondition<AllowCustomProps, never, ViewStyle>;
    active?: boolean;
    color?: keyof (ThemePalette & AdditionalPalettes);
    isDisabled?: boolean;
    size?: UnionDefaultKey<keyof CheckBoxSize>;
    type?: CheckBoxType;
    onPress: (args: any) => any;
};
export { CheckBoxProps, CheckBoxShapeVariation, CheckBoxSizeProps, CheckBoxFactoryProps, CheckBoxType, };
//# sourceMappingURL=types.d.ts.map