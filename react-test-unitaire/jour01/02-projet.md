# projet React 

- Générateur de Questionnaire

 
- App.tsx
    - CreatePoll.tsx  // créer des questionnaires
        - Question.tsx // créer des questions 
            - Answsers.tsx  // créer des réponses possibles aux questions 

# les sources 

- <https://elearning.3wa.fr/mod/resource/view.php?id=53107>
- télécharger le zip
- se positionner avec votre terminal dans le dossier pollbuilder
- lancer la commande `npm i`
- attention il y a des vulnérabilités dans les dépendances `npm audit fix --force`
 
# regarder les sources 

dans le fichier package.json

```json
"jest": "^29.7.0",
"jest-environment-jsdom": "^30.2.0",
"ts-jest": "^29.3.4",
```

deux fichiers de configuration de jest 

- jest.config.ts
- jest.setup.ts

dans le fichier package.json (le runner)

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "test": "jest" xxx 
},
```

toi => navigateur => http://localhost:1234  => pare feu /  REconcialiation DNS  => nodejs

# ne pas faire comme d'habitude

- écrire notre code et executer des tests sans passer par le serveur de développement 
- TDD : Test Driven Development (on doit débord écrire les tests PUIS le code)
- les tests écrit en Typescript via la librairie jest qui vont effectuer les tests 