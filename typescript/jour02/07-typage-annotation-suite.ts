// pas possible de donner le type Object à un objet 

// car Object n'a pas de propriété durée 

/* const formation : Object = { // typescript déduit et générer un type pour chaque propriété de l'objet
    duree : 2,
    unite : "mois",
    sujet : "javascript",
    matieres : ["node","ajax","typescript"]
}

formation.duree  */

// typer des objets 

// créer des interface 

interface IFormation {
    duree : number ,
    unite : string ,
    sujet : string ,
    matieres : Array<string>
}

let formation : IFormation ; 

// créer des types 

type TFormation = {
    duree : number ,
    unite : string ,
    sujet : string ,
    matieres : Array<string>
}

let formation2 : TFormation ; 

interface Etudiant{
    prenom : string ,
    nom : string 
}

// si je crée à nouveau la même interface les propriétés vont être ajoutée
interface Etudiant{
    age : number
}

const e : Etudiant = {
    prenom : "A",
    nom    : "B" ,
    age    : 10 
}