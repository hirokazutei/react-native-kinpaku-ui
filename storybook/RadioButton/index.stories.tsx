// @flow
import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StyleSheet, ViewStyle, View} from 'react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {UnionDefaultKey} from '../../src/types';
import themes from '../../src/themes';
import {
  RadioButtonProps,
  RadioButtonType,
} from '../../src/components/RadioButton/types';
import radioButtonFactory from '../../src/components/RadioButton';
import {
  DefaultRadioButtonSize,
  DEFAULT_RADIO_BUTTON_SIZE,
} from '../../src/components/RadioButton/constants';
import {selectColor} from '../knobs';

const {Sharp, Round, Circular} = radioButtonFactory<typeof themes>({
  themes,
});

type StoryRadioButtonProps = RadioButtonProps<
  null,
  typeof DEFAULT_RADIO_BUTTON_SIZE
>;

const RADIO_BUTTON_SHAPES = [Sharp, Round, Circular];

const RADIO_BUTTON_TYPES: Array<RadioButtonType> = [
  'outline',
  'fill',
  'reverse',
];

const selectSize: Array<UnionDefaultKey<DefaultRadioButtonSize>> = [
  'small',
  'medium',
  'large',
  'default',
];

const getRequiredProps = (): StoryRadioButtonProps => {
  return {
    onPress: action('button-pressed'),
  };
};

const getOptionalProps = (
  overrides: Partial<StoryRadioButtonProps> = {},
): Partial<StoryRadioButtonProps> => {
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
