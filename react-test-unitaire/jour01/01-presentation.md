# tester son code avec du code

- au fur à mesure de votre projet que vous coder 
- créer des fonctions et les tester manuelle 
- si vous avez un gros projet ça devient de plus en plus compliquer de pouvoir tout tester
- si vous avez à modifier du code existant => est que vous avez casser une fonctionnalité que vous avez réalisé précédemment ?? 

# créer du code qui va tester votre code 

- tests unitaires  
- si vous faites progresser votre code => vous avez des scripts qui vont vérifier que tout fonctionne / vous informez si vos modifications casse votre code 

# découvrir les tests unitaires

- dans React et (javascript / typescript)
- CI (Continuous Integration) CD
- utiliser une librairie javascript => Jest  créer par Facebook 
- le site officiel <https://jestjs.io/>
- open source

- s'associer très bien avec n'importe quel projet avec technologies front : React / Vue / Angular ... html et js / typescript 

# Jest 

- runner => binaire  => programme que l'on peut lancer en ligne de commande 
    - `npm run test`
- fonction pour réaliser des tests 

```js
describe()
expect().toBe()
expect().toThrow()
it()

```

- fonction mock 
    - film => acteur / cascadeur / doublure 
    - replacer n'importe quelle fonction de notre code 
    - éviter d'avoir des dépendances entre les fonctions ... 

```js
jest.fn()
```

# pour info installer Jest dans un projet React 

- par défaut lorsque vous installez React (CRA / npm create vite)
- jest n'est pas installé par défaut dans un projet React
- (pas besoin de le faire dans notre projet car il est déjà prêt)


```sh
# installer la librairie
npm install -D jest @types/jest ts-jest

# ajouter une nouvelle clé dans les scripts le fichier package.json
# "test" : "jest"

# créer un fichier de configuration pour jest dans React
# jest.config.js
npx ts-jest config:init
```
