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
import {CheckBoxProps} from '../../src/components/CheckBox/types';
import checkBoxFactory from '../../src/components/CheckBox';
import {DefaultCheckBoxSizes} from '../../src/components/CheckBox/constants';

const Sharp = checkBoxFactory<typeof themes, null, null, null>({
  themes,
  checkBoxShape: 'Sharp',
});

const Rounded = checkBoxFactory<typeof themes, null, null, null>({
  themes,
  checkBoxShape: 'Rounded',
});

const Circular = checkBoxFactory<typeof themes, null, null, null>({
  themes,
  checkBoxShape: 'Circular',
});

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultCheckBoxSizes>]?: UnionDefaultKey<
    DefaultCheckBoxSizes
  >
} = {
  small: 'small',
  medium: 'medium',
  large: 'large',
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
          <Sharp.Outline {...getRequiredProps()} {...getOptionalProps()} />
          <Sharp.Reverse {...getRequiredProps()} {...getOptionalProps()} />
          <Sharp.Fill {...getRequiredProps()} {...getOptionalProps()} />
        </View>
        <View style={styles.variationView}>
          <Rounded.Outline {...getRequiredProps()} {...getOptionalProps()} />
          <Rounded.Reverse {...getRequiredProps()} {...getOptionalProps()} />
          <Rounded.Fill {...getRequiredProps()} {...getOptionalProps()} />
        </View>
        <View style={styles.variationView}>
          <Circular.Outline {...getRequiredProps()} {...getOptionalProps()} />
          <Circular.Reverse {...getRequiredProps()} {...getOptionalProps()} />
          <Circular.Fill {...getRequiredProps()} {...getOptionalProps()} />
        </View>
      </View>
    </View>
  ));
