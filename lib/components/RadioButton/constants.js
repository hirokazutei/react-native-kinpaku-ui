const DEFAULTLESS_RADIO_BUTTON_SIZES = {
    small: {
        size: 12,
        dotSize: 6,
        borderThickness: 2,
    },
    medium: {
        size: 16,
        dotSize: 8,
        borderThickness: 2,
    },
    large: {
        size: 20,
        dotSize: 10,
        borderThickness: 2,
    },
};
const DEFAULT_RADIO_BUTTON_SIZES = Object.assign(Object.assign({}, DEFAULTLESS_RADIO_BUTTON_SIZES), { default: DEFAULTLESS_RADIO_BUTTON_SIZES.medium });
const RADIO_BUTTON_VARIATION_KEYS = [
    'Outline',
    'Reverse',
    'Fill',
];
export { DEFAULT_RADIO_BUTTON_SIZES, RADIO_BUTTON_VARIATION_KEYS, };
//# sourceMappingURL=constants.js.map