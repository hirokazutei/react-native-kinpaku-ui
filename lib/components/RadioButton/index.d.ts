import React from 'react';
import { RadioButtonFactoryProps, RadioButtonProps as Props, RadioButtonVariations } from './types';
declare function radioButtonFactory<Themes, AdditionalPalettes, RadioButtonSizes>({ themes, sizes, additionalPalettes, allowCustomProps, }: RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSizes>): {
    [key in RadioButtonVariations]: React.FunctionComponent<Props<AdditionalPalettes, RadioButtonSizes, typeof allowCustomProps>>;
};
export default radioButtonFactory;
//# sourceMappingURL=index.d.ts.map