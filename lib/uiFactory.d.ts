/// <reference types="react" />
import { Themes } from './Theme/types';
export default function UIFactory<ThemeObject>(themes: Themes<ThemeObject>): {
    Button: {
        Circular: import("react").FunctionComponent<import("./components/Button/types").ButtonProps<null, {
            default: import("./components/Button/types").ButtonSizeProps;
            small: import("./components/Button/types").ButtonSizeProps;
            tiny: import("./components/Button/types").ButtonSizeProps;
            medium: import("./components/Button/types").ButtonSizeProps;
            large: import("./components/Button/types").ButtonSizeProps;
            huge: import("./components/Button/types").ButtonSizeProps;
            massive: import("./components/Button/types").ButtonSizeProps;
        }>>;
        Round: import("react").FunctionComponent<import("./components/Button/types").ButtonProps<null, {
            default: import("./components/Button/types").ButtonSizeProps;
            small: import("./components/Button/types").ButtonSizeProps;
            tiny: import("./components/Button/types").ButtonSizeProps;
            medium: import("./components/Button/types").ButtonSizeProps;
            large: import("./components/Button/types").ButtonSizeProps;
            huge: import("./components/Button/types").ButtonSizeProps;
            massive: import("./components/Button/types").ButtonSizeProps;
        }>>;
        Sharp: import("react").FunctionComponent<import("./components/Button/types").ButtonProps<null, {
            default: import("./components/Button/types").ButtonSizeProps;
            small: import("./components/Button/types").ButtonSizeProps;
            tiny: import("./components/Button/types").ButtonSizeProps;
            medium: import("./components/Button/types").ButtonSizeProps;
            large: import("./components/Button/types").ButtonSizeProps;
            huge: import("./components/Button/types").ButtonSizeProps;
            massive: import("./components/Button/types").ButtonSizeProps;
        }>>;
    };
    Touchable: import("react").FunctionComponent<import("./components/Touchable/types").TouchableProps<null, {
        default: import("./components/Touchable/types").TouchableAllPaddingProps;
        small: import("./components/Touchable/types").TouchableAllPaddingProps;
        tiny: import("./components/Touchable/types").TouchableAllPaddingProps;
        medium: import("./components/Touchable/types").TouchableAllPaddingProps;
        large: import("./components/Touchable/types").TouchableAllPaddingProps;
        huge: import("./components/Touchable/types").TouchableAllPaddingProps;
        massive: import("./components/Touchable/types").TouchableAllPaddingProps;
    }>>;
};
//# sourceMappingURL=uiFactory.d.ts.map