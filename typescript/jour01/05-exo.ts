let phrase = "je découvre typescript et la transpilation en javascript";

// créer une fonction qui va permettre de retourner les 4 premiers mots de la phrase et les afficher dans la console

function getWords( text : string , nb_mots : number ) 
// typescript vous force à typer les paramètres de votre fonction 
{
    let resultat = "";
    const text_array = text.split(" ")

    for(let i = 0 ; i < nb_mots ; i++)
    {
        resultat += text_array[i] + " ";
    }
    console.log(resultat)
}


getWords( phrase , 4 );

// tsc 05-exo.ts && node 05-exo.js

// compiler votre fichier typescript en version 3 de Javascript, dans le dossier dist
// tsc 05-exo.ts --outDir dist && node dist/05-exo.js

// compiler votre fichier typescript en version 6 de Javascript, supprimer les commentaires dans le fichier généré
// tsc 05-exo.ts -t es6 --removeComments && node 05-exo.js
// tsc 05-exo.ts -t es6 --removeComments --module NodeNext && node 05-exo.js

// compiler votre fichier typescript en version 6 de Javascript, forcer le typage des paramètres de la fonction et cas d’erreur lors de la compilation aucun fichier .js ne devra être généré. Le fichier compilé devra s’appeler correction.js

// tsc 05-exo.ts -t es6 --removeComments --module NodeNext --noImplicitAny  && node 05-exo.js
// tsc 05-exo.ts -t es6 --removeComments --module NodeNext --noImplicitAny --NoEmitOnError && node 05-exo.js