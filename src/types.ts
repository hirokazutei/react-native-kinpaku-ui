type Color = string;

type DefaultObject<T> = {default: T};

type AddDefaultToObject<T, V> = {
  [K in keyof (T & DefaultObject<V>)]: V;
};

type UnionDefaultKey<T> = T | 'default';
type IntersectDefaultKey<T> = T & 'default';

type Falsy = undefined | null | false;

type NonExistent = undefined | null;

type OptionalTrueCondition<T, IfFalse, IfTrue> = T extends Falsy
  ? IfFalse
  : T extends true
  ? IfTrue
  : IfFalse;

type OptionalExistCondition<T, NonExist, Exist> = T extends NonExistent
  ? NonExist
  : Exist;

export {
  AddDefaultToObject,
  Color,
  DefaultObject,
  Falsy,
  NonExistent,
  IntersectDefaultKey,
  OptionalExistCondition,
  OptionalTrueCondition,
  UnionDefaultKey,
};
