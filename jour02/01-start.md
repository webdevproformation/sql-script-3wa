# relancer votre serveur MySQL 

- MAMP ...
- Docker 

Lancer Docker Desktop 

```sh
cd jour01 # se positionner dans le dossier 
docker compose up -d --build # démarrer les conteneurs
docker compose down # stopper le conteneur et le supprimer des conteneurs actifs
```

http://localhost:8081

- serveur : db (nom du service dans docker compose)
- login : root
- password : root

# rappel 

## créer une base et ma table 


```sql
CREATE DATABASE nom_base ;

USE nom_base ;

CREATE TABLE IF NOT EXIST nom_table(
    nom_colonne INT PRIMARY KEY AUTO_INCREMENT ,
    nom_colonne1 TYPE NOT NULL DEFAULT '' ,
    nom_colonne TYPE NOT NULL DEFAULT '' ,
    nom_colonne TYPE NOT NULL DEFAULT '' ,
    nom_colonne TYPE NOT NULL DEFAULT '' 
)

CREATE TABLE IF NOT EXIST nom_base.nom_table();
```

## une fois que la table est créée 

je peux revenir / modifier la STRUCTURE de la table 

1. ajouter / supprimer une colonne de nouvelles colonnes 
2. modifier une colonne existante
    1. ajouter une contrainte => UNIQUE / transformer en clé étrangère ...
    1. modifier le type INT => DOUBLE  / NOT NULL / oublié le DEFAULT
    3.  renommer une colonne


```sql
USE nom_base ;

ALTER TABLE nom_table 
    instruction_sql_a _saisir ; 
```

# supprimer une colonne

```sql
USE nom_base ;

ALTER TABLE nom_table 
    DROP nom_colonne ; 

ALTER TABLE nom_table 
    DROP COLUMN nom_colonne ; 
```

# renommer une colonne

```sql
USE nom_base ;

ALTER TABLE nom_table 
    CHANGE ancien_nom_colonne nouveau_nom_colonne type_donnee ;
```


# ajouter une contrainte sur une colonne

```sql
USE nom_base ;

-- ajouter la contrainte UNIQUE

ALTER TABLE nom_table 
    ADD UNIQUE (nom_colonne) ;

-- ajouter la contrainte PRIMARY KEY

ALTER TABLE nom_table
    ADD PRIMARY KEY ( nom_colonne ) ;


-- ajouter la contrainte CLE ETRANGERE (FOREIGN KEY)

ALTER TABLE nom_table
    ADD FOREIGN_KEY (nom_colonne_dans_la_table) REFERENCES nom_table_etrangere (id)
```

Cas pratique

dans la base de données `mon_blog`

créer une nouvelle table qui s'appelle exo2 (si elle n'existe pas)
cette table contient 5 colonnes 

id Primary key
nom texte max 255
description texte > 65 000 lettres
prix chiffre à virgule
etat boolean true false 

une fois la table créée je me rends compte que j'ai oublié des éléments dans sa structure 

- j'ai oublié d'ajouter une contrainte sur le nom il doit  être unique 
- le prix est champ qui ne peut pas être null => modifier la structure
- attention j'ai oublié de dire que la colonne etat doit avoir une valeur défaut false
- change le nom de la colonne prix par price 

```sql
USE mon_blog ;

-- supprimer la table exo2 si elle existe 

DROP TABLE IF EXISTS exo2 ;

-- créer la table exo2 si elle n'existe pas

CREATE TABLE IF NOT EXISTS exo2(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    nom VARCHAR(255) ,
    description TEXT ,
    prix DOUBLE(10,2),
    etat BOOLEAN
);

ALTER TABLE exo2 ADD UNIQUE (nom);
ALTER TABLE exo2 MODIFY prix DOUBLE(10,2) NOT NULL;
ALTER TABLE exo2 MODIFY etat  BOOLEAN DEFAULT FALSE ;
ALTER TABLE exo2 CHANGE prix price DOUBLE(10,2) NOT NULL; 
```