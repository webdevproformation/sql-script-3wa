// lorsque vous écrivez du javascript 
// vous êtes en train d'écrire du typescript 

let a = 10 ;

function calcul(){}

// fonction fléchée  (disponible dans la version ECMAScript 5)
const division = () => {}

// class (disponible dans la version ECMAScript 5)
class Etudiant{ }

/**
 * message d'erreur
 * Type 'Buffer' does not satisfy the constraint 'ArrayBufferView'
 * npm install -D @types/node@22
 * cd ../jour01
 * tsc 02-hello.ts
 */

// attention le fichier js généré avec la commande ne doit pas être modifié 
// vous ne travaillez QUE avec les fichiers .ts 
// car les modifications vont être écrasées

// tsc 02-hello.ts --target es6
// tsc 02-hello.ts --target es6 --removeComments


function dire_bonjour()
{
    console.log("hello");
}

dire_bonjour()

export {} // tout le code écrit dans ce fichier est local 

// enchainer deux commandes 
// traduire
// &&
// exécuter la code 
// tsc 02-hello.ts --removeComments && node 02-hello.js

/**
 * 
    Créer un nouveau fichier 03-exo.ts
    Ce fichier contient une variable de type tableau, contenant les valeurs suivantes ["lundi", "mardi", "mercredi"]
    Créer un script qui va parcourir tous les éléments du tableau et afficher chaque valeur dans la console
    Créer un script qui va parcourir tous les éléments du tableau et mettre la première lettre du mot en majuscule dans la console
 * 
 */