import React from 'react';
import { RadioButtonFactoryProps, RadioButtonProps as Props, RadioButtonVariations } from './types';
declare function radioButtonFactory<Themes, AdditionalPalettes, RadioButtonSizes, AllowCustomProps>({ themes, sizes, additionalPalettes, }: RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSizes, AllowCustomProps>): {
    [key in RadioButtonVariations]: React.FunctionComponent<Props<AdditionalPalettes, RadioButtonSizes, AllowCustomProps>>;
};
export default radioButtonFactory;
//# sourceMappingURL=index.d.ts.map