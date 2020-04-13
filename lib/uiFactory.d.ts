/// <reference types="react" />
import { Themes } from './theme/types';
import { DefaultObject } from './types';
declare const UIFactory: <ThemeObject, AdditionalPalettes>(themes: Themes<ThemeObject>, additionalPalettes?: { [key in keyof (AdditionalPalettes & DefaultObject<string>)]: string; } | undefined) => {
    Body: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true>>;
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
    Caption: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true>>;
    CheckBox: {
        Circular: import("react").FunctionComponent<import("./components/CheckBox/types").CheckBoxProps<AdditionalPalettes, {
            default: import("./components/CheckBox/types").CheckBoxSizeProps;
            small: import("./components/CheckBox/types").CheckBoxSizeProps;
            medium: import("./components/CheckBox/types").CheckBoxSizeProps;
            large: import("./components/CheckBox/types").CheckBoxSizeProps;
        }, false>>;
        Round: import("react").FunctionComponent<import("./components/CheckBox/types").CheckBoxProps<AdditionalPalettes, {
            default: import("./components/CheckBox/types").CheckBoxSizeProps;
            small: import("./components/CheckBox/types").CheckBoxSizeProps;
            medium: import("./components/CheckBox/types").CheckBoxSizeProps;
            large: import("./components/CheckBox/types").CheckBoxSizeProps;
        }, false>>;
        Sharp: import("react").FunctionComponent<import("./components/CheckBox/types").CheckBoxProps<AdditionalPalettes, {
            default: import("./components/CheckBox/types").CheckBoxSizeProps;
            small: import("./components/CheckBox/types").CheckBoxSizeProps;
            medium: import("./components/CheckBox/types").CheckBoxSizeProps;
            large: import("./components/CheckBox/types").CheckBoxSizeProps;
        }, false>>;
    };
    Heading: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true>>;
    InputField: {
        number: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        email: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        name: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        password: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        username: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        url: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        creditCardNumber: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        oneTimeCode: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        decimal: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        freeField: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        oneTimeNumberCode: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        paragragh: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        passcode: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
        phone: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }>>;
    };
    RadioButton: {
        Fill: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, {
            default: import("./components/RadioButton/types").RadioButtonSizeProps;
            small: import("./components/RadioButton/types").RadioButtonSizeProps;
            medium: import("./components/RadioButton/types").RadioButtonSizeProps;
            large: import("./components/RadioButton/types").RadioButtonSizeProps;
        }, false>>;
        Outline: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, {
            default: import("./components/RadioButton/types").RadioButtonSizeProps;
            small: import("./components/RadioButton/types").RadioButtonSizeProps;
            medium: import("./components/RadioButton/types").RadioButtonSizeProps;
            large: import("./components/RadioButton/types").RadioButtonSizeProps;
        }, false>>;
        Reverse: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, {
            default: import("./components/RadioButton/types").RadioButtonSizeProps;
            small: import("./components/RadioButton/types").RadioButtonSizeProps;
            medium: import("./components/RadioButton/types").RadioButtonSizeProps;
            large: import("./components/RadioButton/types").RadioButtonSizeProps;
        }, false>>;
    };
    SubHeading: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true>>;
    Title: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true>>;
    Touchable: {
        Fill?: import("react").FunctionComponent<import("./components/Touchable/types").TouchableProps<AdditionalPalettes, {
            default: import("./components/Touchable/types").TouchableAllSizeProps;
            small: import("./components/Touchable/types").TouchableAllSizeProps;
            tiny: import("./components/Touchable/types").TouchableAllSizeProps;
            medium: import("./components/Touchable/types").TouchableAllSizeProps;
            large: import("./components/Touchable/types").TouchableAllSizeProps;
            huge: import("./components/Touchable/types").TouchableAllSizeProps;
            massive: import("./components/Touchable/types").TouchableAllSizeProps;
        }, false>> | undefined;
        Outline?: import("react").FunctionComponent<import("./components/Touchable/types").TouchableProps<AdditionalPalettes, {
            default: import("./components/Touchable/types").TouchableAllSizeProps;
            small: import("./components/Touchable/types").TouchableAllSizeProps;
            tiny: import("./components/Touchable/types").TouchableAllSizeProps;
            medium: import("./components/Touchable/types").TouchableAllSizeProps;
            large: import("./components/Touchable/types").TouchableAllSizeProps;
            huge: import("./components/Touchable/types").TouchableAllSizeProps;
            massive: import("./components/Touchable/types").TouchableAllSizeProps;
        }, false>> | undefined;
    };
    Quote: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true>>;
};
export default UIFactory;
//# sourceMappingURL=uiFactory.d.ts.map