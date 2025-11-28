import genererMenu from "./lib/menu.js";

console.log("typescript"); 

 
genererMenu(
    document.querySelector("nav")  as HTMLElement , 
    [{url : "#" , "label" : "HOME"}]
)
