// @flow
import * as React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs, number} from '@storybook/addon-knobs';
import Provider from '../Provider';
import themes from '../../src/themes';
import {
  InputFieldProps,
  InputFieldType,
} from '../../src/components/InputField/types';
import inputFieldFactory from '../../src/components/InputField';
import {
  INPUT_FIELD_SHAPE,
  DEFAULT_INPUT_FIELD_SIZE,
} from '../../src/components/InputField/constants';
import {InputFieldShape} from '../../src/components/InputField/types';
import {colorSelect} from '../knobs';

const INPUT_FIELD_SETTING_VARIATIONS = INPUT_FIELD_SHAPE.map(
  (shape: InputFieldShape) => {
    return inputFieldFactory<typeof themes, null, null, null>({
      themes,
      shape,
    });
  },
);

type StoryInputFieldProps = InputFieldProps<
  null,
  typeof DEFAULT_INPUT_FIELD_SIZE,
  null
>;

const INPUT_FIELD_TYPES: Array<InputFieldType> = [
  'fill',
  'outline',
  'underline',
];

const DEFAULT_PROPS = {
  value: '',
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
  overrides: Partial<StoryInputFieldProps> = {},
): StoryInputFieldProps => {
  const {value} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    value: text('Value', value),
  };
};

// TODO: Size
const geOptionalProps = (
  overrides: Partial<StoryInputFieldProps> = {},
): Partial<StoryInputFieldProps> => {
  const {
    autoFocus,
    backgroundColor,
    borderColor,
    color,
    defaultValue,
    isDisabled,
    maxLength,
    placeholder,
    textColor,
    type,
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
    type,
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
              {INPUT_FIELD_TYPES.map((type: InputFieldType, index: number) => {
                return (
                  <Component
                    key={index}
                    {...getRequiredProps()}
                    {...geOptionalProps({type})}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  ));
