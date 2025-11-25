var tableau = ["lundi", "mardi", "mercredi"];
//  Créer un script qui va parcourir tous les éléments du tableau et afficher chaque valeur dans la console
for (var _i = 0, tableau_1 = tableau; _i < tableau_1.length; _i++) {
    var jour = tableau_1[_i];
    console.log(jour);
}
// Créer un script qui va parcourir tous les éléments du tableau et mettre la première lettre du mot en majuscule dans la console
for (var _a = 0, tableau_2 = tableau; _a < tableau_2.length; _a++) {
    var jour = tableau_2[_a];
    var premier_lettre = jour[0].toUpperCase();
    var reste_lettres = jour.slice(1, jour.length);
    console.log("".concat(premier_lettre).concat(reste_lettres));
}
// tsc 03-exo.ts && node 03-exo.js
