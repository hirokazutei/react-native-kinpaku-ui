import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { TextFactoryProps, TextProps as Props, TextVariationProps } from './types';
import { DEFAULT_TEXT_VARIATION } from './constants';
import { GenericAdditionalPalette, GenericTheme } from '../../theme/types';
declare function textFactory<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, TextVariation extends Record<string | string, TextVariationProps<FontSizeKey | null, AdditionalPalettes | null>> | NonExistent, FontSizeKey extends string | string | NonExistent, EmphasisToggleable extends boolean | NonExistent, AllowCustomProps extends boolean | NonExistent>({ themes, additionalPalettes, variation, }: TextFactoryProps<Themes, AdditionalPalettes, OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>, FontSizeKey, EmphasisToggleable, AllowCustomProps>): Record<keyof OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>, React.FunctionComponent<Props<AdditionalPalettes, FontSizeKey, EmphasisToggleable, AllowCustomProps>>>;
export default textFactory;
//# sourceMappingURL=index.d.ts.map