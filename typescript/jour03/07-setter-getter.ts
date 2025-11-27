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