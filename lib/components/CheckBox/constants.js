const DEFAULTLESS_CHECK_BOX_SIZE = {
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
const DEFAULT_CHECK_BOX_SIZES = Object.assign(Object.assign({}, DEFAULTLESS_CHECK_BOX_SIZE), { default: DEFAULTLESS_CHECK_BOX_SIZE.medium });
const CHECK_BOX_SHAPE_VARIATION_KEYS = [
    'Circular',
    'Round',
    'Sharp',
];
export { DEFAULT_CHECK_BOX_SIZES, CHECK_BOX_SHAPE_VARIATION_KEYS, };
//# sourceMappingURL=constants.js.map