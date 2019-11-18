declare type Color = string;
declare type DefaultObject<Type> = {
    default: Type;
};
declare type OptionalTrueCheck<T, R> = T extends undefined | null | false ? never : T extends true ? R : never;
export { Color, DefaultObject, OptionalTrueCheck };
//# sourceMappingURL=types.d.ts.map