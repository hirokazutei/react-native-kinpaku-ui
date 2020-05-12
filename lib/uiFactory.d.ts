/// <reference types="react" />
import { ThemePalette } from './theme/types';
import { RequiredIfSpecified, UnionDefaultKey } from './types';
declare const UIFactory: <Themes extends Record<string, ThemePalette>, AdditionalPalettes extends void | Record<string, string> | null | undefined>(themes: Record<UnionDefaultKey<keyof Themes>, ThemePalette>, additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, Required<Record<keyof AdditionalPalettes, string>>> | undefined) => {
    Body: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, false, false>>;
    Button: Record<import("./components/Button/types").ButtonShapeVariation, import("react").FunctionComponent<import("./components/Button/types").ButtonProps<AdditionalPalettes, Record<UnionDefaultKey<import("./components/Button/constants").DefaultButtonSize>, import("./components/Button/types").ButtonSizeProps>, false>>>;
    Label: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, false, false>>;
    CheckBox: Record<import("./components/Button/types").ButtonShapeVariation, import("react").FunctionComponent<import("./components/CheckBox/types").CheckBoxProps<AdditionalPalettes, Record<UnionDefaultKey<import("./components/CheckBox/constants").DefaultCheckBoxSize>, import("./components/CheckBox/types").CheckBoxSizeProps>, false>>>;
    Heading: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, false, false>>;
    InputField: Record<import("./components/InputField/types").InputFieldVariation, import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, Record<UnionDefaultKey<import("./components/CheckBox/constants").DefaultCheckBoxSize>, import("./components/InputField/types").InputFieldSizeProps>, false>>>;
    RadioButton: Record<import("./components/Button/types").ButtonShapeVariation, import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, Record<UnionDefaultKey<import("./components/CheckBox/constants").DefaultCheckBoxSize>, import("./components/RadioButton/types").RadioButtonSizeProps>, false>>>;
    SubHeading: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, false, false>>;
    Title: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, false, false>>;
    Touchable: Record<import("./components/Button/types").ButtonShapeVariation, import("react").FunctionComponent<import("./components/Touchable/types").TouchableProps<AdditionalPalettes, Record<UnionDefaultKey<import("./components/Button/constants").DefaultButtonSize>, import("./components/Touchable/types").TouchableSizeProps>, false>>>;
    Quote: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, false, false>>;
};
export default UIFactory;
//# sourceMappingURL=uiFactory.d.ts.map