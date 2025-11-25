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