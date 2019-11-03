import {RadioButtonSizeProps, RadioButtonVariations} from './types';

const DEFAULT_RADIO_BUTTON_SIZE: RadioButtonSizeProps = {
  size: 16,
  dotSize: 8,
  borderThickness: 2,
};

const RADIO_BUTTON_VARIATION_KEYS: Array<RadioButtonVariations> = [
  'Dot',
  'Reverse',
  'Fill',
];

export {DEFAULT_RADIO_BUTTON_SIZE, RADIO_BUTTON_VARIATION_KEYS};
