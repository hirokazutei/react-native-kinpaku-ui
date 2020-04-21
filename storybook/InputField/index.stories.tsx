// @flow
import * as React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs, number} from '@storybook/addon-knobs';
import Provider from '../Provider';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/theme/types';
import {InputFieldProps} from '../../src/components/InputField/types';
import inputFieldFactory from '../../src/components/InputField';
import {INPUT_FIELD_TYPE} from '../../src/components/InputField/constants';
import {
  InputFieldType,
  InputFieldShape,
} from '../../src/components/InputField/types';

const INPUT_FIELD_SETTING_VARIATIONS = INPUT_FIELD_TYPE.map(
  (type: InputFieldType) => {
    return inputFieldFactory<typeof themes, null, null, null>({
      themes,
      inputFieldType: type,
    });
  },
);

const INPUT_FIELD_SHAPE: Array<InputFieldShape> = [
  'sharp',
  'rounded',
  'circular',
];

const DEFAULT_PROPS = {
  value: '',
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
  paragraph: 'paragraph',
  passcode: 'passcode',
  password: 'password',
  phone: 'phone',
  url: 'url',
  username: 'username',
};

const getRequiredProps = (
  overrides: Partial<InputFieldProps<null, null, null>> = {},
): InputFieldProps<null, null, null> => {
  const {value} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    value: text('Value', value),
  };
};

const geOptionalProps = (
  overrides: Partial<InputFieldProps<null, null, null>> = {},
): Partial<InputFieldProps<null, null, null>> => {
  const {
    autoFocus,
    backgroundColor,
    borderColor,
    color,
    defaultValue,
    isDisabled,
    maxLength,
    placeholder,
    shape,
    textColor,
  } = overrides;
  return {
    autoFocus: boolean('Auto Focus', autoFocus),
    backgroundColor: select(
      'Background Color Options',
      colorSelect,
      backgroundColor,
    ),
    borderColor: select('Border Color Options', colorSelect, borderColor),
    color: select('Color Options', colorSelect, color),
    defaultValue: text('Default Value', defaultValue),
    isDisabled: boolean('Disabled', isDisabled),
    maxLength: number('Max Length', maxLength),
    onBlur: action('on-blur'),
    onChange: action('on-change'),
    onEndEditing: action('on-end-editing'),
    onFocus: action('on-focus'),
    onKeyPress: action('on-key-press'),
    placeholder: text('Place Holder', placeholder),
    shape,
    textColor: select('Text Color Options', colorSelect, textColor),
  };
};

type Styles = {
  baseView: ViewStyle;
  realignView: ViewStyle;
  variationView: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  baseView: {
    flex: 1,
    flexDirection: 'row',
  },
  realignView: {
    flex: 1,
  },
  variationView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});

storiesOf('UI/InputField', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={styles.baseView}>
      <View style={styles.realignView}>
        {INPUT_FIELD_SETTING_VARIATIONS.map((Components, index: number) => {
          const variationName = select(
            'Component Type',
            variationSelect,
            'number',
          );
          const Component = Components[variationName];
          return (
            <View key={index} style={styles.variationView}>
              {INPUT_FIELD_SHAPE.map(
                (shape: InputFieldShape, index: number) => {
                  return (
                    <Component
                      key={index}
                      {...getRequiredProps()}
                      {...geOptionalProps({shape})}
                    />
                  );
                },
              )}
            </View>
          );
        })}
      </View>
    </View>
  ));
