# Touchable

> This doc is on `Touchable` components as well as the `touchableFactory` function.

<p align="middle">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-kinpaku-ui/master/.doc/images/Touchable.png" width="800" />
</p>

## Table of Contents

1. Usage
   1. Using UIFactory
   1. Using touchableFactory
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
import AnotherComponent from '../anotherComponent';
import {themes, additionalPalettes} from '../../colors';

const {Touchable: Touchables} = UIFactory<
  typeof themes,
  typeof additionalPalettes
>({
  themes,
  additionalPalettes,
});

const TouchablePage = () => {
  return (
    <View>
      <Touchable.Fill
        onPress={() => {
          /* Dummy Function */
        }}>
        <AnotherComponent />
      </Touchable.Fill>
    </View>
  );
};

export default TouchablePage;
```

### Using touchableFactory

> `touchableFactory` allows you to create a custom collection of `Touchable` components that has different type variations: `Fill` and `Outline`.

```ts
import React from 'react';
import {View} from 'react-native';
import {touchableFactory} from 'react-native-kinpaku-ui';
import AnotherComponent from '../anotherComponent';

/*
  ... configuration ...
*/

const Touchable = touchableFactory<
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

const TouchablePage = () => {
  return (
    <View>
      <Touchable.Fill
        onPress={() => {
          /* Dummy Function */
        }}>
        <AnotherComponent />
      </Touchable.Fill>
    </View>
  );
};

export default TouchablePage;
```

### Factory Type Arguments

#### `Themes`

> The type of `themes` object.

#### `AdditionaPalettes [Nullable]`

> The type of `additionalPalettes` object.

#### `TouchableSize [Nullable]`

> The type of `sizes` object, which has a default value if the type is not provided.

#### `AllowCustomProps [Nullable]`

> If the factory produces a `Touchable` component that allows custom props or not.

### Factory Arguments

#### `themes`

See more in detail from the Themes doc.

#### `additionalPalettes [Optional]`

See more in detail from the Themes doc.

#### `sizes [Optional]`

> `sizes` is an object with keys dictating the name of the size and value determining the size and shape of the `Touchable` component. If not specified, a default value is used.

```ts
type Sizes = {
  [SizeKey in keyof AddDefaultToObject<
    TouchableSizes,
    TouchableSizeProps
  >]: TouchableSizeProps
};
```

- `TouchableSizes`
  - Is the string literal of the keys of the sizes object.
  - `AddDefaultToObject` means that a default value MUST be specified.
- `TouchableSizeProps`
  - `paddingHorizontal`
    - number
    - required unless `padding` is specified
    - The horizontal padding of the `Touchable`.
    -
  - `paddingVertical`
    - number
    - required unless `padding` is specified
    - The vertical padding of the `Touchable`.
  - `padding`
    - number
    - required unless `paddingVertical` or `paddingHorizontal` are specified
    - The padding of the `Touchable`
  - `borderRadus`
    - number
    - required
    - The border radius of `Touchable` component.

#### `defaultColor [Optional]`

> A string literal of the key in the `ThemePalette` or `AdditionalPalettes`.

```ts
type DefaultColor = keyof (ThemePalette & AdditionalPalettes);
```

## JSDocs

> Just in case having JSDocs on your component declaration comes in handy.

```ts
/**
 * Touchable
 *
 * @param props - properties
 *
 * Required:
 * @param props.children - the children of the touchable
 * @param props.onPress - onPress event of the Touchable
 *
 * Optional:
 * @param [props.align] - the alignment of the text
 * @param [props.color] - color of the Touchable
 * @param [props.isDisabled] - if the Touchable is disabled or not
 * @param [props.isStretched] - if the Touchable spans the entire horizontal space
 * @param [props.size] - size of the Touchable
 *
 * Optional Additional Args:
 * @param [_customProps] - additional props for the TouchableOpacity component
 * @param [_customStyle] - additional styles for the TouchableOpacity component
 */
```
