import { RadioButtonSizeProps, RadioButtonVariations } from './types';
import { UnionDefaultKey } from '../../types';
declare type DefaultRadioButtonSizes = 'small' | 'medium' | 'large';
declare const DEFAULT_RADIO_BUTTON_SIZES: {
    [key in UnionDefaultKey<DefaultRadioButtonSizes>]: RadioButtonSizeProps;
};
declare const RADIO_BUTTON_VARIATION_KEYS: Array<RadioButtonVariations>;
export { DEFAULT_RADIO_BUTTON_SIZES, RADIO_BUTTON_VARIATION_KEYS, DefaultRadioButtonSizes, };
//# sourceMappingURL=constants.d.ts.map