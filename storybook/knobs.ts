import {FlexAlignType} from 'react-native';

type AlignKeys = 'baseline' | 'center' | 'flexStart' | 'flexEnd' | 'stretch';

const alignSelect: {[key in AlignKeys]: FlexAlignType} = {
  baseline: 'baseline',
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  stretch: 'stretch',
};

export {alignSelect};
