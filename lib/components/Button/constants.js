const DEFAULTLESS_BUTTON_SIZE = {
    tiny: {
        borderRadius: 6,
        fontSize: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    small: {
        borderRadius: 6,
        fontSize: 14,
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    medium: {
        borderRadius: 8,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    large: {
        borderRadius: 8,
        fontSize: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    huge: {
        borderRadius: 10,
        fontSize: 24,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    massive: {
        borderRadius: 12,
        fontSize: 32,
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
};
const DEFAULT_BUTTON_SIZE = Object.assign(Object.assign({}, DEFAULTLESS_BUTTON_SIZE), { default: DEFAULTLESS_BUTTON_SIZE.medium });
const DEFAULT_BUTTON_ALIGN = 'center';
const DEFAULT_BUTTON_FONT_WEIGHT = 'bold';
const DEFAULT_BUTTON_BORDER_WIDTH = 2;
const BORDER_RADIUS_MULTIPLIER = {
    Circular: 4,
    Round: 1,
    Sharp: 0,
};
const BUTTON_SHAPE_VARIATION_KEYS = [
    'Circular',
    'Round',
    'Sharp',
];
export { BUTTON_SHAPE_VARIATION_KEYS, BORDER_RADIUS_MULTIPLIER, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_BORDER_WIDTH, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_SIZE, };
//# sourceMappingURL=constants.js.map