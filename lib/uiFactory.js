import buttonFactory from './components/Button';
import touchableFactory from './components/Touchable';
import { DEFAULT_BUTTON_SIZES } from './components/Button/constants';
import { DEFAULT_TOUCHABLE_SIZES } from './components/Touchable/constants';
import radioButtonFactory from './components/RadioButton';
import { DEFAULT_RADIO_BUTTON_SIZE } from './components/RadioButton/constants';
export default function UIFactory(themes, additionalPalettes) {
    const commonProps = { themes, additionalPalettes };
    const Button = buttonFactory(Object.assign({}, commonProps, { sizes: DEFAULT_BUTTON_SIZES }));
    const RadioButton = radioButtonFactory(Object.assign({}, commonProps, { sizes: DEFAULT_RADIO_BUTTON_SIZE }));
    const Touchable = touchableFactory(Object.assign({}, commonProps, { sizes: DEFAULT_TOUCHABLE_SIZES }));
    return { Button, RadioButton, Touchable };
}
//# sourceMappingURL=uiFactory.js.map