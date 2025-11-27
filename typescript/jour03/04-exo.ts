

function pluck<T, K extends keyof T>( obj : Array<T> , key : K  ) 
{

    const resultat = [];

    for(let i of obj){ 
        // i = {name: 'Alice', age: 30}
        resultat.push(i[key]) // i.name
    }
    return resultat ;
}


const people = [{name: 'Alice', age: 30}, {name: 'Bob', age: 25}];
console.log(pluck(people, 'name')); // ['Alice', 'Bob']

const a = pluck(people, 'age') ; 