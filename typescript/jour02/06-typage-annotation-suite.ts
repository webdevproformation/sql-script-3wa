// tableau
// objet 


// Tuple (concept qui n'existe pas en JS )

// tableau qui contient un nombre de valeur fixe 

// table qui a obligatoire 2 valeurs 
// la 1ère valeur texte
// la 2ème valeur number

let a : [string , number]  ;
a = [1 , 2]

// vérification du nombre d'élément dans le tableau
// pour chaque élément du tableau verification du type de valeur donnée

/**
 // dans React
 useState() => [ propriété , () => {}  ]
 */

let b : Array<string> ; 

// b est un tableau qui contient un nombre indéfinit de valeur ET TOUTES ces valeurs doivent être des textes

b = ["a" , "b" , 1 , "d"]

let c : string[] ; // 2ème syntaxe pour typer un tableau 


let tableau_js : Array<any> // le comportement par défaut des tableaux en JS

tableau_js = [1, "a" , [] , {} , false ] ; 

let tableau_ts : Array<string | number | boolean>

tableau_ts = [1,"a", 1, true] ; // ça ne fonctionne pas sur la dernière valeur 

let tableau_ts_2 : (string | number | boolean)[]