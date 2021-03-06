import { Platform } from 'react-native';
const UNDERLINE = 'underline';
const OUTLINE = 'outline';
const FILL = 'fill';
const CLEAR = 'clear';
const SHARP = 'sharp';
const ROUND = 'round';
const CIRCULAR = 'circular';
const DEFAULTLESS_INPUT_FIELD_SIZE = {
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
const DEFAULT_INPUT_FIELD_SIZE = Object.assign(Object.assign({}, DEFAULTLESS_INPUT_FIELD_SIZE), { default: DEFAULTLESS_INPUT_FIELD_SIZE.medium });
const DEFAULT_INPUT_FIELD_BORDER_WIDTH = 2;
const DEFAULT_INPUT_VARIATION_SETTING = {
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
    paragraph: Object.assign({ autoCapitalize: 'sentences', autoCorrect: true, caretHidden: false, keyboardType: 'default', multiline: true, secureTextEntry: false }, Platform.select({
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
const INPUT_FIELD_SHAPE = [SHARP, ROUND, CIRCULAR];
export { CIRCULAR, CLEAR, DEFAULT_INPUT_FIELD_BORDER_WIDTH, DEFAULT_INPUT_FIELD_SIZE, DEFAULT_INPUT_VARIATION_SETTING, FILL, INPUT_FIELD_SHAPE, OUTLINE, ROUND, SHARP, UNDERLINE, };
//# sourceMappingURL=constants.js.map