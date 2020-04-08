import {ThemePalette} from './theme/types';

const colorResolverFactory = <AdditionalPalettes>({
  additionalPalettes,
  currentTheme,
}: {
  additionalPalettes?: {[key in keyof AdditionalPalettes]: string};
  currentTheme: {[key in keyof ThemePalette]: string};
}) => {
  const resolver = ({
    color,
    defaultColor,
  }: {
    color?: keyof (ThemePalette & AdditionalPalettes);
    defaultColor: string;
  }) => {
    if (color) {
      if (
        additionalPalettes &&
        additionalPalettes[color as keyof AdditionalPalettes]
      ) {
        return additionalPalettes[color as keyof AdditionalPalettes];
      } else if (currentTheme[color as keyof ThemePalette]) {
        return currentTheme[color as keyof ThemePalette];
      }
    }
    return defaultColor;
  };
  return resolver;
};
export {colorResolverFactory};
