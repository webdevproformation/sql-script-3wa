"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let phrase = "je découvre typescript et la transpilation en javascript";
function getWords(text, nb_mots) {
    let resultat = "";
    const text_array = text.split(" ");
    for (let i = 0; i < nb_mots; i++) {
        resultat += text_array[i] + " ";
    }
    console.log(resultat);
}
getWords(phrase, 4);
