import React from "react";
import { FactoryProps, ButtonProps as Props } from "./types";
declare function buttonFactory<PaletteObjectType, ButtonPalettes, ButtonSizes>({
  themes,
  buttonSizes,
  buttonPalettes,
  defaultButtonType
}: FactoryProps<PaletteObjectType, ButtonPalettes, ButtonSizes>): {
  Circular:
    | React.FunctionComponent<Props<ButtonPalettes, ButtonSizes>>
    | undefined;
  Round:
    | React.FunctionComponent<Props<ButtonPalettes, ButtonSizes>>
    | undefined;
  Sharp:
    | React.FunctionComponent<Props<ButtonPalettes, ButtonSizes>>
    | undefined;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map
