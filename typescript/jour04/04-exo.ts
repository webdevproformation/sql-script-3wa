// correction 

type Nullable<T> =  T extends null ? null : T | null  // à compléter


// résultat attendu

type A = Nullable<string>;  // string | null
type B = Nullable<null>;    // null
type C = Nullable<number>;  // number | null

