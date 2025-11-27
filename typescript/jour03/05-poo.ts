// class depuis la version 5 de javascript 


class A {

    // rappel PHP
    private a ?: number  ;    // propriété null ou un chiffre 
    public b  ?: number ;     // propriété null ou un chiffre 
    protected c ?: number ;   // propriété null ou un chiffre 

    // rappel PHP
    // attention !!! on ne met pas le mot clé function entre 
    // la portée de la méthode et le nom de la méthode 
    public use_param()
    {
        this.a = 1; // $this->a en PHP mais en typescript et js this.a
        this.b = 2 ;
        this.c = 3 ; 
    }

    use_param2 (){ // si absence de visibilité par défaut public

    }

}


class B {
    public param_a ;
    public param_b ;
    public param_c ;

    public constructor( a : string , b : number , c ?: boolean){
        this.param_a = a ;
        this.param_b = b ;
        if( c ) {
            this.param_c = c ;
        }
    }
}

// propriété promu

class C {
    constructor(
        public a : string , // à la fois créer une propriété dans la class ET l'initialiser 
        public b : number ,
        public c : boolean
    ){}
}

const c = new C( "a", 1 , true );

// la propriété a est disponible dans l'objet c et a pour valeur "a"
c.a 
c.b 
c.c 


/**
créer le fichier 06-exo.ts
créer dans ce fichier une class CompteBancaire 
cette class contient 2 propriétés 
    nom_proprietaire_compte => texte
    solde_compte  => chiffre

    initialiser ces deux valeurs dans le constructeur de la class 

    en plus du contructeur vous devez créer plusieurs méthodes

    depot avec un paramètre (montant)
        cette methode permet de faire augmenter le montant du solde

    retrait avec un paramètre (montant)
        cette methode permet de réduire le montant du solde

    solde 
        cette méthode permet de savoir quelle est le solde du compte 

    bonus 

        - rendre les propriétés nom_proprietaire_compte et solde_compte privée

        * 
 */