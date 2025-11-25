# pour travailler en Typescript

- installer nodejs `v22.19.0`
- installer le transpiler `traducteur` ts en js 

```sh
npm i -g typescript
```

- l'option `-g` signifie que typescript est disponible sur TOUS les projets de ton ordinateur

- verifier que typscript est disponible dans votre projet

```sh
tsc -v # Version 5.9.3
```

## installation locale de typescript 

```sh
cd typescript/jour01-exemple
npm init --yes
npm i -D typescript@1.8.2
npx tsc -v
npm -x tsc -v
```