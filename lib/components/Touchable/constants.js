const DEFAULTLESSS_TOUCHABLE_SIZES = {
    tiny: {
        padding: 4,
        borderRadius: 6,
    },
    small: {
        padding: 6,
        borderRadius: 9,
    },
    medium: {
        padding: 8,
        borderRadius: 12,
    },
    large: {
        padding: 8,
        borderRadius: 16,
    },
    huge: {
        padding: 12,
        borderRadius: 18,
    },
    massive: {
        padding: 12,
        borderRadius: 24,
    },
};
const DEFAULT_TOUCHABLE_SIZES = Object.assign({}, DEFAULTLESSS_TOUCHABLE_SIZES, { default: DEFAULTLESSS_TOUCHABLE_SIZES.medium });
const DEFAULT_TOUCHABLE_ALIGN = 'center';
const DEFAULT_TOUCHABLE_BORDER_WIDTH = 2;
const touchableSizeKeys = [
    'default',
    'tiny',
    'small',
    'medium',
    'large',
    'huge',
    'massive',
];
export { DEFAULT_TOUCHABLE_SIZES, DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, touchableSizeKeys, };
//# sourceMappingURL=constants.js.map