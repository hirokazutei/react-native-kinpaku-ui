import { RadioButtonSizeProps, RadioButtonVariations } from './types';
import { AddDefaultKey } from '../../types';
declare type DefaultRadioSizes = 'small' | 'medium' | 'large';
declare const DEFAULT_RADIO_BUTTON_SIZES: {
    [key in AddDefaultKey<DefaultRadioSizes>]: RadioButtonSizeProps;
};
declare const RADIO_BUTTON_VARIATION_KEYS: Array<RadioButtonVariations>;
export { DEFAULT_RADIO_BUTTON_SIZES, RADIO_BUTTON_VARIATION_KEYS, DefaultRadioSizes, };
//# sourceMappingURL=constants.d.ts.map