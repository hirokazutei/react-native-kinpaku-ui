# Check Box

> This doc is on `CheckBox` components as well as the `checkBoxFactory` function.

<p align="middle">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-kinpaku-ui/master/.doc/images/CheckBox.png" width="800" />
</p>

## Table of Contents

1. Usage
   1. Using UIFactory
   1. Using checkBoxFactory
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

const {CheckBox: CheckBoxes} = UIFactory<
  typeof themes,
  typeof additionalPalettes
>({
  themes,
  additionalPalettes,
});

const CheckBox = CheckBoxs.Circular;

const CheckBoxPage = () => {
  return (
    <View>
      <CheckBox
        onPress={() => {
          /* Dummy Function */
        }}
      />
    </View>
  );
};

export default CheckBoxPage;
```

### Using checkBoxFactory

> `checkBoxFactory` allows you to create a custom collection of `CheckBox` components that has different shape variations: `Circular`, `Round`, and `Sharp`.

```ts
import React from 'react';
import {View} from 'react-native';
import {checkBoxFactory} from 'react-native-kinpaku-ui';

/*
  ... configuration ...
*/

const {Circular: CheckBox} = checkBoxFactory<
  typeof themes,
  typeof additionalPalettes,
  typeof sizes,
  false
>({
  themes,
  additionalPalettes,
  sizes,
  defaultColor,
  defaultType,
});

const CheckBoxPage = () => {
  return (
    <View>
      <CheckBox
        onPress={() => {
          /* Dummy Function */
        }}
      />
    </View>
  );
};

export default CheckBoxPage;
```

### Factory Type Arguments

#### `Themes`

> The type of `themes` object.

#### `AdditionaPalettes [Nullable]`

> The type of `additionalPalettes` object.

#### `CheckBoxSize [Nullable]`

> The type of `sizes` object, which has a default value if the type is not provided.

#### `AllowCustomProps [Nullable]`

> If the factory produces a `CheckBox` component that allows custom props or not.

### Factory Arguments

#### `themes`

See more in detail from the Themes doc.

#### `additionalPalettes [Optional]`

See more in detail from the Themes doc.

#### `sizes [Optional]`

> `sizes` is an object with keys dictating the name of the size and value determining the size and shape of the `CheckBox` component. If not specified, a default value is used.

```ts
type Sizes = {
  [SizeKey in keyof AddDefaultToObject<
    CheckBoxSize,
    CheckBoxSizeProps
  >]: CheckBoxSizeProps
};
```

- `CheckBoxSize`
  - Is the string literal of the keys of the sizes object.
  - `AddDefaultToObject` means that a default value MUST be specified.
- `CheckBoxSizeProps`
  - `size`
    - number
    - required
    - the diameter of the checkbox

#### `defaultColor [Optional]`

> A string literal of the key in the `ThemePalette` or `AdditionalPalettes`.

```ts
type DefaultColor = keyof (ThemePalette & AdditionalPalettes);
```

#### `defaultType [Optional]`

> The default type of `CheckBox` component: `fill`, `clear` or `outline`

## JSDocs

> Just in case having JSDocs on your component declaration comes in handy.

```ts
/**
 * CheckBox
 *
 * @param props - properties
 *
 * Required:
 * @param props.onPress - onPress event of the CheckBox
 *
 * Optional:
 * @param [props.active] - if the CheckBox is active or not
 * @param [props.color] - color of the CheckBox
 * @param [props.isDisabled] - if the CheckBox is disabled or not
 * @param [props.size] - size of the CheckBox
 * @param [props.type] - type of CheckBox: solid | clear | outline
 *
 * Optional Additional Args:
 * @param [_customOuterViewProps] - additional props for the TouchableOpacity component
 * @param [_customOuterViewStyles] - additional styles for the TouchableOpacity component
 */
```
