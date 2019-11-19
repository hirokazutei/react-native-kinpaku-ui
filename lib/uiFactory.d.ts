/// <reference types="react" />
import { Themes } from './Theme/types';
import { DefaultFontSizes } from './components/Text/constants';
import { Color, DefaultObject } from './types';
export default function UIFactory<ThemeObject, AdditionalPalettes>(themes: Themes<ThemeObject>, additionalPalettes?: {
    [key in keyof (AdditionalPalettes & DefaultObject<Color>)]: Color;
}): {
    Button: {
        Circular: import("react").FunctionComponent<import("./components/Button/types").ButtonProps<AdditionalPalettes, {
            default: import("./components/Button/types").ButtonSizeProps;
            small: import("./components/Button/types").ButtonSizeProps;
            tiny: import("./components/Button/types").ButtonSizeProps;
            medium: import("./components/Button/types").ButtonSizeProps;
            large: import("./components/Button/types").ButtonSizeProps;
            huge: import("./components/Button/types").ButtonSizeProps;
            massive: import("./components/Button/types").ButtonSizeProps;
        }, false>>;
        Round: import("react").FunctionComponent<import("./components/Button/types").ButtonProps<AdditionalPalettes, {
            default: import("./components/Button/types").ButtonSizeProps;
            small: import("./components/Button/types").ButtonSizeProps;
            tiny: import("./components/Button/types").ButtonSizeProps;
            medium: import("./components/Button/types").ButtonSizeProps;
            large: import("./components/Button/types").ButtonSizeProps;
            huge: import("./components/Button/types").ButtonSizeProps;
            massive: import("./components/Button/types").ButtonSizeProps;
        }, false>>;
        Sharp: import("react").FunctionComponent<import("./components/Button/types").ButtonProps<AdditionalPalettes, {
            default: import("./components/Button/types").ButtonSizeProps;
            small: import("./components/Button/types").ButtonSizeProps;
            tiny: import("./components/Button/types").ButtonSizeProps;
            medium: import("./components/Button/types").ButtonSizeProps;
            large: import("./components/Button/types").ButtonSizeProps;
            huge: import("./components/Button/types").ButtonSizeProps;
            massive: import("./components/Button/types").ButtonSizeProps;
        }, false>>;
    };
    RadioButton: {
        Dot: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, null, false>>;
        Reverse: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, null, false>>;
        Fill: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, null, false>>;
    };
    Touchable: import("react").FunctionComponent<import("./components/Touchable/types").TouchableProps<AdditionalPalettes, {
        default: import("./components/Touchable/types").TouchableAllSizeProps;
        small: import("./components/Touchable/types").TouchableAllSizeProps;
        tiny: import("./components/Touchable/types").TouchableAllSizeProps;
        medium: import("./components/Touchable/types").TouchableAllSizeProps;
        large: import("./components/Touchable/types").TouchableAllSizeProps;
        huge: import("./components/Touchable/types").TouchableAllSizeProps;
        massive: import("./components/Touchable/types").TouchableAllSizeProps;
    }, false>>;
    Title: import("react").FunctionComponent<import("./components/Text/types").TextProps<null, DefaultFontSizes, true>>;
    Heading: import("react").FunctionComponent<import("./components/Text/types").TextProps<null, DefaultFontSizes, true>>;
    SubHeading: import("react").FunctionComponent<import("./components/Text/types").TextProps<null, DefaultFontSizes, true>>;
    Body: import("react").FunctionComponent<import("./components/Text/types").TextProps<null, DefaultFontSizes, true>>;
    Caption: import("react").FunctionComponent<import("./components/Text/types").TextProps<null, DefaultFontSizes, true>>;
    Quote: import("react").FunctionComponent<import("./components/Text/types").TextProps<null, DefaultFontSizes, true>>;
};
//# sourceMappingURL=uiFactory.d.ts.map