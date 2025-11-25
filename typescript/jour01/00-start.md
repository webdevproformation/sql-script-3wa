# Présentation 

3 jours 1/2 journée de Typescript

- Typescript est un super set de Javascript
- lorsque j'écris du js => du ts
- typescript connait tous les mots clé de javascript QUELQUE SOIT sa version
- version 3 (ancien)
- version 5 / Version ECMASCript 5 

Typescript va apporter des mots clés / syntaxe (grammaire) en + (qui n'existe pas en js)

- Typage => qui n'existe pas en JS
- POO (programmation orientée objet)  => en fonction de la version de js 

```js
let a = 10 ; 

// en js 2 choses
créer la variable => a
affecter la valeur => 10 
// automatique js va déduire le type => 10 étant un chiffre entier => number  
```

```ts
let a:number = 10 ; 

a = "coucou" ; 

// en ts 3 choses
// créer la variable => a
// tu lui donnes un type 
// affecter la valeur => 10   

// un avantage => mini documentation
// détecter des erreurs AVANT exécution du code (visual studio et fait en javascript)
// fiabiliser ton projet (notamment des gros projets qui implique une grose quantité de code js / ts )

chrome => moteur (exécuter du javascript) => V8
il a emballé avec java => Node 
```

# historique

- langage créé en 2012
- par Microsoft
- site officiel <https://www.typescriptlang.org/>