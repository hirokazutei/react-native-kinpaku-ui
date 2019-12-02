const DEFAULTLESS_CHECK_BOX_SIZES = {
    small: {
        size: 16,
    },
    medium: {
        size: 20,
    },
    large: {
        size: 24,
    },
};
const DEFAULT_CHECK_BOX_SIZES = Object.assign({}, DEFAULTLESS_CHECK_BOX_SIZES, { default: DEFAULTLESS_CHECK_BOX_SIZES.medium });
const CHECK_BOX_VARIATION_KEYS = [
    'Outline',
    'Reverse',
    'Fill',
];
export { DEFAULT_CHECK_BOX_SIZES, CHECK_BOX_VARIATION_KEYS, };
//# sourceMappingURL=constants.js.map