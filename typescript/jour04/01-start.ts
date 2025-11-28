// fonctions utilitaires 

// ajoute le typage sur javascript 

// créer des types depuis d'autre type 

type Etudiant = string | number ; 

// <https://www.typescriptlang.org/docs/handbook/utility-types.html>

type Formation = {
    nom : string ,
    duree : number ,
    matieres : Array<string>
}

// créer un nouveau type depuis ce type 

type FormationFacultative = Partial<Formation> // Partial<> est une fonction utilitaire 

/*
type FormationFacultative = {
    nom ?: string ,
    duree ?: number ,
    matieres ?: Array<string>
}
*/

type FormationSansDuree = Omit<Formation , 'duree'> // Omit<> supprimer une propriété et conserver les autres 

/*
type FormationSansDuree = {
    nom : string ,
    matieres : Array<string>
}
*/

const a = 1 ; 

class Exo
{
    constructor(
        private readonly duree :  number  // la propriété duree est donner une valeur UNE SEULE FOIS
    )
    {

    }
}

type FormationBloquee = Readonly<Formation> // fonction utilitaire 

/*
type FormationBloquee = {
   readonly nom : string ,
   readonly duree : number ,
   readonly matieres : Array<string>
}
*/

// commande qui contient des produits 
// chaque produit doit contenir 2 clé id et prix

type ListProduit = 'ps4' | 'ps5';
type Produit = {  id : number , prix : number }

type Commande = Record<ListProduit , Produit> // très utilisé en typescript 
                                              // permet de décrire en détail les clés et les valeurs d'un objet 

const commande  : Commande = {
    ps4 : {id : 1 , prix : 10},
    ps5 : {id : 2 , prix : 20}
}

// Parameters / ReturnType 

function requete ( url : string , code_retour : number ) : Array<number | boolean>
{
    return [ 1 ];
}

type ParamFonctionRequete = Parameters<typeof requete> ; 

/**
ParamFonctionRequete = {
    url : string 
    code_retour : number 
}
 * 
 */

type RetourFonctionRequete = ReturnType<typeof requete>

/**
RetourFonctionRequete = Array<number | boolean>
 * 
 */

/*
cas pratique créer le fichier 02-exo.ts

1 créer un type Article contienant 5 propriétés

titre  texte
auteur text
contenu text
date_creation date
etat boolean qui est facultatif

    créer le type ArticleSynthese

qui contient uniquement titre et date_creation

    créer le type ArticleTraducteur

rendre facultatif contenu
rendre obligatoire (readonly titre )
rendre obligatoire (readonly etat )

    créer un nouveau type il doit avoir les clés suivantes

article => type Article
categorie => string 
etags => tableau de string 
*/