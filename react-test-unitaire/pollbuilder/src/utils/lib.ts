export function multiply(a : number , b : number ):number
{
    if(
        typeof(a) != 'number' ||  
        typeof(b) != 'number' 
    ){
        throw new Error("invalid")
    }

    return a * b ; 
}

export function applyDiscount(price : number , discount : number):number
{
    if(discount < 0 || discount > 1){
        throw new Error("Invalid discount");
    }
    return price * (1 - discount); 
}