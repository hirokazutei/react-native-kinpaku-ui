import React from 'react';
import { ButtonFactoryProps, ButtonProps as Props, ButtonVariations } from './types';
import { OptionalExistCondition } from '../../types';
import { DEFAULT_BUTTON_SIZES } from './constants';
declare function buttonFactory<Themes, AdditionalPalettes, ButtonSizes, AllowCustomProps>({ themes, sizes, additionalPalettes, defaultType, }: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSizes, AllowCustomProps>): {
    [key in ButtonVariations]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<ButtonSizes, typeof DEFAULT_BUTTON_SIZES, ButtonSizes>, AllowCustomProps>>;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map