import {Color, UnionDefaultKey} from '../types';

type ThemePalette = {
  primary: Color;
  secondary: Color;
  tertiary: Color;
  disabled: Color;
  background: Color;
  text: Color;
};

type Themes<ThemeObject> = Record<
  UnionDefaultKey<keyof ThemeObject>,
  ThemePalette
>;

type GenericTheme = Record<UnionDefaultKey<string | string>, ThemePalette>;
type DefaultTheme = Record<'default', ThemePalette>;

type GenericAdditionalPalette = Record<string, Color>;

export {
  GenericAdditionalPalette,
  DefaultTheme,
  GenericTheme,
  Themes,
  ThemePalette,
};
