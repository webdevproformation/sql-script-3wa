class CompteBancaire{

    constructor(
        private nom_proprietaire_compte : string ,
        private solde_compte : number
    ){
    }

    public depot(montant : number):void
    {
        this.solde_compte += montant
    }

    public retrait (montant : number):void
    {
        this.solde_compte -= montant
    }

    public solde():number
    {
        return this.solde_compte
    }
}