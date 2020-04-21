/// <reference types="react" />
import { Themes } from './theme/types';
import { DefaultObject, RequiredIfSpecified } from './types';
declare const UIFactory: <ThemeObject, AdditionalPalettes>(themes: Themes<ThemeObject>, additionalPalettes?: RequiredIfSpecified<AdditionalPalettes, { [key in keyof (AdditionalPalettes & DefaultObject<string>)]: string; }> | undefined) => {
    Body: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true, false>>;
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
    Label: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true, false>>;
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
    Heading: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true, false>>;
    InputField: {
        number: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        email: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        name: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        password: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        username: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        url: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        creditCardNumber: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        oneTimeCode: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        decimal: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        freeField: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        oneTimeNumberCode: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        paragraph: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        passcode: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
        phone: import("react").FunctionComponent<import("./components/InputField/types").InputFieldProps<AdditionalPalettes, {
            default: import("./components/InputField/types").InputFieldSizeProps;
            medium: import("./components/InputField/types").InputFieldSizeProps;
        }, false>>;
    };
    RadioButton: {
        Circular: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, {
            default: import("./components/RadioButton/types").RadioButtonSizeProps;
            small: import("./components/RadioButton/types").RadioButtonSizeProps;
            medium: import("./components/RadioButton/types").RadioButtonSizeProps;
            large: import("./components/RadioButton/types").RadioButtonSizeProps;
        }, false>>;
        Round: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, {
            default: import("./components/RadioButton/types").RadioButtonSizeProps;
            small: import("./components/RadioButton/types").RadioButtonSizeProps;
            medium: import("./components/RadioButton/types").RadioButtonSizeProps;
            large: import("./components/RadioButton/types").RadioButtonSizeProps;
        }, false>>;
        Sharp: import("react").FunctionComponent<import("./components/RadioButton/types").RadioButtonProps<AdditionalPalettes, {
            default: import("./components/RadioButton/types").RadioButtonSizeProps;
            small: import("./components/RadioButton/types").RadioButtonSizeProps;
            medium: import("./components/RadioButton/types").RadioButtonSizeProps;
            large: import("./components/RadioButton/types").RadioButtonSizeProps;
        }, false>>;
    };
    SubHeading: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true, false>>;
    Title: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true, false>>;
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
    Quote: import("react").FunctionComponent<import("./components/Text/types").TextProps<AdditionalPalettes, null, true, false>>;
};
export default UIFactory;
//# sourceMappingURL=uiFactory.d.ts.map