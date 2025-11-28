var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import {} from "../type/lib-type.js";
function traitementAjax() {
    return __awaiter(this, void 0, void 0, function* () {
        // google => json placeholder > JSONPlaceholder - Free Fake REST API > section ressource > 
        const reponse = yield fetch("https://jsonplaceholder.typicode.com/posts");
        const data = yield reponse.json();
        const div = document.querySelector(".code");
        div.innerHTML = JSON.stringify(data, null, " ");
    });
}
export default traitementAjax;
//# sourceMappingURL=ajax.js.map