// @flow
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs, number} from '@storybook/addon-knobs';
import Provider from '../Provider';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/theme/types';
import {InputFieldProps} from '../../src/components/InputField/types';
import inputFieldFactory from '../../src/components/InputField';
import {INPUT_FIELD_TYPES} from '../../src/components/InputField/constants';
import {
  InputFieldTypes,
  InputFieldShapes,
} from '../../src/components/InputField/types';

const Inputs = INPUT_FIELD_TYPES.map((type: InputFieldTypes) => {
  return inputFieldFactory<typeof themes, null, null>({
    themes,
    inputFieldType: type,
  });
});

const DEFAULT_PROPS = {
  value: '',
};

const shapeSelect: {[key in InputFieldShapes]: InputFieldShapes} = {
  sharp: 'sharp',
  rounded: 'rounded',
  circular: 'circular',
};

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const variationSelect = {
  creditCardNumber: 'creditCardNumber',
  decimal: 'decimal',
  email: 'email',
  freeField: 'freeField',
  name: 'name',
  number: 'number',
  oneTimeNumberCode: 'oneTimeNumberCode',
  oneTimeCode: 'oneTimeCode',
  paragraph: 'paragragh',
  passcode: 'passcode',
  password: 'password',
  phone: 'phone',
  url: 'url',
  username: 'username',
};

const getRequiredProps = (overrides = {}): InputFieldProps<null, null> => {
  const {value} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    value: text('Value', value),
  };
};

const geOptionalProps = (): Partial<InputFieldProps<null, null>> => {
  return {
    autoFocus: boolean('Auto Focus', undefined),
    backgroundColor: select('Background Color Options', colorSelect, undefined),
    borderColor: select('Border Color Options', colorSelect, undefined),
    defaultValue: text('Default Value', undefined),
    isDisabled: boolean('Disabled', undefined),
    maxLength: number('Max Length', undefined),
    onBlur: action('on-blur'),
    onChange: action('on-change'),
    onEndEditing: action('on-end-editing'),
    onFocus: action('on-focus'),
    onKeyPress: action('on-key-press'),
    placeholder: text('Place Holder', undefined),
    shape: select('Shape Options', shapeSelect, undefined),
    textColor: select('Text Color Options', colorSelect, undefined),
  };
};

storiesOf('UI/InputField', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      {Inputs.map((Components, index: number) => {
        const variationName = select(
          'Component Type',
          variationSelect,
          'number',
        );
        const Component = Components[variationName];
        return (
          <Component
            key={index}
            {...getRequiredProps()}
            {...geOptionalProps()}
          />
        );
      })}
    </>
  ));
