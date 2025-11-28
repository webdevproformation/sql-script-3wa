import genererMenu from "./lib/menu.js";
import traitementAjax from "./lib/ajax.js";
console.log("typescript");
/** menu */
genererMenu(document.querySelector("nav"), [{ url: "#", "label": "HOME" }]);
/** bouton  */
const btn = document.querySelector("button");
btn.addEventListener("click", traitementAjax);
//# sourceMappingURL=app.js.map