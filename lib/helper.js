function colorResolverFactory({ additionalPalettes, currentTheme, }) {
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
}
export { colorResolverFactory };
//# sourceMappingURL=helper.js.map