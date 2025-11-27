class Produit
{
    //private _ref : string = "";
    //private _ref ?: string ;
    //private _ref !: string ;
    private _ref ?: string ;
    private _prix ?: number ;

    public set ref ( ref : string  )
    {
        if(ref.length < 5){
            throw new Error("attention la ref doit avoir au moins 5 caractères");
        }

        this._ref = ref ;
    }

    public set prix ( prix : number  )
    {
        if(prix < 0){
            throw new Error("attention le prix doit avoir un montant positif ou null");
        }
        this._prix = prix ;
    }

    public get ref ()
    {
        return this._ref as string ; 
    }
    
    public get prix ()
    {
        return this._prix as number ; 
    }
}