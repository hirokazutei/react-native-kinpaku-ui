import React from 'react';
import { OptionalExistCondition } from '../../types';
import { InputFieldFactoryProps, InputFieldProps as Props, InputFieldVariation } from './types';
import { DEFAULT_INPUT_FIELD_SIZE } from './constants';
declare function inputFieldFactory<Themes, AdditionalPalettes, InputFieldSize, AllowCustomProps>({ themes, additionalPalettes, sizes, shape, defaultColor, defaultType, }: InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSize, AllowCustomProps>): {
    [key in InputFieldVariation]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<InputFieldSize, InputFieldSize, typeof DEFAULT_INPUT_FIELD_SIZE>, AllowCustomProps>>;
};
export default inputFieldFactory;
//# sourceMappingURL=index.d.ts.map