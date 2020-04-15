# Check Box

> This doc is on `RadioButton` components as well as the `radioButtonFactory` function.

<p align="middle">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-kinpaku-ui/master/.doc/images/RadioButton.png" width="800" />
</p>

## Table of Contents

1. Usage
   1. Using UIFactory
   1. Using radioButtonFactory
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

const {RadioButton: RadioButtones} = UIFactory<
  typeof themes,
  typeof additionalPalettes
>({
  themes,
  additionalPalettes,
});

const RadioButton = RadioButtons.Circular;

const RadioButtonPage = () => {
  return (
    <View>
      <RadioButton
        onPress={() => {
          /* Dummy Function */
        }}
      />
    </View>
  );
};

export default RadioButtonPage;
```

### Using radioButtonFactory

> `radioButtonFactory` allows you to create a custom collection of `RadioButton` components that has different shape variations: `Circular`, `Round`, and `Sharp`.

```ts
import React from 'react';
import {View} from 'react-native';
import {radioButtonFactory} from 'react-native-kinpaku-ui';

/*
  ... configuration ...
*/

const {Circular: RadioButton} = radioButtonFactory<
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

const RadioButtonPage = () => {
  return (
    <View>
      <RadioButton
        onPress={() => {
          /* Dummy Function */
        }}
      />
    </View>
  );
};

export default RadioButtonPage;
```

### Factory Type Arguments

#### `Themes`

> The type of `themes` object.

#### `AdditionaPalettes [Nullable]`

> The type of `additionalPalettes` object.

#### `RadioButtonSize [Nullable]`

> The type of `sizes` object, which has a default value if the type is not provided.

#### `AllowCustomProps [Nullable]`

> If the factory produces a `RadioButton` component that allows custom props or not.

### Factory Arguments

#### `themes`

See more in detail from the Themes doc.

#### `additionalPalettes [Optional]`

See more in detail from the Themes doc.

#### `sizes [Optional]`

> `sizes` is an object with keys dictating the name of the size and value determining the size and shape of the `RadioButton` component. If not specified, a default value is used.

```ts
type Sizes = {
  [SizeKey in keyof AddDefaultToObject<
    RadioButtonSize,
    RadioButtonSizeProps
  >]: RadioButtonSizeProps
};
```

- `RadioButtonSize`
  - Is the string literal of the keys of the sizes object.
  - `AddDefaultToObject` means that a default value MUST be specified.
- `RadioButtonSizeProps`
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

> The default type of `RadioButton` component: `fill`, `clear` or `outline`

## JSDocs

> Just in case having JSDocs on your component declaration comes in handy.

```ts
/**
 * RadioButton
 *
 * @param props - properties
 *
 * Required:
 * @param props.onPress - onPress event of the RadioButton
 *
 * Optional:
 * @param [props.active] - if the RadioButton is active or not
 * @param [props.color] - color of the RadioButton
 * @param [props.isDisabled] - if the RadioButton is disabled or not
 * @param [props.size] - size of the RadioButton
 * @param [props.type] - type of RadioButton: solid | clear | outline
 *
 * Optional Additional Args:
 * @param [_customOuterViewProps] - additional props for the TouchableOpacity component
 * @param [_customOuterViewStyles] - additional styles for the TouchableOpacity component
 */
```
