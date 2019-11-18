import React from 'react';
import { ButtonFactoryProps, ButtonProps as Props, ButtonVariations } from './types';
declare function buttonFactory<Themes, AdditionalPalettes, ButtonSizes, AllowCustomProps>({ themes, sizes, additionalPalettes, defaultType, }: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSizes, AllowCustomProps>): {
    [key in ButtonVariations]: React.FunctionComponent<Props<AdditionalPalettes, ButtonSizes, AllowCustomProps>>;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map