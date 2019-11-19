const DEFAULTLESS_BUTTON_SIZES = {
    tiny: {
        verticalPaddding: 4,
        horizontalPadding: 8,
        fontSize: 12,
        borderRadius: 6,
    },
    small: {
        verticalPaddding: 4,
        horizontalPadding: 8,
        fontSize: 14,
        borderRadius: 6,
    },
    medium: {
        verticalPaddding: 6,
        horizontalPadding: 12,
        fontSize: 16,
        borderRadius: 8,
    },
    large: {
        verticalPaddding: 6,
        horizontalPadding: 12,
        fontSize: 20,
        borderRadius: 8,
    },
    huge: {
        verticalPaddding: 8,
        horizontalPadding: 16,
        fontSize: 24,
        borderRadius: 10,
    },
    massive: {
        verticalPaddding: 8,
        horizontalPadding: 24,
        fontSize: 32,
        borderRadius: 12,
    },
};
const DEFAULT_BUTTON_SIZES = Object.assign({}, DEFAULTLESS_BUTTON_SIZES, { default: DEFAULTLESS_BUTTON_SIZES.medium });
const DEFAULT_BUTTON_ALIGN = 'center';
const DEFAULT_BUTTON_FONT_WEIGHT = 'bold';
const DEFAULT_BUTTON_BORDER_WIDTH = 2;
const BORDER_RADIUS_MULTIPLIERS = {
    Circular: 4,
    Round: 1,
    Sharp: 0,
};
const BUTTON_VARIATION_KEYS = [
    'Circular',
    'Round',
    'Sharp',
];
const buttonSizeKeys = [
    'tiny',
    'small',
    'medium',
    'large',
    'huge',
    'massive',
];
export { DEFAULT_BUTTON_SIZES, DEFAULT_BUTTON_ALIGN, DEFAULT_BUTTON_FONT_WEIGHT, DEFAULT_BUTTON_BORDER_WIDTH, BORDER_RADIUS_MULTIPLIERS, BUTTON_VARIATION_KEYS, buttonSizeKeys, };
//# sourceMappingURL=constants.js.map