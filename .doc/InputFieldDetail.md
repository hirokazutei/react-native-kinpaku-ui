# InputField Detail Doc

## DEFAULT_INPUT_FIELD_SIZE

```ts
const DEFAULT_INPUT_FIELD_SIZE: InputFieldSizeProps = {
  borderWidth: 2,
  fontSize: 12,
  padding: 8,
};
```

## InputFieldVariationProps

Properties that change depending on the Input Field Variation

- Field Props
  - `autoCapitalize`
  - `autoCompleteType`
  - `autoCorrect`
  - `clearTextOnFocus`
  - `caretHidden`
  - `dataDetectorTypes`
  - `maxLength`
  - `hasClearButton`
  - `leftIcon`
  - `keyboardType`
  - `multiline`
  - `returnKeyType`
  - `rightIcon`
  - `secureTextEntry`
  - `selectTextOnFocus`
  - `spellCheck`
  - `textContentType`
- Text Props
  - `textAlign`
  - `allowFontScaling`
  - `fontFamily`
  - `isBold`
  - `isItalic`
  - `letterSpacing`
  - `lineHeight`
  - `maxFontSizeMultiplier`
  - `minimumFontScale`

## INPUT_VARIATION_DEFAULT_SETTINGS

```ts
const INPUT_VARIATION_DEFAULT_SETTINGS: {
  [key in InputFieldVariations]: InputFieldVariationProps
} = {
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
  paragragh: {
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
```
