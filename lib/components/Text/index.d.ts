import React from 'react';
import { OptionalExistCondition } from '../../types';
import { TextFactoryProps, TextProps as Props } from './types';
import { DEFAULT_TEXT_VARIATION } from './constants';
declare function textFactory<Themes, AdditionalPalettes, TextVariation, FontSize, EmphasisToggleable, AllowCustomProps>({ themes, additionalPalettes, defaultFontSizeKey, textVariation, }: TextFactoryProps<Themes, AdditionalPalettes, OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>, OptionalExistCondition<FontSize, FontSize, null>, EmphasisToggleable, AllowCustomProps>): {
    [Variation in keyof OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<FontSize, FontSize, null>, EmphasisToggleable, AllowCustomProps>>;
};
export default textFactory;
//# sourceMappingURL=index.d.ts.map