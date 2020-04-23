// @flow
import * as React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {IntersectDefaultKey, UnionDefaultKey} from '../../src/types';
import {alignSelect, colorSelect} from '../knobs';
import themes from '../../src/themes';
import touchableFactory from '../../src/components/Touchable';
import {TouchableProps} from '../../src/components/Touchable/types';
import {DefaultTouchableSize} from '../../src/components/Touchable/constants';

const {Sharp, Round, Circular} = touchableFactory<
  typeof themes,
  null,
  null,
  null
>({
  themes,
});

const DEFAULT_PROPS = {
  children: <Text>Content</Text>,
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultTouchableSize>]?: UnionDefaultKey<
    DefaultTouchableSize
  >
} = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
  large: 'large',
  huge: 'huge',
  massive: 'massive',
};

const getRequiredProps = (
  overrides: Partial<TouchableProps<null, null, null>> = {},
): TouchableProps<null, null, null> => {
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
  overrides: Partial<TouchableProps<null, null, null>> = {},
): Partial<TouchableProps<null, null, null>> => {
  const {align, color, isDisabled, isStretched, size, type} = overrides;
  return {
    align: select('Align Options', alignSelect, align),
    color: select('Color Options', colorSelect, color),
    isDisabled: boolean('Disabled', isDisabled),
    isStretched: boolean('Stretched', isStretched),
    size: select('Size Option', sizeSelect, size),
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
        </View>
        <View style={styles.horizontalView}>
          <Round {...getRequiredProps()} {...getOptionalProps()} />
          <Round
            {...getRequiredProps()}
            {...getOptionalProps({type: 'outline'})}
          />
        </View>
        <View style={styles.horizontalView}>
          <Circular {...getRequiredProps()} {...getOptionalProps()} />
          <Circular
            {...getRequiredProps()}
            {...getOptionalProps({type: 'outline'})}
          />
        </View>
      </View>
    </View>
  ));
