declare type Color = string;
declare type DefaultObject<T> = {
    default: T;
};
declare type AddDefaultToObject<T, V> = {
    [K in keyof (T & DefaultObject<V>)]: V;
};
declare type UnionDefaultKey<T> = T | 'default';
declare type IntersectDefaultKey<T> = T & 'default';
declare type OptionalTrueCondition<T, IfFalse, IfTrue> = T extends undefined | null | false ? IfFalse : T extends true ? IfTrue : IfFalse;
declare type OptionalExistCondition<T, NonExist, Exist> = T extends undefined | null ? NonExist : Exist;
export { AddDefaultToObject, Color, DefaultObject, IntersectDefaultKey, OptionalExistCondition, OptionalTrueCondition, UnionDefaultKey, };
//# sourceMappingURL=types.d.ts.map