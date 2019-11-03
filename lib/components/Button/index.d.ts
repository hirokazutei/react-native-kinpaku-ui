import React from 'react';
import { ButtonFactoryProps, ButtonProps as Props, ButtonVariations } from './types';
declare function buttonFactory<Themes, AdditionalPalettes, ButtonSizes>({ themes, sizes, additionalPalettes, defaultType, allowCustomProps, }: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSizes>): {
    [key in ButtonVariations]: React.FunctionComponent<Props<AdditionalPalettes, ButtonSizes, typeof allowCustomProps>>;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map