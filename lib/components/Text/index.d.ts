import React from 'react';
import { OptionalExistCondition } from '../../types';
import { TextFactoryProps, TextProps as Props } from './types';
import { DEFAULT_TEXT_VARIATION } from './constants';
declare function textFactory<Themes, AdditionalPalettes, TextVariation, FontSize, EmphasisToggleable>({ themes, additionalPalettes, defaultFontSizeKey, textVariation, }: TextFactoryProps<Themes, AdditionalPalettes, OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>, FontSize, EmphasisToggleable>): {
    [Variation in keyof OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>]: React.FunctionComponent<Props<AdditionalPalettes, FontSize, EmphasisToggleable>>;
};
export default textFactory;
//# sourceMappingURL=index.d.ts.map