const DEFAULTLESS_RADIO_BUTTON_SIZE = {
    small: {
        borderThickness: 2,
        dotSize: 6,
        size: 12,
    },
    medium: {
        borderThickness: 2,
        dotSize: 8,
        size: 16,
    },
    large: {
        borderThickness: 2,
        dotSize: 10,
        size: 20,
    },
};
const DEFAULT_RADIO_BUTTON_SIZE = Object.assign({}, DEFAULTLESS_RADIO_BUTTON_SIZE, { default: DEFAULTLESS_RADIO_BUTTON_SIZE.medium });
const RADIO_BUTTON_SHAPE_VARIATION_KEYS = [
    'Outline',
    'Reverse',
    'Fill',
];
export { DEFAULT_RADIO_BUTTON_SIZE, RADIO_BUTTON_SHAPE_VARIATION_KEYS, };
//# sourceMappingURL=constants.js.map