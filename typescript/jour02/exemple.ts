
function bonjour(prenom : string)
{
    console.log("utiliser typescript dans un projet html par " + prenom);
}

bonjour("Pierre");

// tsc exemple.ts --target es6 --removeComments --watch --module NodeNext  # node js
// tsc exemple.ts --target es6 --removeComments --watch --module commonjs  # js pour navigateur
