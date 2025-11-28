# objectif 

- créer un projet html en utilisant typescript 
- créer un fichier `index.html`
- créer un dossier `src/` qui va contenir l'ensemble des fichiers typescript
- créer un fichier `tsconfig.json` à la racine du projet 
- `tsc --init`
- au lieu de saisir une commande longue `tsc app.ts ....`

# dans le fichier tsconfig.json

- dire où générer les fichiers .js dans le dossier `dist/`
- version de javascript que je veux 
- où chercher les fichiers .ts
- enlever les commentaires (le plus compact)
- mode strict 

# générer le fichier tsconfig.json

```sh
cd jour04-html
tsc --init
```



# lancer le traducteur 

```sh
cd jour04-html
tsc --watch
``` 