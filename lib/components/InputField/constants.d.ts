import {
  InputFieldTypes,
  InputFieldSizeProps,
  InputFieldVariationProps,
} from './types';
declare type InputFieldVariations =
  | 'creditCardNumber'
  | 'decimal'
  | 'email'
  | 'freeField'
  | 'name'
  | 'number'
  | 'oneTimeNumberCode'
  | 'oneTimeCode'
  | 'paragragh'
  | 'passcode'
  | 'password'
  | 'phone'
  | 'url'
  | 'username';
declare const INPUT_VARIATION_DEFAULT_SETTINGS: {
  [key in InputFieldVariations]: InputFieldVariationProps
};
declare const DEFAULT_INPUT_FIELD_SIZE: InputFieldSizeProps;
declare const DEFAULT_BORDER_WIDTH = 2;
declare type InputFieldSizes = 'small' | 'medium' | 'large';
declare const INPUT_FIELD_TYPES: Array<InputFieldTypes>;
export {
  DEFAULT_BORDER_WIDTH,
  DEFAULT_INPUT_FIELD_SIZE,
  InputFieldSizes,
  INPUT_FIELD_TYPES,
  INPUT_VARIATION_DEFAULT_SETTINGS,
  InputFieldVariations,
};
//# sourceMappingURL=constants.d.ts.map
