import React from 'react';
import { OptionalExistCondition, Falsy } from '../../types';
import { ButtonFactoryProps, ButtonProps as Props, ButtonShapeVariation, ButtonSizeProps } from './types';
import { DEFAULT_BUTTON_SIZE } from './constants';
declare function buttonFactory<Themes, AdditionalPalettes, ButtonSize extends Record<string | string, ButtonSizeProps> | Falsy, AllowCustomProps extends boolean | Falsy>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSize, AllowCustomProps>): {
    [key in ButtonShapeVariation]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<ButtonSize, ButtonSize, typeof DEFAULT_BUTTON_SIZE>, AllowCustomProps>>;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map