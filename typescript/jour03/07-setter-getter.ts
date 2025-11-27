class A { // style PHP

    private prix ?: number 
    
    public setPrix( p : number):void
    {
        this.prix = p
    }

    public getPrix (): number|undefined
    {
        return this.prix ;  
    }

}

class B { // style typescript ou Javascript 
    private _prix ?: number 
    public set prix( p : number)
    {
        this._prix = p
    }

    public get prix (): number|undefined
    {
        return this._prix ;  
    }

}

const b = new B() 

b.prix = 10 ; // en train d'exécuter le setter
console.log(b.prix)  // en train d'exécuter le getter de la class 

// cas pratique 

/**
 * créer le fichier 08-exo.ts
 * ce fichier contient une class Produit 
 * cette class ne contient de constructeur mais des setter et des getter pour initialiser ses propriétés
 * cette class contient 2 propriétés ref et prix 
 * la référence est obligatoirement un chaine de caractère qui contient au moins 5 lettres 
 * la prix est obligatoirement un chiffre positif 
 * mettre en place cette logique dans les setters
 * si la logique n'est pas respectée lancer une exception qui donne plus d'informations au développeur sur l'erreur rencontrée 
 * 
 */