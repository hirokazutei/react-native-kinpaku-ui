import buttonFactory from './components/Button';
import { DEFAULT_BUTTON_SIZES } from './components/Button/constants';
function UIFactory(themes) {
    const Button = buttonFactory({
        themes,
        buttonSizes: DEFAULT_BUTTON_SIZES,
    }); // Button Sizes
    return Button;
}
export { UIFactory };
//# sourceMappingURL=index.js.map