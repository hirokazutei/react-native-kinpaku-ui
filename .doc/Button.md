# Button

> This doc is on `Button` components as well as the `buttonFactory` function.

<p align="middle">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-kinpaku-ui/master/.doc/images/Button.png" width="800" />
</p>

## Table of Contents

1. Usage
   1. Using UIFactory
   1. Using buttonFactory
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

const {Button: Buttons} = UIFactory<typeof themes, typeof additionalPalettes>({
  themes,
  additionalPalettes,
});

const Button = Buttons.Circular;

const ButtonPage = () => {
  return (
    <View>
      <Button
        onPress={() => {
          /* Dummy Function */
        }}
      />
    </View>
  );
};

export default ButtonPage;
```

### Using buttonFactory

> `buttonFactory` allows you to create a custom collection of `Button` components that has different shape variations: `Circular`, `Round`, and `Sharp`.

```ts
import React from 'react';
import {View} from 'react-native';
import {buttonFactory} from 'react-native-kinpaku-ui';

/*
  ... configuration ...
*/

const {Circular: Button} = buttonFactory<
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

const ButtonPage = () => {
  return (
    <View>
      <Button
        onPress={() => {
          /* Dummy Function */
        }}
      />
    </View>
  );
};

export default ButtonPage;
```

### Factory Type Arguments

#### `Themes`

> The type of `themes` object.

#### `AdditionaPalettes [Nullable]`

> The type of `additionalPalettes` object.

#### `ButtonSize [Nullable]`

> The type of `sizes` object, which has a default value if the type is not provided.

#### `AllowCustomProps [Nullable]`

> If the factory produces a `Button` component that allows custom props or not.

### Factory Arguments

#### `themes`

See more in detail from the Themes doc.

#### `additionalPalettes [Optional]`

See more in detail from the Themes doc.

#### `sizes [Optional]`

> `sizes` is an object with keys dictating the name of the size and value determining the size and shape of the `Button` component. If not specified, a default value is used.

```ts
type Sizes = {
  [SizeKey in keyof AddDefaultToObject<
    ButtonSizes,
    ButtonSizeProps
  >]: ButtonSizeProps
};
```

- `ButtonSizes`
  - Is the string literal of the keys of the sizes object.
  - `AddDefaultToObject` means that a default value MUST be specified.
- `ButtonSizeProps`
  - `paddingHorizontal`
    - number
    - required
    - The horizontal padding of the `Button`.
  - `paddingVertical`
    - number
    - required
    - The vertical padding of the `Button`.
  - `fontSize`
    - number
    - required
    - The font fize of the text.
  - `borderRadus`
    - number
    - required
    - The border radius of `Rounded Button` component.

#### `defaultColor [Optional]`

> A string literal of the key in the `ThemePalette` or `AdditionalPalettes`.

```ts
type DefaultColor = keyof (ThemePalette & AdditionalPalettes);
```

#### `defaultType [Optional]`

> The default type of `Button` component: `fill`, `clear` or `outline`

## JSDocs

> Just in case having JSDocs on your component declaration comes in handy.

```ts
/**
 * Button
 *
 * @param props - properties
 *
 * Required:
 * @param props.label - label of the Button
 * @param props.onPress - onPress event of the Button
 *
 * Optional:
 * @param [props.align] - the alignment of the text
 * @param [props.color] - color of the Button
 * @param [props.isDisabled] - if the Button is disabled or not
 * @param [props.isStretched] - if the Button spans the entire horizontal space
 * @param [props.size] - size of the Button
 * @param [props.type] - type of Button: solid | clear | outline
 *
 * Optional Additional Args:
 * @param [_additionalButtonProps] - additional props for the TouchableOpacity component
 * @param [_additionalButtonStyle] - additional styles for the TouchableOpacity component
 * @param [_additionalTextProps] - additional props for the Text component
 * @param [_additionalTextProps] - additional styles for the Text component
 */
```
