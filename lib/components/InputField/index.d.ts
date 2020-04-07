import React from 'react';
import {InputFieldFactoryProps, InputFieldProps as Props} from './types';
import {InputFieldVariations} from './constants';
declare function inputFieldFactory<
  Themes,
  AdditionalPalettes,
  InputFieldSizes
>({
  themes,
  additionalPalettes,
  sizes,
  inputFieldType,
  defaultShape,
}: InputFieldFactoryProps<Themes, AdditionalPalettes, InputFieldSizes>): {
  [key in InputFieldVariations]: React.FunctionComponent<
    Props<AdditionalPalettes, InputFieldSizes>
  >
};
export default inputFieldFactory;
//# sourceMappingURL=index.d.ts.map
