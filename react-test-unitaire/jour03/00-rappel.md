# Rappel 

créer un test unitaire

```js
describe("scenario", function(){

    // ici 

    function setup()
    {
    // contient le composant à tester
        render(<Question />)
    }

    it("should", function(){
    // préparation 
        setup();

    // assertion 
        expect()
    })


})
```

# composant Anwser 

=> composant enfant de Question

=> récupérer depuis le parent ses valeurs et ses traitements 

=> pas besoin de le faire figurers dans les tests => simuler les traitements qu'on lui envoie


# sélecteur que l'on utilise dans nos tests 

```js

    const addArticle = jest.fn(); // doublure  

 it("should", async function(){
    // préparation 
        setup();


    const btn =  screen.getByRole('button' , { name : "ajouter article" }) // button
        screen.getByDisplayValue() // input / textarea
        screen.getAllByPlaceholderText() // <input placeholder="....." /> tableau

    // action d'un utilisateur cliquer / remplir un formulaire

    await userEvent.click( button )
    await userEvent.clear( input )
    await userEvent.type( input , "valeur à saisir" )

    

    // assertion 
        expect(btn).toBeInDocument()
        expect(addArticle).toHaveBeenCalledWith()
    })
```

```js

function getDevise(monnaie){
    if(monnaie == "Euro"){
        return "€";
    }else{
        return "$";
    }
}


function calculTva( prix , monnaie  , getDevise ){

    const devise = getDevise(monnaie)

    return `${prix * 1.2 } ${devise}`

}

const getDeviseMock = jest.fn();

const valueReturned = calculTva( 1 , "Euro" , getDeviseMock  )

expect(getDeviseMock).toHaveBeenCalledWith("Euro"); 

expect(valueReturned).toBe("1.2 €")

```



```ts

const a : string = "hello"; 

function toto() : string
{
    return "toto"; 
}

// fonction GENERIC
const titi :Array<T> = ( a : T , b : T ) => {


} 


titi (1,2)
titi ("a", "b")

```
