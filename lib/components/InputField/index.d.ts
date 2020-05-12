import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { InputFieldFactoryProps, InputFieldProps as Props, InputFieldSizeProps, InputFieldVariation } from './types';
import { DEFAULT_INPUT_FIELD_SIZE } from './constants';
import { GenericTheme, GenericAdditionalPalette, DefaultTheme } from '../../theme/types';
declare function inputFieldFactory<Themes extends GenericTheme = DefaultTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null, InputFieldSize extends Record<string | string, InputFieldSizeProps> | NonExistent = null, AllowCustomProps extends boolean | NonExistent = false>({ themes, additionalPalettes, sizes, shape, defaultColor, defaultType, }: InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSize, AllowCustomProps>): Record<InputFieldVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<InputFieldSize, InputFieldSize, typeof DEFAULT_INPUT_FIELD_SIZE>, AllowCustomProps>>>;
export default inputFieldFactory;
//# sourceMappingURL=index.d.ts.map