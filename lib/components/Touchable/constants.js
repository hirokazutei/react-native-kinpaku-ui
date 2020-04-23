const DEFAULTLESSS_TOUCHABLE_SIZE = {
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
const DEFAULT_TOUCHABLE_SIZE = Object.assign(Object.assign({}, DEFAULTLESSS_TOUCHABLE_SIZE), { default: DEFAULTLESSS_TOUCHABLE_SIZE.medium });
const DEFAULT_TOUCHABLE_ALIGN = 'center';
const DEFAULT_TOUCHABLE_BORDER_WIDTH = 2;
const TOUCHABLE_SHAPE_VARIATION_KEYS = [
    'Sharp',
    'Round',
    'Circular',
];
export { DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, DEFAULT_TOUCHABLE_SIZE, TOUCHABLE_SHAPE_VARIATION_KEYS, };
//# sourceMappingURL=constants.js.map