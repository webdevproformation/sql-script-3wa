# pour utiliser une base de données / table 

- on n'a besoin d'un compte utilisateur

# pour créer votre base de données

compte administrateur de la base => root / root 

# par contre pour faire communiquer votre projet avec la base de données 

il est conseillé de créer un compte utilisateur dédié 
par défaut dès que vous créez une base de données `CREATE DATABASE ` automatiquement le compte `root` est associé à cette base 
il est déconseillé d'utiliser ce compte pour faire communiquer votre projet 

# créer une compte utilisateur dédié à votre base 

```sql
USE nom_base ;

CREATE USER 'nom_utilisateur'@'host' IDENTIFIED BY 'mot_de_passe' ; 
```

# le host

- localhost => la base de donnée doit répondre UNIQUEMENT aux programmes qui sont sur la même machine que la base de données (symfony et mysql) sont sur la même machine
- % => la base de données peut répondre pour les programmes sur et hors de la machine


# donner des droits à l'utilisateur 

- quelle commande ce compte utilisateur peut exécuter ?
- SELECT / UPDATE / ALTER TABLE ....  
- pour associer des commandes sql au profil utilisateur `GRANT`

cas n°1 je veux donner à mon utilisateur tous les droits sur toutes les tables de la base  `nom_base`

```sql
GRANT ALL ON nom_base.* TO 'nom_utilisateur'@'localhost' ; 
```

cas n° 2 je veux donner à mon utilisateur tous les droits sur une table en particulier

```sql
GRANT ALL ON nom_base.nom_table TO 'nom_utilisateur'@'localhost' ; 
```

cas n° 3 je veux donner à mon utilisateur certaines commandes `SELECT INSERT UPDATE DELETE`  sur une table en particulier

```sql
GRANT SELECT ON nom_base.* TO 'marketing'@'localhost' ; 
```

# confirmer finale pour le système l'ajout du projet 

```sql
FLUSH PRIVILEGIES ;
``` 

Attention si vous nous saisissez pas cette commande CREATE USER / GRANT ne sont pas pris en compte par MySQL

# cas pratique 

sur la base de données `mon_blog` créer deux comptes utilisateurs 

premier compte 

- créer un utilisateur nommé `reader` limité au `localhost` et dont le mot de passe sera `I4mZeRe@der`.
- et utilisateur aura le droit de `SELECT` uniquement sur toutes les tables de la base.

deuxième compte 

- un utilisateur nommé `author` limité au `localhost` et dont le mot de passe sera `I4mZe@uthor`.
- Cet utilisateur aura le droit de `SELECT` sur toutes les tables de la base.
- Cet utilisateur aura le droit de `CREATE` et `UPDATE` sur la table `exo2`.

## Correction


```sql
USE mon_blog ;

CREATE USER 'reader'@'localhost' IDENTIFIED BY  'I4mZeRe@der';

GRANT SELECT ON mon_blog.* TO 'reader'@'localhost' ;

CREATE USER 'author'@'localhost' IDENTIFIED BY  'I4mZe@uthor';

GRANT SELECT ON mon_blog.* TO 'author'@'localhost' ;
GRANT CREATE , UPDATE  ON mon_blog.exo2 TO 'author'@'localhost' ;

-- il faut aller dans la table > privilèges pour voir dans phpmyadmin les rôles sélectionnés

FLUSH PRIVILEGES ;
```