// ajouter explicitement un type sur une variable


let a : number = 10 ; // n'importe quel chiffre à virgule ou entier
// ajouter après la variable : type voulu => annotation

let b : string ; // texte quelque soit sa taille

let c : boolean ; // true / false 

// concept n'existe pas en js classique 

let d : never ; //

let e : unknown ; // créer une variable dont je ne connais pas le type lorsque je créé la variable c'est UNIQUEMENT au moment de son utilisation plus tard dans le code que je pourrais lui donner un type

(e as number) = 10
e

if(typeof e === "number"){ // typage par CTA (Control Flow Analysis)
    e.toFixed(1)
}else if(typeof e === "string"){
    e.toUpperCase()
}

let f : void  ; // pour les fonctions la fonction ne retourne rien (void => vide)

let g : null ;  // créer une variable et qu'on ne veux pas lui donner de valeur explicite 

let h : undefined ; // créer une variable et que on ne veut pas lui donner de valeur implicite => déduit par typescript 

h = 10 ; 

let i : any ;  // peut prendre n'importe quel valeur à n'importe quel moment du code 
               // si erreur détectée UNIQUEMENT lors de l'exécution du code !!  
i = 10
i = "hello"
i = []


function traitement():number | string  
{
    let toto =  2 ; 
    console.log("t");
    return toto ; 
}

let test = traitement() as number

test   = 2 ;