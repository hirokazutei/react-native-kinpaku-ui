import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { RadioButtonFactoryProps, RadioButtonProps as Props, RadioButtonSizeProps, RadioButtonShapeVariation } from './types';
import { DEFAULT_RADIO_BUTTON_SIZE } from './constants';
import { GenericTheme, GenericAdditionalPalette, DefaultTheme } from '../../theme/types';
declare function radioButtonFactory<Themes extends GenericTheme = DefaultTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent = null, RadioButtonSize extends Record<string | string, RadioButtonSizeProps> | NonExistent = null, AllowCustomProps extends boolean | NonExistent = false>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: RadioButtonFactoryProps<Themes, AdditionalPalettes, RadioButtonSize, AllowCustomProps>): Record<RadioButtonShapeVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<RadioButtonSize, RadioButtonSize, typeof DEFAULT_RADIO_BUTTON_SIZE>, AllowCustomProps>>>;
export default radioButtonFactory;
//# sourceMappingURL=index.d.ts.map