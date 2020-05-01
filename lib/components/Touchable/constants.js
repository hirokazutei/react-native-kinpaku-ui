const FILL = 'fill';
const OUTLINE = 'outline';
const CLEAR = 'clear';
const DEFAULTLESSS_TOUCHABLE_SIZE = {
    tiny: {
        borderRadius: 6,
        touchableSpacing: {
            padding: 4,
        },
    },
    small: {
        borderRadius: 9,
        touchableSpacing: {
            padding: 6,
        },
    },
    medium: {
        borderRadius: 12,
        touchableSpacing: {
            padding: 8,
        },
    },
    large: {
        borderRadius: 16,
        touchableSpacing: {
            padding: 8,
        },
    },
    huge: {
        borderRadius: 18,
        touchableSpacing: {
            padding: 12,
        },
    },
    massive: {
        borderRadius: 24,
        touchableSpacing: {
            padding: 12,
        },
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
export { CLEAR, DEFAULT_TOUCHABLE_ALIGN, DEFAULT_TOUCHABLE_BORDER_WIDTH, DEFAULT_TOUCHABLE_SIZE, FILL, OUTLINE, TOUCHABLE_SHAPE_VARIATION_KEYS, };
//# sourceMappingURL=constants.js.map