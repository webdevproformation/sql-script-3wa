// 02-typage-inferance.ts


// dès que vous écrivez du code dans un fichier ts => typescript va AUTOMATIQUEMENT typer pour vous vos variables 

let a = 10 ; // automatiquement vu que j'ai créé une variable ET affecter une valeur ALORS a est number 

a = 30 ;

a = [] ; 

// typescript a déduit que c'est un chiffre ET UNIQUEMENT un chiffre (sauf contre ordre de la part du développeur)

const b = 30 ; // étant donné que b est une const et que je lui donne comme valeur la valeur 30 => b est type  number MAIS b est type 30 (type literal )

let c : "hello" = "hello"; // hello c'est à la fois la valeur ET le type => type literal

c = "hello" ;

c = "bonjour" ; 

// cas pratique 

// créer le fichier 03-exo.ts
/**
    ce fichier contient une variable de type objet
    le nom de la variable est formation
    cet objet dispose des propriétés suivantes :

// duree = 2
// unite = "mois"
// sujet = javascript
// matieres = ["node","ajax","typescript"]


    afficher dans la console la phrase suivante : la formation en javascript dure 2 mois et dispose de 3 matières
    transpiler ce script en js et l’exécuter dans le shell

    // utiliser l'inférence de type pour vérifier que le code est correcte 

 */