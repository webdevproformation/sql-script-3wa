# rappels

librairie => `jest`

lancer une commande :

```sh
npm run test 

npm test
```

chercher tous les fichiers qui ont l'extension :

- `.test.js` 
- `.test.ts`
- `.test.tsx`


exécuter son contenu :

```js
describe() // stocker plusieurs test => scénario  de test
it()       // stocker 1 test
expect()   // assertion => ce que l'on veut vérifier


import { traitement } from "../utils/fichier"


describe("scenario name" , function(){

    it("should .... " , function(){
    
        // préparation du test 
        // exécuter un traitement / une fonction / un composant que l'on veut vérifier
        const returnedValue = traitement();
        // comportement attendu / valeur attendue
        const expectedValue = 10 ;

        // assertion (verification) affirmation
        expect(returnedValue).toBe(expectedValue); 
    })

    it("should .... " , function(){
    
    
    })

    it("should .... " , function(){
    
    
    })


    it("should connecte", function(){
        // scenario ou tout fonctionne => parfait 
        
        // créer une compte factice en base de données login et un password (dans la vrai base / ou dans une base de données factices / ROLLBACK )

        // TRANSACTION 

        // .... INSERT 

        // COMMIT 
        // ROLLBACK 

        // accéder à la page où il y a le formulaire

        // remplir le formulaire avec login et password créé précédemment

        // => redirigiré vers le dashboard de l'utilisateur  // redirection
        
        // dans une page où texte dans la page html qui dit "bonjour" // expect()

        // supprimer le compte factice
    })

    // https://jestjs.io/docs/setup-teardown

    beforeAll("", function(){ // Setup => prération des tests 
        // exécuter avant chaque it
    })

    it("should not connecte", function(){
        // scenario ou ça ne fonctionne pas 
        // login invalid / absent
        // password invalide / absent => PROVIDER 
        
        // accéder à la page où il y a le formulaire

        // remplir le formulaire avec login et password créé faux

        // message d'erreur => non expect()
    });


    afterAll("", function(){   // Teardown => nettoyer après les tests 
        // exécuter après chaque it
    })
});
```


## tester des composants React 


// viennent d'une autre librairie en + de jest 
// https://testing-library.com/
// https://testing-library.com/docs/react-testing-library/intro

```tsx

describe("scenario" , function(){
    it("test" , function(){

        render(<Question / >) // exécuter dans une fenêtre web (simuler Chrome)

        screen.getElementById() // récupérer des balises html dans simulateur de navigateur

        userEvent.type()  // écrire dedans avec la simulation de Chrome
        userEvent.click()  // cliquer sur un bouton / lien hypertexte
                
        // ajouter des matcher en + 
        expect().toBeInDocument()
    })

})
```

## fonction de mock 

- lorsque l'on veut faire des tests n'as besoin de dépendance 
- lorsque je veux me connecter j'ai besoin de faire une requête à une base de données 
- j'ai besoin de récupérer certaines informations 
- allonger l'exécuter de mes tests 
- dans ce cas simuler un appel à la base de données via une fonction de type mock 
- film acteur principal (appeler la base de données)
- le cascadeur qui va remplacer l'acteur principal lorsque il y a une scène dangereuse
- il ressemble à l'acteur principal MAIS ce n'est pas lu (donne l'impression)
- lorsque l'on a besoin de vraiment interagir avec le DOM 
- verifier que l'on utilise besoin une fonction qui appelle le DOM 


```js
jest.fn() // fonction de doublure 
          // que l'on peut définir à la volée 
          
const onChange = jest.fn(); // autant de paramètres que je veux ET elle retourne ce que je veux

const onChange = function(a, b){
    return {}
}

const onChange = function(a, b , c){
    return ""
}

const onChange = function(a, b , c){
    return 1 
}
``` 