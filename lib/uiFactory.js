import buttonFactory from './components/Button';
import touchableFactory from './components/Touchable';
import { DEFAULT_BUTTON_SIZES } from './components/Button/constants';
import { DEFAULT_TOUCHABLE_SIZES } from './components/Touchable/constants';
export default function UIFactory(themes) {
    const Button = buttonFactory({
        themes,
        sizes: DEFAULT_BUTTON_SIZES,
    }); // Button Sizes
    const Touchable = touchableFactory({
        themes,
        sizes: DEFAULT_TOUCHABLE_SIZES,
    });
    return { Button, Touchable };
}
//# sourceMappingURL=uiFactory.js.map