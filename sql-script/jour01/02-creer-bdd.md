# créer une base de données 

- créer la base 
- créer des tables
- relations entre les tables 

## symfony 

utiliser un projet en PHP qui s'appelle Doctrine 

```sh
symfony console doctrine:database:create
symfony console make:entity  # créer une fichier Entity
symfony console make:migration # créer une fichier de migration (SQL)
symfony console doctrine:migrations:migrate # exécuter les fichiers une fichier de migration
```

## découvrir effectuer des opérations sur une base de données 

## créer une base de données qui s'appelle mon_blog

```sql
-- commentaire en sql
/* commentaire en sql  */
-- je veux créer une base de données qui s'appelle mon_blog
-- attention le ; à la fin de la requête est facultatif si je veux effectuer une seule requete sql
-- si je veux enchainer plusieurs requêtes sql le ; est OBLIGATOIRE
CREATE DATABASE IF NOT EXISTS mon_blog ;

-- si je veux créer une base dont le nom contient un espace il faut utiliser le symbole ` backtick 
CREATE DATABASE IF NOT EXISTS `mon blog`
```

```sh
docker compose up -d --build

docker ps -a

docker stop db
docker rm db 
```


## créer une table dans ma base mon_blog

```sql

USE mon_blog ;

CREATE TABLE IF NOT EXISTS etudiant (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    prenom VARCHAR(255) NOT NULL ,
    nom VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 

-- InnoDB => notre table etudiant accepte d'avoir des relations 
-- MyIsam => la table n'accepte pas d'avoir des relations 

```

# cas pratique 


créer un table dans la base de données mon_blog

cette table s'appelle exo1
cette table contient 5 colonnes 

- id clé primaire
- titre texte avec un maximum de 200 lettres n'accepte pas la valeur null
- description texte long > 65 000 caractères avec null par défaut
- auteur texte avec un maximum de 100 lettres non null
- created_at date qui contient AAAA-MM-JJ par défaut c'est maintenant 

```sql
USE mon_blog ;

DROP TABLE IF EXISTS exo3 ; 

CREATE TABLE IF NOT EXISTS exo3(
    id          INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    titre       VARCHAR(200)  ,
    description TEXT ,
    auteur      VARCHAR(100)  ,
    created_at  DATETIME 
)
```


# créer deux tables qui contiennent une relation


créer deux tables 

articles

clé primaire
titre  texte avec maximum de 255 lettres
contenu texte > 65000 caractères

categories 
clé primaire
label
sur cette table nous allons ajouter une clé étrangère  articles_id 

faire en sort que l'article puisse avoir un ou plusieurs catégories 
relation 1 - n / n - 1 


```sql
USE mon_blog ;

CREATE TABLE IF NOT EXISTS articles (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    titre VARCHAR(255) DEFAULT NULL ,
    contenu TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

CREATE TABLE IF NOT EXISTS categories( 
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    label VARCHAR(255) DEFAULT NULL ,
    articles_id INT NOT NULL ,
    FOREIGN KEY (articles_id) REFERENCES articles (id)
);
```

## je veux modifier une table existant 

- je veux garantir que le titre des articles il n'y ait pas de doublon 
- ajouter une contrainte sur la colonne titre : `UNIQUE`

```sql
CREATE TABLE IF NOT EXISTS articles (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    titre VARCHAR(255) UNIQUE DEFAULT NULL ,
    contenu TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;
```

pour une table existante, je veux lui ajouter une nouvelle contrainte 


```sql
-- modifier la structure d'une table existante 
-- rendre la colonne titre UNIQUE (impossible d'avoir des doublons)

-- syntaxe 1

USE mon_blog ;

ALTER TABLE articles 
ADD UNIQUE (titre) ; 

-- syntaxe 2

ALTER TABLE mon_blog.articles
ADD UNIQUE (titre) ; 
```

## relation n-n Many To Many 

produits  
id clé primaire
titre texte avec maximum de 255 lettres

tags
id  clé primaire
label texte avec maximum de 255 lettres

un produit peut être associé à un ou plusieurs tags 
un tag peut  être associé à un ou plusieurs produits 

je dois créer 3 tables 

- produits
- tags
- produits_tags => dans cette table que l'on va ajouter 2 colonnes clés étrangères 


```sql
USE mon_blog ;

CREATE TABLE IF NOT EXISTS produits (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    titre VARCHAR(255) UNIQUE DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

CREATE TABLE IF NOT EXISTS tags (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    label VARCHAR(255) UNIQUE DEFAULT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 ;

CREATE TABLE IF NOT EXISTS produits_tags (
    produits_id INT NOT NULL ,
    tags_id INT NOT NULL ,
    FOREIGN KEY (produits_id) REFERENCES produits (id) ,
    FOREIGN KEY (tags_id) REFERENCES tags (id)
);
```
