import React from 'react';
import { TouchableFactoryProps, TouchableProps as Props } from './types';
declare function touchableFactory<PaletteObjectType, AdditionalPalettes, TouchableSizes>({ themes, sizes, additionalPalettes, defaultType, allowCustomProps, }: TouchableFactoryProps<PaletteObjectType, AdditionalPalettes, TouchableSizes>): React.FunctionComponent<Props<AdditionalPalettes, TouchableSizes, typeof allowCustomProps>>;
export default touchableFactory;
//# sourceMappingURL=index.d.ts.map