import {} from "../type/lib-type.js";
function genererMenu(target, data) {
    let html = "<ul class='navbar nav'>";
    for (let lien of data) {
        html += `
            <li class="nav-item">
                <a href="${lien.url}" class="nav-link">${lien.label}</a>
            </li>
        `;
    }
    html += "</ul>";
    target.innerHTML = html;
}
export default genererMenu;
//# sourceMappingURL=menu.js.map