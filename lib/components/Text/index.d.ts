import React from 'react';
import { TextFactoryProps, TextProps as Props } from './types';
declare function textFactory<Themes, AdditionalPalettes, TextVariations, FontSizes extends string | string, EmphasisToggleable>({ themes, additionalPalettes, defaultFontSizeKey, textVariations, }: TextFactoryProps<Themes, AdditionalPalettes, TextVariations, FontSizes, EmphasisToggleable>): {
    [Variation in keyof TextVariations]: React.FunctionComponent<Props<AdditionalPalettes, FontSizes, EmphasisToggleable>>;
};
export default textFactory;
//# sourceMappingURL=index.d.ts.map