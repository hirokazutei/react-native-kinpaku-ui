import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { RadioButtonFactoryProps, RadioButtonProps as Props, RadioButtonSizeProps, RadioButtonShapeVariation } from './types';
import { DEFAULT_RADIO_BUTTON_SIZE } from './constants';
import { GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare function radioButtonFactory<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, RadioButtonSize extends Record<string | string, RadioButtonSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSize, AllowCustomProps>): Record<RadioButtonShapeVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<RadioButtonSize, RadioButtonSize, typeof DEFAULT_RADIO_BUTTON_SIZE>, AllowCustomProps>>>;
export default radioButtonFactory;
//# sourceMappingURL=index.d.ts.map