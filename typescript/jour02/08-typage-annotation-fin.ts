// tableau qui contiennent des objets

type TCoordonnee = {
    x : number ,
    y : number
}

const tableau : Array<TCoordonnee> = [ // syntaxe 1
    { x : 1 , y : 2 },
    { x : 2 , y : 3  }
]

const tableau2 : TCoordonnee[] = [ // syntaxe 2
    { x : 1 , y : 2 },
    { x : 2 , y : 3  }
]

// créer des types en utilisant une combinaire de type 
type ITblCoordonnees = Array<TCoordonnee> ;  // type spécial tableau de coordonnées 


const tableau3 : ITblCoordonnees = [
    { x : 1 , y : 2 },
    { x : 2 , y : 3  }
]

/**
 * créer le fichier 09-exo.ts
 * ce fichier va contenir plusieurs variables
veuillez les typer correctement :

// liste1 = "pêche poire ananas";
// liste2 = ["pêche" , "poire", "ananas"];
// liste3 = ["pêche", 4, "poire", 3, "ananas" , 2];
 liste4 = {
    items : ["pêche", 4, "poire", 3, "ananas" , 2],
    budget : 40 ,
    unite : "euros"
};
liste5 = [
    {id: 1 , nom : "pêche" , quantite : 4},
    {id: 2 , nom : "poire" , quantite : 3},
    {id: 3 , nom : "ananas" , quantite : 2},
];

*/