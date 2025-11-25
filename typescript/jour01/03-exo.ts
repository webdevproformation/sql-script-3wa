let tableau = ["lundi", "mardi" , "mercredi"] ;

//  Créer un script qui va parcourir tous les éléments du tableau et afficher chaque valeur dans la console
for(let jour of tableau)
{
    console.log(jour);
}

// Créer un script qui va parcourir tous les éléments du tableau et mettre la première lettre du mot en majuscule dans la console

for(let jour of tableau)
{
    const premier_lettre = jour[0].toUpperCase();
    const reste_lettres = jour.slice(1, jour.length).toLowerCase()
    console.log(`${premier_lettre}${reste_lettres}`);
}

// tsc 03-exo.ts && node 03-exo.js

// choisir la version de js
// tsc 03-exo.ts --target es6 && node 03-exo.js

// choisir et supprimer les commentaires
// tsc 03-exo.ts --target es6 --removeComments && node 03-exo.js
// tsc 03-exo.ts  --removeComments --target es6 && node 03-exo.js