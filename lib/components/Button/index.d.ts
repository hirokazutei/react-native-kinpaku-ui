import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { ButtonFactoryProps, ButtonProps as Props, ButtonShapeVariation, ButtonSizeProps } from './types';
import { DEFAULT_BUTTON_SIZE } from './constants';
import { GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare function buttonFactory<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, ButtonSize extends Record<string | string, ButtonSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSize, AllowCustomProps>): Record<ButtonShapeVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<ButtonSize, ButtonSize, typeof DEFAULT_BUTTON_SIZE>, AllowCustomProps>>>;
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map