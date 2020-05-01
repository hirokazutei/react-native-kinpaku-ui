import { UnionDefaultKey } from '../../types';
import { InputFieldSizeProps, InputFieldVariation, InputFieldVariationProps, InputFieldShape, InputFieldType } from './types';
declare const UNDERLINE: InputFieldType;
declare const OUTLINE: InputFieldType;
declare const FILL: InputFieldType;
declare const CLEAR: InputFieldType;
declare const SHARP: InputFieldShape;
declare const ROUND: InputFieldShape;
declare const CIRCULAR: InputFieldShape;
declare type DefaultInputFieldSize = 'small' | 'medium' | 'large';
declare const DEFAULT_INPUT_FIELD_SIZE: Record<UnionDefaultKey<DefaultInputFieldSize>, InputFieldSizeProps>;
declare const DEFAULT_INPUT_FIELD_BORDER_WIDTH = 2;
declare const DEFAULT_INPUT_VARIATION_SETTING: Record<InputFieldVariation, InputFieldVariationProps>;
declare const INPUT_FIELD_SHAPE: Array<InputFieldShape>;
export { CIRCULAR, CLEAR, DEFAULT_INPUT_FIELD_BORDER_WIDTH, DEFAULT_INPUT_FIELD_SIZE, DEFAULT_INPUT_VARIATION_SETTING, DefaultInputFieldSize, FILL, INPUT_FIELD_SHAPE, InputFieldVariation, OUTLINE, ROUND, SHARP, UNDERLINE, };
//# sourceMappingURL=constants.d.ts.map