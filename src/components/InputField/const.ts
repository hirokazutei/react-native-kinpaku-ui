import {TextInputProps, Platform} from 'react-native';

type InputTypes =
  | 'creditCardNumber'
  | 'decimal'
  | 'email'
  | 'freeField'
  | 'name'
  | 'number'
  | 'oneTimeNumberCode'
  | 'oneTimeCode'
  | 'passcode'
  | 'password'
  | 'phone'
  | 'url'
  | 'username';

// SearchField, Paragarph,

const INPUT_TYPE_DEFAULT_SETTINGS: {[key in InputTypes]?: TextInputProps} = {
  creditCardNumber: {
    autoCapitalize: 'none',
    autoCorrect: false,
    keyboardType: 'number-pad',
    secureTextEntry: false,
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
    keyboardType: 'decimal-pad',
    secureTextEntry: false,
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
    keyboardType: 'email-address',
    secureTextEntry: false,
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
    keyboardType: 'default',
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
    keyboardType: 'default',
    secureTextEntry: false,
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
    keyboardType: 'number-pad',
    secureTextEntry: false,
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
    keyboardType: 'number-pad',
    secureTextEntry: false,
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
    keyboardType: 'default',
    secureTextEntry: false,
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
  passcode: {
    autoCapitalize: 'none',
    autoCorrect: false,
    keyboardType: 'number-pad',
    secureTextEntry: true,
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
    keyboardType: 'default',
    secureTextEntry: true,
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
    secureTextEntry: false,
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
    secureTextEntry: false,
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
    secureTextEntry: false,
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

// selectionColor
// placeholderTextColor

// Accessibility Prop
// - allowFontScaling

// Methods
// - clear()
// - isFocused()

export {INPUT_TYPE_DEFAULT_SETTINGS};
