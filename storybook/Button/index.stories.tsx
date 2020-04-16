// @flow
import * as React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs';
import Provider from '../Provider';
import {IntersectDefaultKey, UnionDefaultKey} from '../../src/types';
import {alignSelect, colorSelect} from '../knobs';
import themes from '../../src/themes';
import {ThemePalette} from '../../src/Theme/types';
import {ButtonProps, ButtonType} from '../../src/components/Button/types';
import buttonFactory from '../../src/components/Button';
import {DefaultButtonSize} from '../../src/components/Button/constants';

const {Sharp, Round, Circular} = buttonFactory<typeof themes, null, null, null>(
  {
    themes,
  },
);

const BUTTON_SHAPES = [Sharp, Round, Circular];

const BUTTON_TYPES: Array<ButtonType> = ['fill', 'outline', 'clear'];

const DEFAULT_PROPS = {
  label: 'PRESS HERE',
};

const sizeSelect: {
  [key in IntersectDefaultKey<DefaultButtonSize>]?: UnionDefaultKey<
    DefaultButtonSize
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
  overrides: Partial<ButtonProps<null, null, null>> = {},
): ButtonProps<null, null, null> => {
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
  overrides: Partial<ButtonProps<null, null, null>> = {},
): Partial<ButtonProps<null, null, null>> => {
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
