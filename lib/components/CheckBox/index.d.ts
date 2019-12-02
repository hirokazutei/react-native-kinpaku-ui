import React from 'react';
import { CheckBoxFactoryProps, CheckBoxProps as Props, CheckBoxVariations } from './types';
import { OptionalExistCondition } from '../../types';
import { DEFAULT_CHECK_BOX_SIZES } from './constants';
declare function checkBoxFactory<Themes, AdditionalPalettes, CheckBoxSizes, AllowCustomProps>({ themes, sizes, additionalPalettes, checkBoxShape, }: CheckBoxFactoryProps<Themes, AdditionalPalettes, CheckBoxSizes, AllowCustomProps>): {
    [key in CheckBoxVariations]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<CheckBoxSizes, typeof DEFAULT_CHECK_BOX_SIZES, CheckBoxSizes>, AllowCustomProps>>;
};
export default checkBoxFactory;
//# sourceMappingURL=index.d.ts.map