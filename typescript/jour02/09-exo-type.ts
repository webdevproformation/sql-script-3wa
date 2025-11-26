type q2 = string[]
type q3 = ( string | number)[]
type q4 = {
    items : q3 ,
    budget : number ,
    unite : string  
}

type produit = { id : number , nom : string , quantite : number  }
type q5 = produit[]

export {
    q2 , q3 , q4 , q5 
}