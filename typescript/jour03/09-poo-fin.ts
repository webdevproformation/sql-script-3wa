// héritage 

class A{

    calcul(){}

    calcul_tva(){}
}

class B extends A{ 

    prix_facturer(){
        this.calcul_tva()
    }

}
const b = new B()
b.calcul() ; // héritage

// ---- 

abstract class C{} // class abstraite ne peuvent par être instanciée
                   // elle ne peut être que extends 

const c = new C(); // erreur la class C étant abstraite ne peut pas être instanciée 


// class qui a des méthodes abstraite 

abstract class D{

    // signature de la fonction 
    abstract calcul() : number ; // attention qui a une méthode abstraite doit être abstraite 

    definir_user(){}

    get_information(){

    }
}

class E extends D {

    // la class E doit OBLIGATOIREMENT définir la méthode calcul() qui est abstraite
    // et définir les traitements dedans 

    calcul(): number {
        return 10 
    }

}

const e = new E()

e.calcul()
e.definir_user()
e.get_information()

/**
 * créer le fichier 10-exo.ts
 * 
 * créer une class Vehicule 
 * cette class est une class abstraite qui contient 2 méthodes abstraites
 * consommation doit retourne un chiffre
 * marque doit retourner un string 
 * 
 * cette class Vehicule est la class parent de deux class concrête 
 * 
 * VW 
 * Renault 
 * 
 * ces deux class doivent implémenter les méthodes abstraites du parent Vehicule
 * 
 * pour la class VW elle a deux propriétés privée prix et nom 
 * utiliser les setter et getter pour les initialiser
 * 
 * pour la class Renault elle a un constructeur qui va initialiser deux propriétés marque et propriétaire
 * 
 */