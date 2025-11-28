import genererMenu from "./lib/menu.js";
import traitementAjax from "./lib/ajax.js";

console.log("typescript"); 

/** menu */ 

genererMenu(
    document.querySelector("nav")  as HTMLElement , 
    [{url : "#" , "label" : "HOME"}]
)

/** bouton  */

const btn = document.querySelector("button") as HTMLButtonElement ;

btn.addEventListener("click", traitementAjax)
