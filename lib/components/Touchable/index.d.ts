import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { TouchableSizeProps, TouchableFactoryProps, TouchableProps as Props, TouchableShapeVariation } from './types';
import { DEFAULT_TOUCHABLE_SIZE } from './constants';
import { GenericTheme, GenericAdditionalPalette, DefaultTheme } from '../../theme/types';
declare function touchableFactory<Themes extends GenericTheme = DefaultTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null, TouchableSize extends Record<string | string, TouchableSizeProps> | NonExistent = null, AllowCustomProps extends boolean | NonExistent = false>({ themes, sizes, additionalPalettes, defaultType, }: TouchableFactoryProps<Themes, AdditionalPalettes, TouchableSize, AllowCustomProps>): Record<TouchableShapeVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<TouchableSize, TouchableSize, typeof DEFAULT_TOUCHABLE_SIZE>, AllowCustomProps>>>;
export default touchableFactory;
//# sourceMappingURL=index.d.ts.map