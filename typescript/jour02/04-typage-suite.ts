type Etudiant = {
    id ?: number , // propriété id est facultative 
    prenom : string ,
    nom : string | number // UNION soit string soit chiffre
}

const etudiant1 : Etudiant = {
    prenom : "Alain",
    nom : "DUPONT"
}


const etudiant2 : Etudiant = {
    id : 2 ,
    prenom : "Benois" , 
    nom : 22
}

// typage par inférence (déduction) les boucles

const prix = [1,2,3,4];

// typescript déduit que p est number car boucle ET que cette boucle utilise prix qui est un Array<number>
for(let p  of prix){
    console.log(p)
}