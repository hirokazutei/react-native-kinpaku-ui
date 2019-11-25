# 🚧 react-native-kinpaku-ui is under construction 🚧

## Philosophy

- Properly Type-Checked Determined by Use
- Coherent Theme Palettes Across The App
- Consistent Cross-Platform Behavior
- Simplicity, Not Overloaded Functionality
- Component Design Describable in Few Common Adjectives

### Properly Type-Checked Determined by Use

- While type checking is a given, how props of the component is type checked should reflect how the user intends to use the component.
- For example, if the user wishes to use string keys to determine the size of the component, using a key that does not exist should show an error.

### Coherent Theme Palettes Across the App

- Component colors should be determined by the `theme` determined by the user that should be used across the application.
- While the `theme` can be switched to say "day mode" and "night mode", the palettes that the components use should be remain consistent.

### Consistent Cross-Platform Behavior

- When possible, avoid platform specific properties to avoid one platform displaying a bahavior that is different from the other and to encourage simplicity.
- Some platform specific properties are unavoidable, but that is ok as long as their inclusion makes the library better to use overall.

### Simplicity, Not Overloaded Functionality

- Niche properties and the ability to deal with edgecase are not the priority of this library. Simplicity and ease of use should be prioritized.
- If the prop's exclusion does not hurt the 99% of the usecases, then it should not be included.

### Component Design Describable in Few Common Adjectives

- The Design Variation of components should be describable in one of four following adjectives: Fill, Outline, Reverse, Clear
- The Shape of components should be describable in one of three following adjectives: Sharp, Rounded, Circular

> The sentiment of the project is to see how feasible it is to have atomic components generated given certain parameters.

[![CircleCI](https://circleci.com/gh/hirokazutei/react-native-kinpaku-ui.svg?style=svg)](https://circleci.com/gh/hirokazutei/react-native-kinpaku-ui)
