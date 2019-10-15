// @flow
import * as React from 'react';
import Provider from '../../../storybook/Provider';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import themes from '../../../themes';
import buttonFactory from '../index';
import { DEFAULT_BUTTON_SIZES } from '../constants';
const { Sharp, Round, Circular } = buttonFactory({
    themes,
    buttonSizes: DEFAULT_BUTTON_SIZES,
});
const DEFAULT_PROPS = {
    color: 'primary',
    isDisabled: false,
    isStretched: false,
    align: 'center',
    title: 'PRESS HERE',
    size: 'large',
};
const BUTTON_TYPES = ['solid', 'outline', 'clear'];
const colorSelect = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
};
const getRequiredProps = (overrides = {}) => {
    const { color, isDisabled, isStretched, align, title, size } = Object.assign({}, DEFAULT_PROPS, overrides);
    return {
        color: select('Color Options', colorSelect, color),
        isDisabled: boolean('isDisabled', isDisabled),
        isStretched: boolean('isStretched', isStretched),
        align,
        onPress: action('button-pressed'),
        title: text('Title', title),
        size,
    };
};
storiesOf('UI/Button')
    .addDecorator((story) => <Provider story={story}/>)
    .addDecorator(withKnobs)
    .add('Default', () => (<>
      {BUTTON_TYPES.map((type, index) => {
    return <Sharp key={index} {...getRequiredProps()} type={type}/>;
})}
      {BUTTON_TYPES.map((type, index) => {
    return <Round key={index} {...getRequiredProps()} type={type}/>;
})}
      {BUTTON_TYPES.map((type, index) => {
    return <Circular key={index} {...getRequiredProps()} type={type}/>;
})}
    </>));
//# sourceMappingURL=index.stories.js.map