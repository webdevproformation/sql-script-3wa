// typage avance 

// Mapped Type => comment accéder aux propriétés d'un type et les modifier

// Généricité 
// propriété avec des opérateurs comme in 

// { [P in K] : T }

// explication 

type Point = {
    x : number ,
    y : number 
}

// syntaxe nouvelle => récupérer une clé du type Point 

type X = Point["x"]  

// X contient le type number  

const adresse = {
    rue : "75 rue de Paris",
    ville : "Lyon"
}

// en js deux syntaxes possible 
adresse.rue 

adresse["rue"]

// la fonction utilitaire ReadOnly 

type PointBloque = Readonly<Point>

// rendre tous les propriétés d'un objet readonly 

type PointBloque2 = {
    readonly [Key in "x" | "y"] : number
}

// { [P in K] : T }
// 3ème manière de créer un type ayant toutes les clés en readonly 

type PointBloque3 = {
    readonly [Key in keyof Point] : number
}

// possibilité de mettre en place des conditions dans la génération de type 

type IsString<T> = T extends string ? true : false ;  

// type qui a une condition sur la généricité 

type A = IsString<string>
type B = IsString<boolean> // étant donné que le générique est boolean, comparaison avec string 
                           // vue que c'est différent alors B aura le type literal false 


// cas pratique 

// créer le fichier 04-exo.ts
/**

Créer un type conditionnel :

type Nullable<T> =  // à compléter

Il doit rendre un type nullable uniquement si ce type n'est pas déjà null.

type A = Nullable<string>;  // string | null
type B = Nullable<null>;    // null
type C = Nullable<number>;  // number | null

 * 
 */