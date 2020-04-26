import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { TouchableFactoryProps, TouchableProps as Props, TouchableSizeProps, TouchableShapeVariation } from './types';
import { DEFAULT_TOUCHABLE_SIZE } from './constants';
import { GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare function touchableFactory<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, TouchableSize extends Record<string | string, TouchableSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent>({ themes, sizes, additionalPalettes, defaultType, }: TouchableFactoryProps<Themes, AdditionalPalettes, TouchableSize, AllowCustomProps>): Record<TouchableShapeVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<TouchableSize, TouchableSize, typeof DEFAULT_TOUCHABLE_SIZE>, AllowCustomProps>>>;
export default touchableFactory;
//# sourceMappingURL=index.d.ts.map