# le compilateur tsc

- contient beaucoup d'options

```sh
tsc 05-exo.ts -t es6 --removeComments --module NodeNext --noImplicitAny --NoEmitOnError && node 05-exo.js
```

- au lieu d'avoir à saisir des commandes complexes, vous pouvez créer un fichier qui va être lu automatiquement par `tsc` et ajouter pour vous toutes les options de traduction

- le fichier doit s'appeler `tsconfig.json`
- fichier qui donne des indications sur comment traduire le ou les fichiers .ts en fichier .js

# créer le fichier `tsconfig.json` 

```sh
tsc --init
```


# contenu du fichier `tsconfig.json` 

```json
{
    "compilerOptions": {
        "outDir" : "dist" ,
        "removeComments" : true 
    }
}
```
