import React from 'react';
import { OptionalExistCondition } from '../../types';
import { TouchableFactoryProps, TouchableProps as Props, TouchableTypeVariations } from './types';
import { DEFAULT_TOUCHABLE_SIZE } from './constants';
declare function touchableFactory<Themes, AdditionalPalettes, TouchableSize, AllowCustomProps>({ themes, sizes, additionalPalettes, }: TouchableFactoryProps<Themes, AdditionalPalettes, TouchableSize, AllowCustomProps>): {
    [key in TouchableTypeVariations]?: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<TouchableSize, typeof DEFAULT_TOUCHABLE_SIZE, TouchableSize>, AllowCustomProps>>;
};
export default touchableFactory;
//# sourceMappingURL=index.d.ts.map