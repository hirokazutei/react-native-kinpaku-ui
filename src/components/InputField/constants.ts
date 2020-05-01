import {Platform} from 'react-native';
import {UnionDefaultKey} from '../../types';
import {
  InputFieldSizeProps,
  InputFieldVariation,
  InputFieldVariationProps,
  InputFieldShape,
  InputFieldType,
} from './types';

const UNDERLINE: InputFieldType = 'underline';
const OUTLINE: InputFieldType = 'outline';
const FILL: InputFieldType = 'fill';
const CLEAR: InputFieldType = 'clear';
const SHARP: InputFieldShape = 'sharp';
const ROUND: InputFieldShape = 'round';
const CIRCULAR: InputFieldShape = 'circular';

type DefaultInputFieldSize = 'small' | 'medium' | 'large';

const DEFAULTLESS_INPUT_FIELD_SIZE: Record<
  DefaultInputFieldSize,
  InputFieldSizeProps
> = {
  small: {
    borderWidth: 2,
    fontSize: 12,
    fieldSpacing: {
      padding: 2,
    },
  },
  medium: {
    borderWidth: 2,
    fontSize: 14,
    fieldSpacing: {
      padding: 2,
    },
  },
  large: {
    borderWidth: 2,
    fontSize: 16,
    fieldSpacing: {
      padding: 4,
    },
  },
};

const DEFAULT_INPUT_FIELD_SIZE: Record<
  UnionDefaultKey<DefaultInputFieldSize>,
  InputFieldSizeProps
> = {
  ...DEFAULTLESS_INPUT_FIELD_SIZE,
  default: DEFAULTLESS_INPUT_FIELD_SIZE.medium,
};

const DEFAULT_INPUT_FIELD_BORDER_WIDTH = 2;

const DEFAULT_INPUT_VARIATION_SETTING: Record<
  InputFieldVariation,
  InputFieldVariationProps
> = {
  creditCardNumber: {
    autoCapitalize: 'none',
    autoCorrect: false,
    caretHidden: false,
    keyboardType: 'number-pad',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: false,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'creditCardNumber',
      },
      android: {
        autoCompleteType: 'cc-number',
      },
    }),
  },
  decimal: {
    autoCapitalize: 'none',
    autoCorrect: false,
    caretHidden: false,
    keyboardType: 'decimal-pad',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'none',
      },
      android: {
        autoCompleteType: 'off',
      },
    }),
  },
  email: {
    autoCapitalize: 'none',
    autoCorrect: false,
    caretHidden: false,
    keyboardType: 'email-address',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'emailAddress',
      },
      android: {
        autoCompleteType: 'email',
      },
    }),
  },
  freeField: {
    autoCapitalize: 'sentences',
    autoCorrect: true,
    caretHidden: false,
    keyboardType: 'default',
    multiline: false,
    secureTextEntry: false,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'all',
        spellCheck: true,
        textContentType: 'none',
      },
      android: {
        autoCompleteType: 'off',
      },
    }),
  },
  name: {
    autoCapitalize: 'words',
    autoCorrect: false,
    caretHidden: false,
    keyboardType: 'default',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'name',
      },
      android: {
        autoCompleteType: 'off',
      },
    }),
  },
  number: {
    autoCapitalize: 'none',
    autoCorrect: false,
    caretHidden: false,
    keyboardType: 'number-pad',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'none',
      },
      android: {
        autoCompleteType: 'off',
      },
    }),
  },
  oneTimeNumberCode: {
    autoCapitalize: 'none',
    autoCorrect: false,
    caretHidden: true,
    keyboardType: 'number-pad',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'oneTimeCode',
      },
      android: {
        autoCompleteType: 'off',
      },
    }),
  },
  oneTimeCode: {
    autoCapitalize: 'none',
    autoCorrect: false,
    caretHidden: true,
    keyboardType: 'default',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'oneTimeCode',
      },
      android: {
        autoCompleteType: 'off',
      },
    }),
  },
  paragraph: {
    autoCapitalize: 'sentences',
    autoCorrect: true,
    caretHidden: false,
    keyboardType: 'default',
    multiline: true,
    secureTextEntry: false,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'all',
        spellCheck: true,
        textContentType: 'none',
      },
      android: {
        autoCompleteType: 'off',
      },
    }),
  },
  passcode: {
    autoCapitalize: 'none',
    autoCorrect: false,
    caretHidden: true,
    keyboardType: 'number-pad',
    multiline: false,
    secureTextEntry: true,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'none',
      },
      android: {
        autoCompleteType: 'off',
      },
    }),
  },
  password: {
    autoCapitalize: 'none',
    autoCorrect: false,
    caretHidden: true,
    keyboardType: 'default',
    multiline: false,
    secureTextEntry: true,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'password',
      },
      android: {
        autoCompleteType: 'password',
      },
    }),
  },
  phone: {
    autoCapitalize: 'none',
    autoCorrect: false,
    keyboardType: 'phone-pad',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'phoneNumber',
        spellCheck: false,
        textContentType: 'telephoneNumber',
      },
      android: {
        autoCompleteType: 'tel',
      },
    }),
  },
  url: {
    autoCapitalize: 'none',
    autoCorrect: false,
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: true,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'link',
        keyboardType: 'url',
        spellCheck: false,
        textContentType: 'URL',
      },
      android: {
        autoCompleteType: 'off',
        keyboardType: 'default',
      },
    }),
  },
  username: {
    autoCapitalize: 'none',
    autoCorrect: false,
    keyboardType: 'default',
    multiline: false,
    secureTextEntry: false,
    selectTextOnFocus: false,
    ...Platform.select({
      ios: {
        dataDetectorTypes: 'none',
        spellCheck: false,
        textContentType: 'username',
      },
      android: {
        autoCompleteType: 'username',
      },
    }),
  },
};

const INPUT_FIELD_SHAPE: Array<InputFieldShape> = [SHARP, ROUND, CIRCULAR];

export {
  CIRCULAR,
  CLEAR,
  DEFAULT_INPUT_FIELD_BORDER_WIDTH,
  DEFAULT_INPUT_FIELD_SIZE,
  DEFAULT_INPUT_VARIATION_SETTING,
  DefaultInputFieldSize,
  FILL,
  INPUT_FIELD_SHAPE,
  InputFieldVariation,
  OUTLINE,
  ROUND,
  SHARP,
  UNDERLINE,
};
