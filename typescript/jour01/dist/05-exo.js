var phrase = "je découvre typescript et la transpilation en javascript";
// créer une fonction qui va permettre de retourner les 4 premiers mots de la phrase et les afficher dans la console
function getWords(text, nb_mots) {
    var resultat = "";
    var text_array = text.split(" ");
    for (var i = 0; i < nb_mots; i++) {
        resultat += text_array[i] + " ";
    }
    console.log(resultat);
}
getWords(phrase, 4);
// tsc 05-exo.ts && node 05-exo.js
// compiler votre fichier typescript en version 3 de Javascript, dans le dossier dist
// tsc 05-exo.ts --outDir dist && node dist/05-exo.js
