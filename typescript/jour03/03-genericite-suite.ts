// généricité permet de rendre vos fonctions plus flexibles

function generateDocument<T>( param : T ) : Array<T>
{
    return [param, param]
}

generateDocument(1)
generateDocument("a")

// on peut définir de limites / contraintes à la généricité via le mot clé extends 

function generateFacture<T extends number | string>( param : T) : T{
    return param ;
}

generateFacture(1)
generateFacture("a")
generateFacture(true) // erreur

// j'ai une fonction cette fonction qui prend 
// un objet comme paramètre un objet 
// et un clé de l'objet
//  qui retourne une des valeurs de l'objet

// le deuxième paramètre key dépend de la structure du premier paramètre

function getName<T , K extends keyof T >( obj : T , key : K ){
    return obj[key]
}

const resultat = getName({ name : "toto" } , "name")

const resultat2 = getName({ prix : 10, nom : "PS4" } , "nom")
const resultat3 = getName({ prix : 10, nom : "PS4" } , "prix")
const resultat4 = getName({ prix : 10, nom : "PS4" , description : "" } , "description")

