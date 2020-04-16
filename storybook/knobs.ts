import {FlexAlignType, TextStyle} from 'react-native';
import {ThemePalette} from '../src/theme/types';

type AlignKeys = 'baseline' | 'center' | 'flexStart' | 'flexEnd' | 'stretch';

const alignSelect: {[key in AlignKeys]: FlexAlignType} = {
  baseline: 'baseline',
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  stretch: 'stretch',
};

const colorSelect: {[key in keyof ThemePalette]?: keyof ThemePalette} = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

const textAlignSelect: {
  [key in TextStyle['textAlign']]: TextStyle['textAlign']
} = {
  auto: 'auto',
  left: 'left',
  right: 'right',
  center: 'center',
  justify: 'justify',
};

export {alignSelect, colorSelect, textAlignSelect};
