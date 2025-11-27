// Généricité


function last( tab :Array<number> ): number
{
    return tab[tab.length - 1]; 
}

const dernier = last([1,2,3]); 
const dernier2 = last(["a","b","c"]); 
const dernier3 = last([{},{},{}]); 

// le problème de la fonction > je dois créer autant de fois la fonction que je peux avoir données dans le tableau

// transformer votre fonction en fonction GENERIQUE 

function last2<T>( tab :Array<T> ): T
{
    return tab[tab.length - 1]; 
}

const dernier4 = last2([1,2,3]); // typescript va déduire le type de la variable dernier4
const dernier5 = last2(["a","b","c"]); 
const dernier6 = last2([{},{},{}]); 

// lorsque tu crées ta fonction => mettre entre le nom de la fonction ET les paramètres < .... >
// fonction générique 

function last3<Param>( tab :Array<Param> ): Param
{
    return tab[tab.length - 1]; 
}

// creer un fonction 

function  requeteAjax<T>( url : string) : Array<T>{
    fetch(url){

    }.then(function(reponse){
        return reponse.json()
    })
    .then(function(data ){
        return data;
        // [{} , {} {} ]
     })
}

const data = requeteAjax("https://etudiant.....") as Array<Etudiant>
const data2 = requeteAjax("https://sujet.....") as Array<Sujet>




// 
const a = document.getElementById("premier")    // .href 
const b = document.querySelector("input") // .value

// créer le fichier 02-exo.ts

// créer une fonction générique qui retourne le type passé en paramètre

/** 
Exemples attendus :

identity(5)         // type number → 5
identity("hello")   // type string → "hello"
identity({a: 1})    // type {a:number} → {a:1}
*/


// créer une fonction générique qui retourne le paramètre dans un tableau.


/** 
wrapInArray(10)        // [10]
wrapInArray("abc")     // ["abc"]
wrapInArray({x: true}) // [{x: true}]
*/