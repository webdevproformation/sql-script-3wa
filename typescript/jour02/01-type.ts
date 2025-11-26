
// créer une variable SANS lui donner de valeur 
let a  ; 

// dans ce cas typescript déduit que a peut prendre n'importe quelle valeur 
// n'importe où

a = 10 ;
a = "bonjour" ;
a = () => { }

// a est un chiffre / string / fonction => pour javascript comportement par défaut
// en typescript si je crée une variable SANS valeur => any  

let b : number ;

b = 10 ;
b = -3.5 ;

b = "hello" ; 

let c : string ;
let d : number  ; // int / float existe en PHP pas en js il n'y a QUE number 

c = "bonjour"
d = 1 ; 

let e = c / d ; // typage retourne une erreur car la division doit être entourée de chiffre / chiffre

let f = 10 / 0 ; // Infinity 

// implicitAny

function calcul( chiffre1 :any , chiffre2 : string  ){
    const total = chiffre1 + chiffre2 ; 
}

// tsc 01-type.ts Meme si il y a une erreur dans le fichier ts => traduction 
// tsc 01-type.ts --noEmitOnError
// tsc 01-type.ts --noEmitOnError && node 01-type.js

// .scss  => traducteur => .css => html et link qui appelle le fichier .css généré 