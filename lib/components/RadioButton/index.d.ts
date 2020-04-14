import React from 'react';
import { OptionalExistCondition } from '../../types';
import { RadioButtonFactoryProps, RadioButtonProps as Props, RadioButtonShapeVariation } from './types';
import { DEFAULT_RADIO_BUTTON_SIZE } from './constants';
declare function radioButtonFactory<Themes, AdditionalPalettes, RadioButtonSize, AllowCustomProps>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSize, AllowCustomProps>): {
    [key in RadioButtonShapeVariation]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<RadioButtonSize, RadioButtonSize, typeof DEFAULT_RADIO_BUTTON_SIZE>, AllowCustomProps>>;
};
export default radioButtonFactory;
//# sourceMappingURL=index.d.ts.map