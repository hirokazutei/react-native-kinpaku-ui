import React from 'react';
import { TouchableFactoryProps, TouchableProps as Props, TouchableTypeOptions } from './types';
declare function touchableFactory<PaletteObjectType, AdditionalPalettes, TouchablePaddingSizes>({ themes, touchablePaddingSizes, additionalPalettes, defaultTouchableType, }: TouchableFactoryProps<PaletteObjectType, AdditionalPalettes, TouchablePaddingSizes>): {
    [key in TouchableTypeOptions]: React.FunctionComponent<Props<AdditionalPalettes, TouchablePaddingSizes>>;
};
export default touchableFactory;
//# sourceMappingURL=index.d.ts.map