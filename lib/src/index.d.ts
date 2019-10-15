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
    Touchable: {
        Filled: import("react").FunctionComponent<import("./components/Touchable/types").TouchableProps<null, import("./components/Button/types").ButtonSizeKeys>>;
        Bordered: import("react").FunctionComponent<import("./components/Touchable/types").TouchableProps<null, import("./components/Button/types").ButtonSizeKeys>>;
    };
};
//# sourceMappingURL=index.d.ts.map