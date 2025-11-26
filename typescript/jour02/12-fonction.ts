
type Etudiant = {
    prenom : string
}


function nom( a : string  , b : Etudiant  ) 
// inférence de type fonctionne sur la valeur retournée
// dans ce cas déduit void
{

}

function nom2( a : string  , b : Etudiant  ) 
// inférence de type fonctionne sur la valeur retournée
// retourne string 
{
    return a + b.prenom
}

function nom3( a : string )
// inférence du type de retour literaux false | "bonjour"
{
    if(a === "A") return "bonjour";
    return false ; 
}


function nom4( a : string ) : string | boolean 
// annotation spécial sur le type de retour de la fonction 
{
    if(a === "A") return "bonjour";
    return false ; 
}

// fonction fléchée

const exemple = ( a : string , b : Array<string>) => {
    return a + b[0] ;
}

// pour typer retour d'une fonction fléchée il faut ajouter le type après les parenthèses AVANT la flêche

const exemple2 = ( a : string , b : Array<string>) : string => {
    return a + b[0] ;
}
