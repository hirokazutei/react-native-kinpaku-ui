import React from 'react';
import { OptionalExistCondition } from '../../types';
import { RadioButtonFactoryProps, RadioButtonProps as Props, RadioButtonTypeVariation } from './types';
import { DEFAULT_RADIO_BUTTON_SIZE } from './constants';
declare function radioButtonFactory<Themes, AdditionalPalettes, RadioButtonSize, AllowCustomProps>({ themes, sizes, additionalPalettes, }: RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSize, AllowCustomProps>): {
    [key in RadioButtonTypeVariation]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<RadioButtonSize, typeof DEFAULT_RADIO_BUTTON_SIZE, RadioButtonSize>, AllowCustomProps>>;
};
export default radioButtonFactory;
//# sourceMappingURL=index.d.ts.map