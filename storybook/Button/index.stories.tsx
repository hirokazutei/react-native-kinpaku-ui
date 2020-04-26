// @flow
import * as React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {UnionDefaultKey} from '../../src/types';
import {alignSelect, colorSelect} from '../knobs';
import themes from '../../src/themes';
import {ButtonProps, ButtonType} from '../../src/components/Button/types';
import buttonFactory from '../../src/components/Button';
import {
  DefaultButtonSize,
  DEFAULT_BUTTON_SIZE,
} from '../../src/components/Button/constants';

const {Sharp, Round, Circular} = buttonFactory<typeof themes, null, null, null>(
  {
    themes,
  },
);

type StoryButtonProps = ButtonProps<null, typeof DEFAULT_BUTTON_SIZE, null>;

const BUTTON_SHAPES = [Sharp, Round, Circular];

const BUTTON_TYPES: Array<ButtonType> = ['fill', 'outline', 'clear'];

const DEFAULT_PROPS = {
  label: 'PRESS HERE',
};

const sizeSelect: Array<UnionDefaultKey<DefaultButtonSize>> = [
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
  'massive',
];

const getRequiredProps = (
  overrides: Partial<StoryButtonProps> = {},
): StoryButtonProps => {
  const {label} = {
    ...DEFAULT_PROPS,
    ...overrides,
  };
  return {
    onPress: action('button-pressed'),
    label: text('Title', label),
  };
};

const geOptionalProps = (
  overrides: Partial<StoryButtonProps> = {},
): Partial<StoryButtonProps> => {
  const {color, isDisabled, isStretched, align, size, type} = overrides;
  return {
    color: select('Color Options', colorSelect, color),
    isDisabled: boolean('isDisabled', isDisabled),
    isStretched: boolean('isStretched', isStretched),
    align: select('Align Options', alignSelect, align),
    onPress: action('button-pressed'),
    size: select('Size Options', sizeSelect, size),
    type,
  };
};

type Styles = {
  variationView: ViewStyle;
};

const styles: Styles = StyleSheet.create<Styles>({
  variationView: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
});

storiesOf('UI/Button', module)
  .addDecorator((story: () => React.ReactElement<null>) => (
    <Provider story={story} />
  ))
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      {BUTTON_SHAPES.map(
        (Component: React.FunctionComponent, index: number) => {
          return (
            <View key={index} style={styles.variationView}>
              {BUTTON_TYPES.map((type: ButtonType, index: number) => {
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
        },
      )}
    </>
  ));
