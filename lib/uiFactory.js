import buttonFactory from './components/Button';
import checkBoxFactory from './components/CheckBox';
import touchableFactory from './components/Touchable';
import radioButtonFactory from './components/RadioButton';
import textFactory from './components/Text';
import { DEFAULT_TEXT_VARIATIONS } from './components/Text/constants';
export default function UIFactory(themes, additionalPalettes) {
    const commonProps = { themes, additionalPalettes };
    const Button = buttonFactory(Object.assign({}, commonProps));
    const CheckBox = checkBoxFactory({
        themes,
        checkBoxShape: 'Sharp',
    });
    const RadioButton = radioButtonFactory(Object.assign({}, commonProps));
    const Touchable = touchableFactory(Object.assign({}, commonProps));
    const { Title, Heading, SubHeading, Body, Caption, Quote } = textFactory(Object.assign({}, commonProps, { textVariations: DEFAULT_TEXT_VARIATIONS }));
    return {
        Button,
        CheckBox,
        RadioButton,
        Touchable,
        Title,
        Heading,
        SubHeading,
        Body,
        Caption,
        Quote,
    };
}
//# sourceMappingURL=uiFactory.js.map