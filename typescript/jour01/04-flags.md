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

# exo


```txt

    créer un nouveau fichier 05-exo.ts
    créer une variable phrase contenant le texte suivant : je découvre typescript et la transpilation en javascript
    créer une fonction qui va permettre de retourner les 4 premiers mots de la phrase et les afficher dans la console

    compiler votre fichier typescript en version 3 de Javascript, dans le dossier dist
    compiler votre fichier typescript en version 6 de Javascript, supprimer les commentaires dans le fichier généré
    compiler votre fichier typescript en version 6 de Javascript, forcer le typage des paramètres de la fonction et cas d’erreur lors de la compilation aucun fichier .js ne devra être généré. Le fichier compilé devra s’appeler correction.js

```