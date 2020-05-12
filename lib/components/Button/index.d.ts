import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { ButtonFactoryProps, ButtonProps as Props, ButtonShapeVariation, ButtonSizeProps } from './types';
import { DEFAULT_BUTTON_SIZE } from './constants';
import { DefaultTheme, GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare function buttonFactory<Themes extends GenericTheme = DefaultTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null, ButtonSize extends Record<string | string, ButtonSizeProps> | NonExistent = null, AllowCustomProps extends boolean | NonExistent = false>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSize, AllowCustomProps>): Record<ButtonShapeVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<ButtonSize, ButtonSize, typeof DEFAULT_BUTTON_SIZE>, AllowCustomProps>>>;
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map