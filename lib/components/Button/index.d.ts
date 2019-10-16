import React from 'react';
import { ButtonFactoryProps, ButtonProps as Props, ButtonShapeOptions } from './types';
declare function buttonFactory<PaletteObjectType, AdditionalPalettes, ButtonSizes>({ themes, buttonSizes, additionalPalettes, defaultButtonType, }: ButtonFactoryProps<PaletteObjectType, AdditionalPalettes, ButtonSizes>): {
    [key in ButtonShapeOptions]: React.FunctionComponent<Props<AdditionalPalettes, ButtonSizes>>;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map