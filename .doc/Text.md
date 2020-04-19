# Text

> This doc is on `Text` components as well as the `textFactory` function.

<p align="middle">
  <img src="https://raw.githubusercontent.com/hirokazutei/react-native-kinpaku-ui/master/.doc/images/Text.png" width="800" />
</p>

## Table of Contents

1. Usage
   1. Using UIFactory
   1. Using textFactory
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

const {Title, Heading, SubHeading, Body, Caption, Quote} = UIFactory<
  typeof themes,
  typeof additionalPalettes
>({
  themes,
  additionalPalettes,
});

const TextPage = () => {
  return (
    <View>
      <Title>Sample Text</Title>
    </View>
  );
};

export default TextPage;
```

### Using textFactory

> `textFactory` allows you to create a custom collection of `Text` components that has different text variations: `Title`, `Heading`, `SubHeading`, `Body`, `Caption`, and `Quote`.

```ts
import React from 'react';
import {View} from 'react-native';
import {textFactory} from 'react-native-kinpaku-ui';

/*
  ... configuration ...
*/

const {Title, Heading, SubHeading, Body, Caption, Quote} = textFactory<
  typeof themes,
  typeof additionalPalettes,
  typeof textVariation,
  typeof fontSize,
  false,
  false
>({
  themes,
  additionalPalettes,
  defaultFontSizeKey,
  textVariation,
});

const TextPage = () => {
  return (
    <View>
      <Title>Sample Text<Title/>
    </View>
  );
};

export default TextPage;
```

### Factory Type Arguments

#### `Themes`

> The type of `themes` object.

#### `AdditionaPalettes [Nullable]`

> The type of `additionalPalettes` object.

#### `TextVariation [Nullable]`

> WIP

#### `FontSize [Nullable]`

> WIP

#### `EmphasisToggleable [Nullable]`

> WIP

#### `AllowCustomProps [Nullable]`

### Factory Arguments

#### `themes`

See more in detail from the Themes doc.

#### `additionalPalettes [Optional]`

See more in detail from the Themes doc.

#### `defaultFontSizeKey [Optional]`

> WIP

#### `textVariation [Optional]`

> WIP

## JSDocs

> Just in case having JSDocs on your component declaration comes in handy.

```ts
/**
 * Text
 *
 * @param props - properties
 *
 * Required:
 * @param props.children - string or other next nodes
 *
 * Optional:
 * @param [props.align] - the alignment of the text
 * @param [props.bold] - if the text is bold or not
 * @param [props.color] - the color of the text
 * @param [props.ellipsizeMode] -
 * @param [props.italic] - if the text is italicized or not
 * @param [props.lineThrough] - if the text has a strikethrough or not
 * @param [props.numberOfLines] - the number of lines for the text
 * @param [props.size] - the size of the text
 * @param [props.underline] - if the text is underlined or not
 *
 * Optional Additional Args:
 * @param [_customTextProps] - additional props for the Text component
 * @param [_customTextStyle] - additional styles for the Text component
 */
```
