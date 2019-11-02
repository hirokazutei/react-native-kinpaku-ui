import React from 'react';
import { ButtonFactoryProps, ButtonProps as Props, ButtonVariations } from './types';
declare function buttonFactory<Themes, AdditionalPalettes, ButtonSizes>({ themes, sizes, additionalPalettes, defaultType, allowAdditionalPalettes, }: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSizes>): {
    [key in ButtonVariations]: React.FunctionComponent<Props<AdditionalPalettes, ButtonSizes, typeof allowAdditionalPalettes>>;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map