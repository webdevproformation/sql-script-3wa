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