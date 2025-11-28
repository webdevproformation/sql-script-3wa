import { type Post } from "../type/lib-type.js";

async function traitementAjax()
{
    // google => json placeholder > JSONPlaceholder - Free Fake REST API > section ressource > 
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts")

    const data = await reponse.json() as Array<Post>;

    const div = document.querySelector(".code") as HTMLDivElement ;

    div.innerHTML = JSON.stringify(data , null , " ");
}

export default traitementAjax ; 