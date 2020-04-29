import { UnionDefaultKey } from '../../types';
import { InputFieldSizeProps, InputFieldVariation, InputFieldVariationProps, InputFieldShape } from './types';
declare type DefaultInputFieldSize = 'small' | 'medium' | 'large';
declare const DEFAULT_INPUT_FIELD_SIZE: Record<UnionDefaultKey<DefaultInputFieldSize>, InputFieldSizeProps>;
declare const DEFAULT_INPUT_FIELD_BORDER_WIDTH = 2;
declare const DEFAULT_INPUT_VARIATION_SETTING: Record<InputFieldVariation, InputFieldVariationProps>;
declare const INPUT_FIELD_SHAPE: Array<InputFieldShape>;
export { DEFAULT_INPUT_FIELD_BORDER_WIDTH, DEFAULT_INPUT_FIELD_SIZE, DEFAULT_INPUT_VARIATION_SETTING, INPUT_FIELD_SHAPE, InputFieldVariation, DefaultInputFieldSize, };
//# sourceMappingURL=constants.d.ts.map