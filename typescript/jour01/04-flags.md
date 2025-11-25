# les options disponibles pour la commande tsc 

sur la documentation officielle : <https://www.typescriptlang.org/tsconfig/>

# liste des options à connaitre

```sh
tsc nom_fichier.ts --target es6
tsc nom_fichier.ts --target es3 # par défaut 

tsc nom_fichier.ts  --removeComments # supprimer les commentaires 

tsc nom_fichier.ts  --outDir dossier # je veux que le fichier final soit dans le dossier  

tsc nom_fichier.ts  --strict # vérification en profondeur de votre javascript et bloquer des possibilités dangereuses de javascript  

tsc *.ts # traduire tous les fichiers qui finissent par .ts

tsc nom_fichier.ts --watch  # traduire le fichier .ts lorsque vous le modifiez sans avoir à relancer la commande à chaque fois  

tsc nom_fichier.ts --outFile nom_fichier_voulu.js

# les commandes peuvent se cumuler : 

tsc nom_fichier.ts --target es6 --removeComments  --outDir dossier --strict --watch
```

```js
const a = 10 ;

a.valeur = "bonjour" ; 

```