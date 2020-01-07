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
declare type OptionalTrueCondition<T, IfFalse, IfTrue> = T extends Falsy ? IfFalse : T extends true ? IfTrue : IfFalse;
declare type OptionalExistCondition<T, NonExist, Exist> = T extends NonExistent ? NonExist : Exist;
export { AddDefaultToObject, Color, DefaultObject, Falsy, NonExistent, IntersectDefaultKey, OptionalExistCondition, OptionalTrueCondition, UnionDefaultKey, };
//# sourceMappingURL=types.d.ts.map