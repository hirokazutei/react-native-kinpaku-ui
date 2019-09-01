import React from "react";
import { FactoryProps, ButtonProps as Props } from "./types";
declare function buttonFactory<PaletteObjectType, ButtonPalette, ButtonSizes>({ themes, buttonSizes, buttonPalettes, defaultButtonType }: FactoryProps<PaletteObjectType, ButtonPalette, ButtonSizes>): {
    Circular: React.FunctionComponent<Props<ButtonPalette, ButtonSizes>> | undefined;
    Round: React.FunctionComponent<Props<ButtonPalette, ButtonSizes>> | undefined;
    Sharp: React.FunctionComponent<Props<ButtonPalette, ButtonSizes>> | undefined;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map