import React from 'react';
import { OptionalExistCondition, NonExistent } from '../../types';
import { CheckBoxFactoryProps, CheckBoxProps as Props, CheckBoxShapeVariation, CheckBoxSizeProps } from './types';
import { DEFAULT_CHECK_BOX_SIZES } from './constants';
import { GenericTheme, GenericAdditionalPalette } from '../../theme/types';
declare function checkBoxFactory<Themes extends GenericTheme, AdditionalPalettes extends GenericAdditionalPalette | NonExistent, CheckBoxSize extends Record<string, CheckBoxSizeProps> | NonExistent, AllowCustomProps extends boolean | NonExistent>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: CheckBoxFactoryProps<Themes, AdditionalPalettes, CheckBoxSize, AllowCustomProps>): Record<CheckBoxShapeVariation, React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<CheckBoxSize, CheckBoxSize, typeof DEFAULT_CHECK_BOX_SIZES>, AllowCustomProps>>>;
export default checkBoxFactory;
//# sourceMappingURL=index.d.ts.map