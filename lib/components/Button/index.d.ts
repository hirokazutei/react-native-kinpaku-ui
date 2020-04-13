import React from 'react';
import { OptionalExistCondition } from '../../types';
import { ButtonFactoryProps, ButtonProps as Props, ButtonShapeVariation } from './types';
import { DEFAULT_BUTTON_SIZE } from './constants';
declare function buttonFactory<Themes, AdditionalPalettes, ButtonSize, AllowCustomProps>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: ButtonFactoryProps<Themes, AdditionalPalettes, ButtonSize, AllowCustomProps>): {
    [key in ButtonShapeVariation]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<ButtonSize, ButtonSize, typeof DEFAULT_BUTTON_SIZE>, AllowCustomProps>>;
};
export default buttonFactory;
//# sourceMappingURL=index.d.ts.map