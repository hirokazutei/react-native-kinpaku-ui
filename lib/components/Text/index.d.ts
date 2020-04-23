import React from 'react';
import { OptionalExistCondition } from '../../types';
import { TextFactoryProps, TextProps as Props } from './types';
import { DEFAULT_TEXT_VARIATION } from './constants';
declare function textFactory<Themes, AdditionalPalettes, TextVariation, FontSize, EmphasisToggleable, AllowCustomProps>({ themes, additionalPalettes, variation, }: TextFactoryProps<Themes, AdditionalPalettes, OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>, FontSize, EmphasisToggleable, AllowCustomProps>): {
    [Variation in keyof OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>]: React.FunctionComponent<Props<AdditionalPalettes, FontSize, EmphasisToggleable, AllowCustomProps>>;
};
export default textFactory;
//# sourceMappingURL=index.d.ts.map