<h1 align="center">
    react-native-kinpaku-ui
</h1>

<p align="center">
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=svg" />
    </a>
    <a href="https://www.npmjs.org/package/react-native-kinpaku-ui">
        <img src="https://img.shields.io/npm/v/react-native-kinpaku-ui.svg?style=svg&color=blue" />
    </a>
    <a href="https://github.com/hirokazutei/react-native-kinpaku-ui/commits/develop">
        <img src="https://img.shields.io/github/last-commit/hirokazutei/react-native-kinpaku-ui.svg?style=svg" />
    </a>
    <a href="https://github.com/hirokazutei/react-native-kinpaku-ui/pulls">
        <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=svg" />
    </a>
        <a href="https://circleci.com/gh/hirokazutei/react-native-kinpaku-ui">
        <img src="https://circleci.com/gh/hirokazutei/react-native-kinpaku-ui.svg?style=shield" />
    </a
</p>

<p align="center">
    <a href="https://facebook.github.io/react-native/">
        <img src="https://img.shields.io/badge/-ReactNative-black.svg?style=for-the-badge&logo=react&logoColor=white&color=61DAFB">
    </a>
    <a href="https://www.npmjs.com/package/react-native-kinpaku-ui">
        <img src="https://img.shields.io/badge/-NPM-black.svg?style=for-the-badge&logo=NPM&color=CB3837">
    </a>
    <a href="https://www.typescriptlang.org/">
        <img src="https://img.shields.io/badge/-Typescript-black.svg?style=for-the-badge&logo=typescript&color=007ACC">
    </a>
</p>

<h3 align="center">
    🚧 Still Under Construction 🚧
</h3>

## Philosophy

> Properly Type-Checked Determined by Use
> Coherent Theme Palettes Across The App
> Consistent Cross-Platform Behavior
> Simplicity, Not Overloaded Functionality
> Component Design Describable in Few Common Adjectives

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
- The Shape of components should be describable in one of three following adjectives: Sharp, Round, Circular

> The sentiment of the project is to see how feasible it is to have atomic components generated given certain parameters.

# Dev Setup

Install Node Modules:

```
$ npm install
```

Make sure you have Bundler installed:

```
gem install bundler
```

Install the ruby dependencies:

```
bundle install
```

Install Pods:

```
go to your ios directory
$ bundle exec pod install
```

Open workspace with Xcode and build the project:

```
$ open ios/KinpakuUI.xcworkspace/
```

Load `storyLoader.js`:
`$ npm run story-loader`

Run Storybook:
`$ npm run storybook`

<h2 align="center">
    Contacts & Social Media
</h2>
<p align="center">
    <a href="https://twitter.com/asublimeaddict">
        <img src="https://img.shields.io/badge/-Twitter-black.svg?style=for-the-badge&logo=twitter&logoColor=white&color=1DA1F2">
    </a>
    <a href="https://www.linkedin.com/in/hirokazutei/">
        <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&color=0077B5">
    </a>
    <a href="https://www.instagram.com/hirokazutei/">
        <img src="https://img.shields.io/badge/-Instagram-black.svg?style=for-the-badge&logo=instagram&logoColor=white&color=E4405F">
    </a>
    <a href="https://medium.com/@hirokazutei/enforcing-component-spacing-in-react-react-native-556b8ef90dea">
        <img src="https://img.shields.io/badge/-Medium-black.svg?style=for-the-badge&logo=Medium&logoColor=white&color=12100E">
    </a>
    <a href="https://hirokazutei.me">
        <img src="https://img.shields.io/badge/-Blog-black.svg?style=for-the-badge&logo=about.me&logoColor=white&color=gray">
    </a>
</p>
