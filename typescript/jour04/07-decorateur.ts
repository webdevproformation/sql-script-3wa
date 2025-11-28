// décorateur 

// très utilisé sur le framework Angular (concurrent de React)
// réalisé par Google 

// le principe c'est de créer une fonction qui permet de modifier le comportement d'une class 

// permet d'exécuter du code avant ou après un traitement dans une class 

// pourquoi utiliser les décorateurs

// Log => journaliser 
// vérifier et valider Entity => #[Asset/NotNull]
// Sécurité 
// Injection de dépendance 
// ORM (Doctrine en PHP)

// qu'est ce que l'on peut décorer ??

// class 
// méthode 
// propriété
// paramètre d'une méthode 


// décorateur de class 

function Log( constructor : Function ){
    console.log("class Etudiant vient d'être créé la le décorateur")
}

@Log // la fonction Log va décorer la class Etudiant 
// cette fonction permet de créer une nouvelle instance de la class Etudiant 
class Etudiant{

}

const a = new Etudiant() ;  


// décorateur de type factory (function qui retourne soit une fonction soit un objet )

type Options = {
    selecteur : string ,
    css : Array<string>
}

function Decorator(options : Partial<Options>)
{
    return function(constructor : Function){
        console.log(options , constructor)
    }
}

// décorateur : modifier le comportement d'une class : fonction qui modifie une class 

@Decorator({
    selecteur : ".demo",
    css : ["style.css"]
}) // décorateur avec paramètre 
class HomePage{

}

// créer une nouveau fichier 08-exo.ts

/**
 * vous devez créer une fonction décoratrice qui permet de réaliser une validation sur une propriété d'une class 
 * 
 * function MinLength(length: number) {  }
 * 
 * 
 * class Person {
  @MinLength(3)
    username!: string;
    }

    const p = new Person();
    p.username = "Jo";     // ❌ erreur
    p.username = "John";   // ✔ OK

// voici le résultat attendu 

 * const p = new Person();
    p.username = "Jo";     // ❌ erreur
    p.username = "John";   // ✔ OK
 */
