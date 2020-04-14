import { RadioButtonSizeProps, RadioButtonShapeVariation } from './types';
import { UnionDefaultKey } from '../../types';
declare type DefaultRadioButtonSize = 'small' | 'medium' | 'large';
declare const DEFAULT_RADIO_BUTTON_SIZE: {
    [key in UnionDefaultKey<DefaultRadioButtonSize>]: RadioButtonSizeProps;
};
declare const RADIO_BUTTON_SHAPE_VARIATION_KEYS: Array<RadioButtonShapeVariation>;
export { DEFAULT_RADIO_BUTTON_SIZE, RADIO_BUTTON_SHAPE_VARIATION_KEYS, DefaultRadioButtonSize, };
//# sourceMappingURL=constants.d.ts.map