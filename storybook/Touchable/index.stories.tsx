// @flow
import * as React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {UnionDefaultKey} from '../../src/types';
import {selectAlign, selectColor} from '../knobs';
import themes from '../../src/themes';
import touchableFactory from '../../src/components/Touchable';
import {TouchableProps} from '../../src/components/Touchable/types';
import {
  DefaultTouchableSize,
  DEFAULT_TOUCHABLE_SIZE,
} from '../../src/components/Touchable/constants';

const {Sharp, Round, Circular} = touchableFactory<typeof themes>({
  themes,
});

type StoryTouchableProps = TouchableProps<null, typeof DEFAULT_TOUCHABLE_SIZE>;

const DEFAULT_PROPS = {
  children: <Text>Content</Text>,
};

const selectSize: Array<UnionDefaultKey<DefaultTouchableSize>> = [
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
  'massive',
  'default',
];

const getRequiredProps = (
  overrides: Partial<StoryTouchableProps> = {},
): StoryTouchableProps => {
  const {children} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    children,
    onPress: action('button-pressed'),
  };
};

const getOptionalProps = (
  overrides: Partial<StoryTouchableProps> = {},
): Partial<StoryTouchableProps> => {
  const {align, color, isDisabled, isStretched, size, type} = overrides;
  return {
    align: select('Align Options', selectAlign, align),
    color: select('Color Options', selectColor, color),
    isDisabled: boolean('Disabled', isDisabled),
    isStretched: boolean('Stretched', isStretched),
    size: select('Size Option', selectSize, size),
    type,
  };
};

type Styles = {
  baseView: ViewStyle;
  realignView: ViewStyle;
  horizontalView: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  baseView: {
    flex: 1,
    flexDirection: 'row',
  },
  realignView: {
    flex: 1,
  },
  horizontalView: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

storiesOf('UI/Touchable', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={styles.baseView}>
      <View style={styles.realignView}>
        <View style={styles.horizontalView}>
          <Sharp {...getRequiredProps()} {...getOptionalProps()} />
          <Sharp
            {...getRequiredProps()}
            {...getOptionalProps({type: 'outline'})}
          />
          <Sharp
            {...getRequiredProps()}
            {...getOptionalProps({type: 'clear'})}
          />
        </View>
        <View style={styles.horizontalView}>
          <Round {...getRequiredProps()} {...getOptionalProps()} />
          <Round
            {...getRequiredProps()}
            {...getOptionalProps({type: 'outline'})}
          />
          <Round
            {...getRequiredProps()}
            {...getOptionalProps({type: 'clear'})}
          />
        </View>
        <View style={styles.horizontalView}>
          <Circular {...getRequiredProps()} {...getOptionalProps()} />
          <Circular
            {...getRequiredProps()}
            {...getOptionalProps({type: 'outline'})}
          />
          <Circular
            {...getRequiredProps()}
            {...getOptionalProps({type: 'clear'})}
          />
        </View>
      </View>
    </View>
  ));
