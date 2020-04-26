import {FlexAlignType, TextStyle} from 'react-native';
import {ThemePalette} from '../src/theme/types';

type AlignKeys = 'baseline' | 'center' | 'flexStart' | 'flexEnd' | 'stretch';

const alignSelect: Array<FlexAlignType> = [
  'baseline',
  'center',
  'flex-start',
  'flex-end',
  'stretch',
];

const colorSelect: Array<keyof ThemePalette> = [
  'primary',
  'secondary',
  'tertiary',
];

const textAlignSelect: Array<TextStyle['textAlign']> = [
  'auto',
  'left',
  'right',
  'center',
  'justify',
];

const textColorSelect: Array<keyof ThemePalette> = [
  'text',
  'primary',
  'secondary',
  'tertiary',
];

export {alignSelect, colorSelect, textAlignSelect, textColorSelect};
