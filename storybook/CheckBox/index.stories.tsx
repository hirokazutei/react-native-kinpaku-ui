// @flow
import * as React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {IntersectDefaultKey, UnionDefaultKey} from '../../src/types';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {CheckBoxProps, CheckBoxType} from '../../src/components/CheckBox/types';
import checkBoxFactory from '../../src/components/CheckBox';
import {DefaultCheckBoxSize} from '../../src/components/CheckBox/constants';

const {Sharp, Round, Circular} = checkBoxFactory<
  typeof themes,
  null,
  null,
  null
>({
  themes,
});

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultCheckBoxSize>]?: UnionDefaultKey<
    DefaultCheckBoxSize
  >
} = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

const typeSelect: {[key in CheckBoxType]: CheckBoxType} = {
  outline: 'outline',
  fill: 'fill',
  reverse: 'reverse',
};

const getRequiredProps = (): CheckBoxProps<null, null, null> => {
  return {
    onPress: action('button-pressed'),
  };
};

const getOptionalProps = (): Partial<CheckBoxProps<null, null, null>> => {
  return {
    active: boolean('Active', undefined),
    color: select('Color Options', colorSelect, undefined),
    isDisabled: boolean('isDisabled', undefined),
    size: select('Size Options', sizeSelect, undefined),
    type: select('Type Options', typeSelect, undefined),
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

storiesOf('UI/CheckBox', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={styles.baseView}>
      <View style={styles.realignView}>
        <View style={styles.variationView}>
          <Sharp {...getRequiredProps()} {...getOptionalProps()} />
        </View>
        <View style={styles.variationView}>
          <Round {...getRequiredProps()} {...getOptionalProps()} />
        </View>
        <View style={styles.variationView}>
          <Circular {...getRequiredProps()} {...getOptionalProps()} />
        </View>
      </View>
    </View>
  ));
