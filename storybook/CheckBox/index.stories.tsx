// @flow
import * as React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {UnionDefaultKey} from '../../src/types';
import themes from '../../src/themes';
import {CheckBoxProps, CheckBoxType} from '../../src/components/CheckBox/types';
import checkBoxFactory from '../../src/components/CheckBox';
import {
  DefaultCheckBoxSize,
  DEFAULT_CHECK_BOX_SIZES,
} from '../../src/components/CheckBox/constants';
import {selectColor} from '../knobs';

const {Sharp, Round, Circular} = checkBoxFactory<
  typeof themes,
  null,
  null,
  null
>({
  themes,
});

type StoryCheckBoxProps = CheckBoxProps<
  null,
  typeof DEFAULT_CHECK_BOX_SIZES,
  null
>;

const CHECKBOX_SHAPES = [Sharp, Round, Circular];

const CHECKBOX_TYPES: Array<CheckBoxType> = ['outline', 'fill', 'reverse'];

const selectSize: Array<UnionDefaultKey<DefaultCheckBoxSize>> = [
  'small',
  'medium',
  'large',
];

const getRequiredProps = (): StoryCheckBoxProps => {
  return {
    onPress: action('button-pressed'),
  };
};

const getOptionalProps = (
  overrides: Partial<StoryCheckBoxProps> = {},
): Partial<StoryCheckBoxProps> => {
  const {active, color, isDisabled, size, type} = overrides;
  return {
    active: boolean('Active', active),
    color: select('Color Options', selectColor, color),
    isDisabled: boolean('isDisabled', isDisabled),
    size: select('Size Options', selectSize, size),
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
