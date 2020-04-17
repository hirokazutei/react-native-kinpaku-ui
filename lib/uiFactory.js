import buttonFactory from './components/Button';
import checkBoxFactory from './components/CheckBox';
import inputFieldFactory from './components/InputField';
import touchableFactory from './components/Touchable';
import radioButtonFactory from './components/RadioButton';
import textFactory from './components/Text';
const UIFactory = (themes, additionalPalettes) => {
    const commonProps = { themes, additionalPalettes };
    const Button = buttonFactory(Object.assign({}, commonProps));
    const CheckBox = checkBoxFactory({
        themes,
    });
    const InputField = inputFieldFactory(Object.assign({}, commonProps));
    const RadioButton = radioButtonFactory(Object.assign({}, commonProps));
    const Touchable = touchableFactory(Object.assign({}, commonProps));
    const { Title, Heading, SubHeading, Body, Label, Quote } = textFactory(Object.assign({}, commonProps));
    return {
        Body,
        Button,
        Label,
        CheckBox,
        Heading,
        InputField,
        RadioButton,
        SubHeading,
        Title,
        Touchable,
        Quote,
    };
};
export default UIFactory;
//# sourceMappingURL=uiFactory.js.map