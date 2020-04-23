# Input Field

> This doc is on `InputField` components as well as the `inputFieldFactory` function.

<p align="middle">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-kinpaku-ui/master/.doc/images/InputField.png" width="800" />
</p>

## Table of Contents

1. Usage
   1. Using UIFactory
   1. Using inputFieldFactory
   1. Factory Type Arguments
   1. Factory Arguments
1. JSDocs

## Usage

### Using UIFactory

> UIFactory produces all of Kinpaku UI's components using only a `theme` object as well as an optional `additionalPalettes`. For more information regarding UI Factory, check out the UIFactory doc and the Themes doc.

```ts
import React from 'react';
import {View} from 'react-native';
import {UIFactory} from 'react-native-kinpaku-ui';
import {themes, additionalPalettes} from '../../colors';

const {InputField} = UIFactory<typeof themes, typeof additionalPalettes>({
  themes,
  additionalPalettes,
});

const EmailFieldPage = () => {
  return (
    <View>
      <InputField.email value="" />
    </View>
  );
};

export default EmailFieldPage;
```

### Using InputFieldFactory

> `inputFieldFactory` allows you to create a custom collection of `InputField` components that handles different text input scenarios such as `number`, `email`, or `password`.

```ts
import React from 'react';
import {View} from 'react-native';
import {inputFieldFactory} from 'react-native-kinpaku-ui';

/*
  ... configuration ...
*/

const {InputFields} = inputFieldFactory<
  typeof themes,
  typeof additionalPalettes,
  typeof sizes
  false,
>({
  themes,
  additionalPalettes,
  sizes,
  defaultColor,
  inputFieldType,
  defaultShape,
});

const ParagraphPage: React.FC = (): React.ReactElement<null> => {
  return (
    <View>
      <InputField.paragraph value="" />
    </View>
  );
};

export default ParagraphPage;
```

### Factory Type Arguments

#### `Themes`

> The type of `themes` object.

#### `AdditionaPalettes [Optional]`

> The type of `additionalPalettes` object.

#### `InputFieldsizes [Optional]`

> The type of `sizes` object, which has a default value if the type is not provided.

#### `AllowCustomProps [Nullable]`

> If the factory produces a `InputField` component that allows custom props or not.

### Factory Arguments

#### `themes`

See more in detail from the Themes doc.

#### `additionalPalettes [Optional]`

See more in detail from the Themes doc.

#### `sizes [Optional]`

> `sizes` is an object with keys dictating the name of the size and value determining the size and shape of the `InputField`. If not specified, a default value is used.

```ts
type Size = {
  [SizeKey in keyof AddDefaultToObject<
    InputFieldSize,
    InputFieldSizeProps
  >]: InputFieldSizeProps
};
```

- `InputFieldSize`
  - Is the string literal of the keys of the sizes object.
  - `AddDefaultToObject` means that a default value MUST be specified.
- `InputFieldSizePros`
  - `borderRadiusFontRatio`
    - number
    - optional
    - The ratio between the font and the border radius.
  - `borderWidth`
    - number
    - optional
    - The border width of the field.
  - `fontSize`
    - number
    - required
    - The font fize of the text.
  - `paddingHorizontal`
    - number
    - optional
    - The horizontal padding of the field.
  - `paddingVertical`
    - number
    - optional
    - The vertical padding of the field.
  - `padding`
    - number
    - optional
    - The overall padding of the field.
  - `staticBorderRadius`
    - number
    - optional
    - Determines the border radius that does not change depending on font size.

#### `defaultColor [Optional]`

> A string literal of the key in the `ThemePalette` or `AdditionalPalettes`.

```ts
type DefaultColor = keyof (ThemePalette & AdditionalPalettes);
```

#### `inputFieldType [Optional]`

> A string literal that determines the type of the field.

```ts
type InputFieldType = 'Underline' | 'Outline' | 'Fill' | 'UnderlinedFill';
```

#### `defaultShape [Optional]`

> A string literal that determines the shape of the field.

```ts
type InputFieldShape = 'sharp' | 'round' | 'circular';
```

## InputField Variation

> These are the default variations that can be made with `inputFieldFactory` and `UIFactory`. For details on the properties of each variations, checkout this doc.

- `creditCardNumber`
- `decimal`
- `email`
- `freeField`
- `name`
- `number`
- `oneTimeNumberCode`
- `oneTimeCode`
- `paragraph`
- `passcode`
- `password`
- `phone`
- `url`
- `username`

## JSDocs

> Just in case having JSDocs on your component declaration comes in handy.

```ts
/**
 * InputField
 *
 * @param props - properties
 *
 * Required:
 * @param props.value - the value in the InputField
 *
 * Optional:
 * @param [props.autoFocus] - if the InputField should be auto-focused
 * @param [props.backgroundColor] - background color of the InputField
 * @param [props.borderColor] - border color of the InputField
 * @param [props.color] - the main color of the InputField
 * @param [props.defaultValue] - the default value of the InputField
 * @param [props.isDisabled] - if the InputField is disabled
 * @param [props.maxLength] - max length of the InputField
 * @param [props.onBlur] - function that runs on blur
 * @param [props.onChange] - function that runs on change
 * @param [props.onEndEditing] - function that runs on end editing
 * @param [props.onFocus] - function that runs on focus
 * @param [props.onKeyPress] - function that runs on key press
 * @param [props.placeholder] - placeholder of the InputField
 * @param [props.size] - size of the input InputField
 * @param [props.shape] - type of the input InputField: "sharp" | "round" | "circular"
 * @param [props.textColor] - text color of the InputField
 *
 * Optional Additional Args:
 * @param [_customTextProps] - additional props for the TextInput component
 * @param [_customTextStyle] - additional styles for the TextInput component
 * @param [_customWrapperProps] - additional props for the wrapper View component
 * @param [_customWrapperProps] - additional styles for the wrapper View component
 */
```
