
function identity<Toto>( param : Toto  ) : Toto{
    return param
}

identity(5)         // type number → 5
identity("hello")   // type string → "hello"
identity({a: 1})    // type {a:number} → {a:1}

function wrapInArray<T>( param : T ) : [T] // je veux récupérer un tableau AVEC 1 SEULE VALEUR
{
    return [param] ;
}


wrapInArray(10)        // [10] // type / [10,10,10]
wrapInArray("abc")     // ["abc"]
wrapInArray({x: true}) // [{x: true}]

// number[] => [1,2,3,4] [1] [1,2,3,4,5]
// [number] => OK  [1] [2] [3] // KO [1,2]
// [number , number] =>OK   [1,2]      // KO  [1] [2] [3] //

// contrainte avec Extends 

// POO en typescript 