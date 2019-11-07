Factory

- Types
- Props
  - themes
  - additionalPalettes

TextVariations: Text keys -> object

- textTransform?
  - enum('none', 'uppercase', 'lowercase', 'capitalize')
- letterSpacing?
- fontFamily?
- lineHeight?
- fontWeight?
- allowItalic?
- allowBold?
- allowUnderline?
- allowLineThrough?
- fontSize(s)
  - None means that size is specified by numbers
  - one size means that that is the default size
  - multiple sizes means that sizes can be controlled via terms

Component Props

- Color?
- size?? (setFontSize)
- italic??: bool
- bold??: bool
- underline??: bool
- lineThrough??: bool
- children

Props:

- Color
- fontSize
- fontStyle
  - enum('normal', 'italic')
- fontWeight
  - enum('normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
- textAlign
  - enum('auto', 'left', 'right', 'center', 'justify')
- textDecorationLine
  - enum('none', 'underline', 'line-through', 'underline line-through')

Omit

- textDecorationColor
- textShadowOffset
- textShadowRadius
- includeFontPadding
- textAlignVertical
- fontVariant
- textDecorationStyle
- writingDirection
