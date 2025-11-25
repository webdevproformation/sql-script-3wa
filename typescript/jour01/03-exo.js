let tableau = ["lundi", "mardi", "mercredi"];
for (let jour of tableau) {
    console.log(jour);
}
for (let jour of tableau) {
    const premier_lettre = jour[0].toUpperCase();
    const reste_lettres = jour.slice(1, jour.length).toLowerCase();
    console.log(`${premier_lettre}${reste_lettres}`);
}
