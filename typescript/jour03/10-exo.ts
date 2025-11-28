abstract class Vehicule{
    abstract consommation() : number 
    abstract marque () : string 
}


class VW extends Vehicule{

    private _nom ?: string
    private _prix ?: number 
    
    
    public set nom( nom : string)
    {
        this._nom = nom 
    }

    public get nom()
    {
        return this._nom  as string 
    }

    public set prix (prix : number)
    {
        this._prix = prix 
    }

    public get prix()
    {
        return <number>this._prix 
    }

    consommation(): number {
        return 10 ;
    }
    marque(): string {
        return "";
    }

}

class Renault extends Vehicule{

    private _marque : string 
    private propriétaire : string

    constructor(
        marque : string,
        propriétaire : string 
    )
    {
        super( )
        this._marque = marque;
        this.propriétaire = propriétaire
    }

    consommation(): number {
        return 10 ;
    }
    marque(): string {
        return "";
    }
}

