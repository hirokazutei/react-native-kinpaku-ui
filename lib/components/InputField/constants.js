import { Platform } from 'react-native';
const DEFAULT_INPUT_VARIATION_SETTINGS = {
    creditCardNumber: Object.assign({ autoCapitalize: 'none', autoCorrect: false, caretHidden: false, keyboardType: 'number-pad', multiline: false, secureTextEntry: false, selectTextOnFocus: false }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'creditCardNumber',
        },
        android: {
            autoCompleteType: 'cc-number',
        },
    })),
    decimal: Object.assign({ autoCapitalize: 'none', autoCorrect: false, caretHidden: false, keyboardType: 'decimal-pad', multiline: false, secureTextEntry: false, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'none',
        },
        android: {
            autoCompleteType: 'off',
        },
    })),
    email: Object.assign({ autoCapitalize: 'none', autoCorrect: false, caretHidden: false, keyboardType: 'email-address', multiline: false, secureTextEntry: false, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'emailAddress',
        },
        android: {
            autoCompleteType: 'email',
        },
    })),
    freeField: Object.assign({ autoCapitalize: 'sentences', autoCorrect: true, caretHidden: false, keyboardType: 'default', multiline: false, secureTextEntry: false }, Platform.select({
        ios: {
            dataDetectorTypes: 'all',
            spellCheck: true,
            textContentType: 'none',
        },
        android: {
            autoCompleteType: 'off',
        },
    })),
    name: Object.assign({ autoCapitalize: 'words', autoCorrect: false, caretHidden: false, keyboardType: 'default', multiline: false, secureTextEntry: false, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'name',
        },
        android: {
            autoCompleteType: 'off',
        },
    })),
    number: Object.assign({ autoCapitalize: 'none', autoCorrect: false, caretHidden: false, keyboardType: 'number-pad', multiline: false, secureTextEntry: false, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'none',
        },
        android: {
            autoCompleteType: 'off',
        },
    })),
    oneTimeNumberCode: Object.assign({ autoCapitalize: 'none', autoCorrect: false, caretHidden: true, keyboardType: 'number-pad', multiline: false, secureTextEntry: false, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'oneTimeCode',
        },
        android: {
            autoCompleteType: 'off',
        },
    })),
    oneTimeCode: Object.assign({ autoCapitalize: 'none', autoCorrect: false, caretHidden: true, keyboardType: 'default', multiline: false, secureTextEntry: false, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'oneTimeCode',
        },
        android: {
            autoCompleteType: 'off',
        },
    })),
    paragragh: Object.assign({ autoCapitalize: 'sentences', autoCorrect: true, caretHidden: false, keyboardType: 'default', multiline: true, secureTextEntry: false }, Platform.select({
        ios: {
            dataDetectorTypes: 'all',
            spellCheck: true,
            textContentType: 'none',
        },
        android: {
            autoCompleteType: 'off',
        },
    })),
    passcode: Object.assign({ autoCapitalize: 'none', autoCorrect: false, caretHidden: true, keyboardType: 'number-pad', multiline: false, secureTextEntry: true, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'none',
        },
        android: {
            autoCompleteType: 'off',
        },
    })),
    password: Object.assign({ autoCapitalize: 'none', autoCorrect: false, caretHidden: true, keyboardType: 'default', multiline: false, secureTextEntry: true, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'password',
        },
        android: {
            autoCompleteType: 'password',
        },
    })),
    phone: Object.assign({ autoCapitalize: 'none', autoCorrect: false, keyboardType: 'phone-pad', multiline: false, secureTextEntry: false, selectTextOnFocus: true }, Platform.select({
        ios: {
            dataDetectorTypes: 'phoneNumber',
            spellCheck: false,
            textContentType: 'telephoneNumber',
        },
        android: {
            autoCompleteType: 'tel',
        },
    })),
    url: Object.assign({ autoCapitalize: 'none', autoCorrect: false, multiline: false, secureTextEntry: false, selectTextOnFocus: true }, Platform.select({
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
    })),
    username: Object.assign({ autoCapitalize: 'none', autoCorrect: false, keyboardType: 'default', multiline: false, secureTextEntry: false, selectTextOnFocus: false }, Platform.select({
        ios: {
            dataDetectorTypes: 'none',
            spellCheck: false,
            textContentType: 'username',
        },
        android: {
            autoCompleteType: 'username',
        },
    })),
};
const DEFAULT_INPUT_FIELD_SIZE = {
    borderWidth: 2,
    fontSize: 12,
    padding: 8,
};
const DEFAULT_BORDER_WIDTH = 2;
/* TODO:
selectionColor
placeholderTextColor

Accessibility Prop
- allowFontScaling

Methods
- clear()
- isFocused()
*/
const INPUT_FIELD_TYPES = [
    'Underline',
    'Outline',
    'Fill',
    'UnderlinedFill',
];
export { DEFAULT_BORDER_WIDTH, DEFAULT_INPUT_FIELD_SIZE, INPUT_FIELD_TYPES, DEFAULT_INPUT_VARIATION_SETTINGS, };
//# sourceMappingURL=constants.js.map