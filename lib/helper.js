const colorResolverFactory = ({ additionalPalettes, currentTheme, }) => {
    const resolver = ({ color, defaultColor, }) => {
        if (color) {
            if (additionalPalettes &&
                additionalPalettes[color]) {
                return additionalPalettes[color];
            }
            else if (currentTheme[color]) {
                return currentTheme[color];
            }
        }
        return defaultColor;
    };
    return resolver;
};
const lightenColor = ({ color, percent, }) => {
    const amount = Math.round(2.55 * percent);
    const R = (color >> 16) + amount;
    const B = ((color >> 8) & 0x00ff) + amount;
    const G = (color & 0x0000ff) + amount;
    return (0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
        (G < 255 ? (G < 1 ? 0 : G) : 255))
        .toString(16)
        .slice(1);
};
export { colorResolverFactory, lightenColor };
//# sourceMappingURL=helper.js.map