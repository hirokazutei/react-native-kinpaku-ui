// @flow
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {IntersectDefaultKey, UnionDefaultKey} from '../../src/types';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {
  RadioButtonProps,
  RadioButtonType,
} from '../../src/components/RadioButton/types';
import radioButtonFactory from '../../src/components/RadioButton';
import {DefaultRadioButtonSize} from '../../src/components/RadioButton/constants';
import {StyleSheet, ViewStyle, View} from 'react-native';

const {Sharp, Round, Circular} = radioButtonFactory<
  typeof themes,
  null,
  null,
  null
>({
  themes,
});

const RADIO_BUTTON_SHAPES = [Sharp, Round, Circular];

const RADIO_BUTTON_TYPES: Array<RadioButtonType> = [
  'outline',
  'fill',
  'reverse',
];

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultRadioButtonSize>]?: UnionDefaultKey<
    DefaultRadioButtonSize
  >
} = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const getRequiredProps = (): RadioButtonProps<null, null, null> => {
  return {
    onPress: action('button-pressed'),
  };
};

const getOptionalProps = (
  overrides: Partial<RadioButtonProps<null, null, null>> = {},
): Partial<RadioButtonProps<null, null, null>> => {
  const {active, color, isDisabled, size, type} = overrides;
  return {
    active: boolean('Active', active),
    color: select('Color Options', colorSelect, color),
    isDisabled: boolean('isDisabled', isDisabled),
    size: select('Size Options', sizeSelect, size),
    type,
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
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

storiesOf('UI/RadioButton', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={styles.baseView}>
      <View style={styles.realignView}>
        {RADIO_BUTTON_SHAPES.map(
          (Component: React.FunctionComponent, index: number) => {
            return (
              <View key={index} style={styles.variationView}>
                {RADIO_BUTTON_TYPES.map(
                  (type: RadioButtonType, index: number) => {
                    return (
                      <Component
                        key={index}
                        {...getRequiredProps()}
                        {...getOptionalProps({type})}
                      />
                    );
                  },
                )}
              </View>
            );
          },
        )}
      </View>
    </View>
  ));
