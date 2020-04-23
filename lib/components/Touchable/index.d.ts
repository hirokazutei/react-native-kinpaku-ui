import React from 'react';
import { OptionalExistCondition } from '../../types';
import { TouchableFactoryProps, TouchableProps as Props, TouchableShapeVariation } from './types';
import { DEFAULT_TOUCHABLE_SIZE } from './constants';
declare function touchableFactory<Themes, AdditionalPalettes, TouchableSize, AllowCustomProps>({ themes, sizes, additionalPalettes, defaultType, }: TouchableFactoryProps<Themes, AdditionalPalettes, TouchableSize, AllowCustomProps>): {
    [key in TouchableShapeVariation]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<TouchableSize, TouchableSize, typeof DEFAULT_TOUCHABLE_SIZE>, AllowCustomProps>>;
};
export default touchableFactory;
//# sourceMappingURL=index.d.ts.map