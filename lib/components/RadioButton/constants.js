const DEFAULTLESS_RADIO_BUTTON_SIZE = {
    small: {
        borderThickness: 2,
        dotSize: 8,
        size: 16,
    },
    medium: {
        borderThickness: 2,
        dotSize: 10,
        size: 20,
    },
    large: {
        borderThickness: 2,
        dotSize: 12,
        size: 24,
    },
};
const DEFAULT_RADIO_BUTTON_SIZE = Object.assign(Object.assign({}, DEFAULTLESS_RADIO_BUTTON_SIZE), { default: DEFAULTLESS_RADIO_BUTTON_SIZE.medium });
const RADIO_BUTTON_SHAPE_VARIATION_KEYS = [
    'Circular',
    'Round',
    'Sharp',
];
export { DEFAULT_RADIO_BUTTON_SIZE, RADIO_BUTTON_SHAPE_VARIATION_KEYS, };
//# sourceMappingURL=constants.js.map