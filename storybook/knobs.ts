import {FlexAlignType, TextStyle} from 'react-native';
import {ThemePalette} from '../src/theme/types';

type AlignKeys = 'baseline' | 'center' | 'flexStart' | 'flexEnd' | 'stretch';

const selectAlign: Array<FlexAlignType> = [
  'baseline',
  'center',
  'flex-start',
  'flex-end',
  'stretch',
];

const selectColor: Array<keyof ThemePalette> = [
  'primary',
  'secondary',
  'tertiary',
];

const selectTextAlign: Array<TextStyle['textAlign']> = [
  'auto',
  'left',
  'right',
  'center',
  'justify',
];

const selectTextColor: Array<keyof ThemePalette> = [
  'text',
  'primary',
  'secondary',
  'tertiary',
];

export {AlignKeys, selectAlign, selectColor, selectTextAlign, selectTextColor};
