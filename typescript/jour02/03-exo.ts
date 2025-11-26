type Formation = {
    duree : number ,
    unite : string ,
    sujet : string ,
    matieres : string[] // Array<string>
}


const formation = { // typescript déduit et générer un type pour chaque propriété de l'objet
    duree : 2,
    unite : "mois",
    sujet : "javascript",
    matieres : ["node","ajax","typescript"]
}

const phrase = `la formation en ${formation.sujet} dure ${formation.duree} ${formation.unite} et dispose de ${formation.matieres.length} matières` ;
