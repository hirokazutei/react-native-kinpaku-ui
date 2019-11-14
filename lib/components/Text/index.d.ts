import React from 'react';
import { TextFactoryProps, TextProps as Props } from './types';
declare function textFactory<Themes, AdditionalPalettes, TextVariations, FontSizes>({ themes, additionalPalettes, defaultFontSizeKey, textVariations, }: TextFactoryProps<Themes, AdditionalPalettes, TextVariations, FontSizes>): {
    [Variation in keyof TextVariations]: React.FunctionComponent<Props<Themes, AdditionalPalettes, FontSizes, undefined | boolean, undefined | boolean, undefined | boolean, undefined | boolean>>;
};
export default textFactory;
//# sourceMappingURL=index.d.ts.map