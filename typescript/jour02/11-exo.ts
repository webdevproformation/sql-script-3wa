// correction

type Exo = {
    etudiant : { nom : string , prenom : string } , 
    duree : number ,
    enonce : string ,
    note :  number 
}

type Detail = {
    question : string , 
    reponse : string 
}

// créer un type qui fusionne Exo et Detail
type ExoComplet = Exo & Detail ;

// créer un type qui peut prendre pour valeurs une des clés de la fusion des deux types Exo et Detail 
type KeyExoComplet = keyof ExoComplet ; 

