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
        }, boolean | undefined>>;
        Round: import("react").FunctionComponent<import("./components/Button/types").ButtonProps<null, {
            default: import("./components/Button/types").ButtonSizeProps;
            small: import("./components/Button/types").ButtonSizeProps;
            tiny: import("./components/Button/types").ButtonSizeProps;
            medium: import("./components/Button/types").ButtonSizeProps;
            large: import("./components/Button/types").ButtonSizeProps;
            huge: import("./components/Button/types").ButtonSizeProps;
            massive: import("./components/Button/types").ButtonSizeProps;
        }, boolean | undefined>>;
        Sharp: import("react").FunctionComponent<import("./components/Button/types").ButtonProps<null, {
            default: import("./components/Button/types").ButtonSizeProps;
            small: import("./components/Button/types").ButtonSizeProps;
            tiny: import("./components/Button/types").ButtonSizeProps;
            medium: import("./components/Button/types").ButtonSizeProps;
            large: import("./components/Button/types").ButtonSizeProps;
            huge: import("./components/Button/types").ButtonSizeProps;
            massive: import("./components/Button/types").ButtonSizeProps;
        }, boolean | undefined>>;
    };
    Touchable: import("react").FunctionComponent<import("./components/Touchable/types").TouchableProps<null, {
        default: import("./components/Touchable/types").TouchableAllSizeProps;
        small: import("./components/Touchable/types").TouchableAllSizeProps;
        tiny: import("./components/Touchable/types").TouchableAllSizeProps;
        medium: import("./components/Touchable/types").TouchableAllSizeProps;
        large: import("./components/Touchable/types").TouchableAllSizeProps;
        huge: import("./components/Touchable/types").TouchableAllSizeProps;
        massive: import("./components/Touchable/types").TouchableAllSizeProps;
    }, boolean | undefined>>;
};
//# sourceMappingURL=uiFactory.d.ts.map