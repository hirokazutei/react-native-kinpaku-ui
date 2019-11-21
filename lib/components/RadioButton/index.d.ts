import React from 'react';
import { RadioButtonFactoryProps, RadioButtonProps as Props, RadioButtonVariations } from './types';
import { OptionalExistCondition } from '../../types';
import { DEFAULT_RADIO_BUTTON_SIZES } from './constants';
declare function radioButtonFactory<Themes, AdditionalPalettes, RadioButtonSizes, AllowCustomProps>({ themes, sizes, additionalPalettes, }: RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSizes, AllowCustomProps>): {
    [key in RadioButtonVariations]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<RadioButtonSizes, typeof DEFAULT_RADIO_BUTTON_SIZES, RadioButtonSizes>, AllowCustomProps>>;
};
export default radioButtonFactory;
//# sourceMappingURL=index.d.ts.map