# les types 


```ts
let a :number= 10 ;

let b :string = "bonjour" ;

let b_prim : boolean = 1 > 2 ;

let c : any ; // contenir n'importe quelle valeur à n'importe quel moment

// 
let d : unknown ; // maintenant je ne sais pas mais plutôt je saurai

if( typeof d === "number"){
    d // number
}else if (typeof d === "string")
{
d // string 
(d as 'toto')


}

(d as number) 
```

# objet et les tableaux

```ts
const tab : Array<string> = ["a","b", "c"];
const tab2 : Array<string | number > = ["a","b", "c", 1,2];

const tab : string[] = ["a","b", "c"];
const tab2 : (string | number)[] = ["a","b", "c", 1,2];


type Adresse = {
    rue : string,
    cp : number
}

type Etudiant = {
    prenom : string,
    age ?: number,
    adresse : Adresse | string
}

const etudiant : Etudiant = {
    prenom : "Alain",
    age : 22
    adresse : {
        rue : "75 rue de Paris",
        cp : 75000
    }
}

const etudiant2 : Etudiant = {
    prenom : "Alain",
    adresse : {
        rue : "75 rue de Paris",
        cp : 75000
    }
}

const etudiant2 : Etudiant = {
    prenom : "Alain",
    adresse : "22 rue de Lille 75000"
}

// typer 2 choses dans une fonction
// paramètres
// le retour

function genererPDF(titre : string , auteur : string ):string 
{
}

// fonction fléchée

const genererFacture = (date : Date, montant : number) :string => { }
```

// opération sur les types

```ts
// UNION

type String_Number = string | number ; 
const a : String_Number = 2;
const b : String_Number = "a";

// INTERSECTION &

type Fleur = {
    nom : string
}

type Prix = {
    montant : number
}

type Produit = Fleur & Prix

const f :Produit = { 
    montant : 1 ,
    nom : "Jasmin"
}

// récupérer les clés d'une type

type CaracteristiqueProduit = keyof Produit

```