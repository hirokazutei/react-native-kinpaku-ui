import React from 'react';
import { OptionalExistCondition } from '../../types';
import { InputFieldFactoryProps, InputFieldProps as Props, InputFieldVariation } from './types';
import { DEFAULT_INPUT_FIELD_SIZE } from './constants';
declare function inputFieldFactory<Themes, AdditionalPalettes, InputFieldSize>({ themes, additionalPalettes, sizes, defaultColor, inputFieldType, defaultShape, }: InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSize>): {
    [key in InputFieldVariation]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<InputFieldSize, typeof DEFAULT_INPUT_FIELD_SIZE, InputFieldSize>>>;
};
export default inputFieldFactory;
//# sourceMappingURL=index.d.ts.map