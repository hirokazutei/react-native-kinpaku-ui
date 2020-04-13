import { UnionDefaultKey } from '../../types';
import { InputFieldSizeProps, InputFieldType, InputFieldVariation, InputFieldVariationProps } from './types';
declare type DefaultInputFieldSize = 'medium';
declare const DEFAULT_INPUT_FIELD_SIZE: {
    [key in UnionDefaultKey<DefaultInputFieldSize>]: InputFieldSizeProps;
};
declare const DEFAULT_INPUT_FIELD_BORDER_WIDTH = 2;
declare const DEFAULT_INPUT_VARIATION_SETTING: {
    [key in InputFieldVariation]: InputFieldVariationProps;
};
declare const INPUT_FIELD_TYPE: Array<InputFieldType>;
export { DEFAULT_INPUT_FIELD_BORDER_WIDTH, DEFAULT_INPUT_FIELD_SIZE, DEFAULT_INPUT_VARIATION_SETTING, INPUT_FIELD_TYPE, InputFieldVariation, };
//# sourceMappingURL=constants.d.ts.map