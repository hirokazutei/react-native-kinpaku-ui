import { TextVariationProps } from './types';
declare type TextVariations = 'Title' | 'Heading' | 'SubHeading' | 'Body' | 'Caption' | 'Quote';
declare type FontSizes = 'small' | 'medium' | 'large';
declare const DEFAULT_TEXT_VARIATIONS: {
    [textVariation in TextVariations]: TextVariationProps<FontSizes, null>;
};
export { FontSizes, TextVariations, DEFAULT_TEXT_VARIATIONS };
//# sourceMappingURL=constants.d.ts.map