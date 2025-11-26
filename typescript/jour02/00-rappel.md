# Rappel

- Typescript est une sur couche de javascript
- Lorsque vous écrivez du js valide => écrivez sur Typescript 

- Typescript n'est pas compris par le moteur exécution V8 (chrome)
- il faut le traduire (compiler / transpiler en javascript)


# compiler ts => js // 

```sh
tsc nom_fichier.ts 
npx tsc nom_fichier.ts 

# optione de traduction

tsc nom_fichier.ts --removeComments 
tsc nom_fichier.ts --removeComments --target es6 
tsc nom_fichier.ts --removeComments --target es6 --watch  
tsc nom_fichier.ts --removeComments --target es6 --noImplicitAny   
# typage
tsc nom_fichier.ts --removeComments --target es6 --noImplicitAny --noEmitOnError  
# ne pas générer le fichier .js SI le traducteur (tsc) rencontre des erreurs 
```

# qu'est ce que any ??? 




# organiser un projet js qui doit passer en TS


```txt
node_modules
src/
    /controller
    /route
    /model 
package.json
app.js
```

```txt
node_modules
dist/ (js)
    /controller
    /route
    /model     
src/ (ts)
    /controller
    /route
    /model 
package.json
app.ts
app.js
tsconfig.json
```