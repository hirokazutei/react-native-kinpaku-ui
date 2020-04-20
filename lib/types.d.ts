declare type Color = string;
declare type DefaultObject<T> = {
    default: T;
};
declare type AddDefaultToObject<T, V> = {
    [K in keyof (T & DefaultObject<V>)]: V;
};
declare type UnionDefaultKey<T> = T | 'default';
declare type IntersectDefaultKey<T> = T & 'default';
declare type Falsy = undefined | null | false;
declare type NonExistent = undefined | null;
declare type OptionalTrueCondition<T, IfTrue, IfFalse> = T extends Falsy ? IfFalse : T extends true ? IfTrue : IfFalse;
declare type OptionalExistCondition<T, IfExist, IfNonExist> = T extends NonExistent ? IfNonExist : IfExist;
declare type RequiredIfSpecified<T, RequiredType> = T extends NonExistent ? Required<RequiredType> : never;
export { AddDefaultToObject, Color, DefaultObject, Falsy, NonExistent, IntersectDefaultKey, OptionalExistCondition, OptionalTrueCondition, RequiredIfSpecified, UnionDefaultKey, };
//# sourceMappingURL=types.d.ts.map