import {TextInputProps} from 'react-native';

type InputFieldProps = {
  autoFocus: boolean;
  clearTextOnFocus: boolean; // Make yourself
  defaultValue: string;
  disabled: boolean; // editable
  hasClearButton: boolean; // Make Yourself
  maxLength: number;
  multiline: boolean; // Set-up
  onBlur: (args: any) => any;
  onChange: (args: any) => any;
  onEndEditing: (args: any) => any;
  onFocus: (args: any) => any;
  onKeyPress: (args: any) => any;
  palceholder: string;
  selectTextOnFocus: boolean; // Set-up
  value: string;
  returnKeyType: TextInputProps['returnKeyType'];
  caretHidden: boolean; // Set-up
};

export {InputFieldProps};
