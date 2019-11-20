import React from 'react';
import { TouchableFactoryProps, TouchableProps as Props } from './types';
import { OptionalExistCondition } from '../../types';
import { DEFAULT_TOUCHABLE_SIZES } from './constants';
declare function touchableFactory<PaletteObjectType, AdditionalPalettes, TouchableSizes, AllowCustomProps>({ themes, sizes, additionalPalettes, defaultType, }: TouchableFactoryProps<PaletteObjectType, AdditionalPalettes, TouchableSizes, AllowCustomProps>): React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<TouchableSizes, typeof DEFAULT_TOUCHABLE_SIZES, TouchableSizes>, AllowCustomProps>>;
export default touchableFactory;
//# sourceMappingURL=index.d.ts.map