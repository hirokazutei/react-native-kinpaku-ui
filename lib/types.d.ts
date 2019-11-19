declare type Color = string;
declare type DefaultObject<T> = {
    default: T;
};
declare type AddDefaultToObject<T, V> = {
    [K in keyof (T & DefaultObject<V>)]: V;
};
declare type AddDefaultKey<T> = T | 'default';
declare type OptionalTrueCheck<T, R> = T extends undefined | null | false ? never : T extends true ? R : never;
export { AddDefaultKey, AddDefaultToObject, Color, DefaultObject, OptionalTrueCheck, };
//# sourceMappingURL=types.d.ts.map