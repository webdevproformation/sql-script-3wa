// template literal type 
// qui utilise une condition ternaire 

type AfterDash<T extends string> = T extends `${string}-${infer R}` ? R : never ;  // à compléter

// résultat attendu 

type A = AfterDash<"user-42">; // "42"
type B = AfterDash<"item-abc">; // "abc"
type C = AfterDash<"hello">;    // never (pas de tiret)

const a : A = "42"