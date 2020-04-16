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
import {colorSelect} from '../knobs';

const {Sharp, Round, Circular} = checkBoxFactory<
  typeof themes,
  null,
  null,
  null
>({
  themes,
});

const CHECKBOX_SHAPES = [Sharp, Round, Circular];

const CHECKBOX_TYPES: Array<CheckBoxType> = ['outline', 'fill', 'reverse'];

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultCheckBoxSize>]?: UnionDefaultKey<
    DefaultCheckBoxSize
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

const getOptionalProps = (
  overrides: Partial<CheckBoxProps<null, null, null>> = {},
): Partial<CheckBoxProps<null, null, null>> => {
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

storiesOf('UI/CheckBox', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={styles.baseView}>
      <View style={styles.realignView}>
        {CHECKBOX_SHAPES.map(
          (Component: React.FunctionComponent, index: number) => {
            return (
              <View key={index} style={styles.variationView}>
                {CHECKBOX_TYPES.map((type: CheckBoxType, index: number) => {
                  return (
                    <Component
                      key={index}
                      {...getRequiredProps()}
                      {...getOptionalProps({type})}
                    />
                  );
                })}
              </View>
            );
          },
        )}
      </View>
    </View>
  ));
