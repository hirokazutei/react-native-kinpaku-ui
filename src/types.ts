type Color = string;

type DefaultObject<T> = {default: T};

type AddDefaultToObject<T, V> = {
  [K in keyof (T & DefaultObject<V>)]: V;
};

type AddDefaultKey<T> = T | 'default';

type OptionalTrueCheck<T, R> = T extends undefined | null | false
  ? never
  : T extends true
  ? R
  : never;

export {
  AddDefaultKey,
  AddDefaultToObject,
  Color,
  DefaultObject,
  OptionalTrueCheck,
};
