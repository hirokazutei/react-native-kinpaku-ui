type Color = string;

type DefaultObject<Type> = {default: Type};

type OptionalTrueCheck<T, R> = T extends undefined | null | false
  ? never
  : T extends true
  ? R
  : never;

export {Color, DefaultObject, OptionalTrueCheck};
