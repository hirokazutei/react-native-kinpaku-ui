import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { TextFactoryProps, TextProps as Props, TextVariationProps } from './types';
import { DEFAULT_TEXT_VARIATION } from './constants';
import { GenericAdditionalPalette, GenericTheme, DefaultTheme } from '../../theme/types';
declare function textFactory<Themes extends GenericTheme = DefaultTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null, TextVariation extends Record<string | string, TextVariationProps<FontSizeKey | null, AdditionalPalettes | null>> | NonExistent = null, FontSizeKey extends string | string | NonExistent = null, EmphasisDisabled extends boolean | NonExistent = false, AllowCustomProps extends boolean | NonExistent = false>({ themes, additionalPalettes, variation, }: TextFactoryProps<Themes, AdditionalPalettes, OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>, FontSizeKey, EmphasisDisabled, AllowCustomProps>): Record<keyof OptionalExistCondition<TextVariation, TextVariation, typeof DEFAULT_TEXT_VARIATION>, React.FunctionComponent<Props<AdditionalPalettes, FontSizeKey, EmphasisDisabled, AllowCustomProps>>>;
export default textFactory;
//# sourceMappingURL=index.d.ts.map