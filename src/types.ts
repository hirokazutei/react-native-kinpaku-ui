type Color = string;

type DefaultObject<T> = {default: T};

type AddDefaultToObject<T, V> = {
  [K in keyof (T & DefaultObject<V>)]: V;
};

type UnionDefaultKey<T> = T | 'default';
type IntersectDefaultKey<T> = T & 'default';

type OptionalTrueCondition<T, IfFalse, IfTrue> = T extends
  | undefined
  | null
  | false
  ? IfFalse
  : T extends true
  ? IfTrue
  : IfFalse;

type OptionalExistCondition<T, NonExist, Exist> = T extends undefined | null
  ? NonExist
  : Exist;

export {
  AddDefaultToObject,
  Color,
  DefaultObject,
  IntersectDefaultKey,
  OptionalExistCondition,
  OptionalTrueCondition,
  UnionDefaultKey,
};
