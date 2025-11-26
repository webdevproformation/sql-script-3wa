// UNION de type barre vertical | 

type A = {
    prenom : string
}

type B = {
    age : number 
}

type AouB = A | B ; 

const a : AouB = { prenom : "a"}
const b : AouB = { age    : 10 }

// Intersection  & 

type Etudiant = {
    nom : string 
    age : number
}

type Adresse = {
    rue : string ,
    ville : string 
}

type EtudiantComplet = Etudiant & Adresse ; // Intersection 

const e :EtudiantComplet = {
    nom : "a",
    age : 22 ,
    rue : "b",
    ville : "c"
}

// récupérer les clés d'un type / objet pour le transformer en type 
type Formation= {
    prix : number,
    duree : number ,
    nom : string 
}

type KeyFormation = keyof Formation ;

const k : KeyFormation = "prix"
const h : KeyFormation = "duree"
const i : KeyFormation = "nom"


// créer le fichier 11-exo.ts
// ce fichier contient un type qui s'appelle Exo
// ce type contient 4 propriete
// etudiant qui est un objet de ayant 2 propriété nom / prénom
// duree chiffre
// enonce texte
// note chiffre

// créer un autre type qui s'appelle Detail qui contient 3 propriétés
// question : string
// reponse : string 


// créer un type qui fusionne Exo et Detail
// créer un type qui peut prendre pour valeurs une des clés de la fusion des deux types Exo et Detail 
