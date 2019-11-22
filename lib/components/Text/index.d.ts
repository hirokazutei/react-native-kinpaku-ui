import React from 'react';
import { TextFactoryProps, TextProps as Props } from './types';
import { OptionalExistCondition } from '../../types';
import { DEFAULT_TEXT_VARIATIONS } from './constants';
declare function textFactory<Themes, AdditionalPalettes, TextVariations, FontSizes, EmphasisToggleable>({ themes, additionalPalettes, defaultFontSizeKey, textVariations, }: TextFactoryProps<Themes, AdditionalPalettes, OptionalExistCondition<TextVariations, typeof DEFAULT_TEXT_VARIATIONS, TextVariations>, FontSizes, EmphasisToggleable>): {
    [Variation in keyof OptionalExistCondition<TextVariations, typeof DEFAULT_TEXT_VARIATIONS, TextVariations>]: React.FunctionComponent<Props<AdditionalPalettes, FontSizes, EmphasisToggleable>>;
};
export default textFactory;
//# sourceMappingURL=index.d.ts.map