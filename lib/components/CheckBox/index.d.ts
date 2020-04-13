import React from 'react';
import { OptionalExistCondition } from '../../types';
import { CheckBoxFactoryProps, CheckBoxProps as Props, CheckBoxShapeVariation } from './types';
import { DEFAULT_CHECK_BOX_SIZES } from './constants';
declare function checkBoxFactory<Themes, AdditionalPalettes, CheckBoxSize, AllowCustomProps>({ themes, sizes, additionalPalettes, defaultColor, defaultType, }: CheckBoxFactoryProps<Themes, AdditionalPalettes, CheckBoxSize, AllowCustomProps>): {
    [key in CheckBoxShapeVariation]: React.FunctionComponent<Props<AdditionalPalettes, OptionalExistCondition<CheckBoxSize, CheckBoxSize, typeof DEFAULT_CHECK_BOX_SIZES>, AllowCustomProps>>;
};
export default checkBoxFactory;
//# sourceMappingURL=index.d.ts.map