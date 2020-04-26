import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { InputFieldFactoryProps, InputFieldProps as Props, InputFieldSizeProps, InputFieldVariation } from './types';
import { DEFAULT_INPUT_FIELD_SIZE } from './constants';
import { GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare function inputFieldFactory<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, InputFieldSize extends Record<string | string, InputFieldSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent>({ themes, additionalPalettes, sizes, shape, defaultColor, defaultType, }: InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSize, AllowCustomProps>): Record<InputFieldVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<InputFieldSize, InputFieldSize, typeof DEFAULT_INPUT_FIELD_SIZE>, AllowCustomProps>>>;
export default inputFieldFactory;
//# sourceMappingURL=index.d.ts.map