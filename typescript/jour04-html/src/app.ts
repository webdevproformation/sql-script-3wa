console.log("typescript"); 

type Lien = {
    url : string ,
    label : string 
}


function genererMenu( target : HTMLElement , data : Array<Lien> ):void{

    let html = "<ul class='navbar nav'>";

    for(let lien of data){
        html += `
            <li class="nav-item">
                <a href="${lien.url}" class="nav-link">${lien.label}</a>
            </li>
        `;
    }
    html += "</ul>" ; 
    target.innerHTML = html ; 
}