# cas pratique

- créer la base : entreprise
- à partir du MCD suivant (voir le schéma)
- réaliser l'ensemble des requêtes SQL permettant de créer cette structure de base de données CREATE TABLE / et les relations entre les tables


```sql
DROP DATABASE IF EXISTS entreprise ;

CREATE DATABASE entreprise ;

USE entreprise ;

CREATE TABLE IF NOT EXISTS service (
    code_service INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    nom_service VARCHAR(255) NOT NULL ,
    chef VARCHAR(255) NOT NULL
); 

CREATE TABLE IF NOT EXISTS projet(
    num_projet INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    nom VARCHAR(255) NOT NULL ,
    description TEXT,
    dt_debut DATETIME NOT NULL,
    dt_fin DATETIME NOT NULL
);

CREATE TABLE IF NOT EXISTS employe (
    matricule INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    prenom VARCHAR(255) NOT NULL ,
    nom VARCHAR(255) NOT NULL ,
    adresse TEXT ,
    fonction VARCHAR(255) NOT NULL ,
    code_service_id INT NOT NULL ,
    CONSTRAINT FK_service_employe FOREIGN KEY (code_service_id) REFERENCES service (code_service)

); 


CREATE TABLE IF NOT EXISTS affecter(
    matricule_employe INT NOT NULL ,
    num_projet_projet INT NOT NULL ,
    DUREE INT NOT NULL ,
    PRIMARY KEY (matricule_employe , num_projet_projet),
    CONSTRAINT FK_affecter_employe FOREIGN KEY (matricule_employe) REFERENCES employe (matricule),
    CONSTRAINT FK_affecter_projet FOREIGN KEY (num_projet_projet) REFERENCES projet (num_projet)
);



USE entreprise ;

CREATE USER 'marketing'@'%' IDENTIFIED BY 'azerty';

GRANT SELECT ON entreprise.* TO 'marketing'@'%' ;

FLUSH PRIVILEGES ; 


```



```sql
DROP DATABASE IF EXISTS entreprise ;

CREATE DATABASE entreprise ;

USE entreprise ;

CREATE TABLE IF NOT EXISTS service (
    code_service INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    nom_service VARCHAR(255) NOT NULL ,
    chef VARCHAR(255) NOT NULL
); 

CREATE TABLE IF NOT EXISTS employe (
    matricule INT NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    prenom VARCHAR(255) NOT NULL ,
    nom VARCHAR(255) NOT NULL ,
    adresse TEXT ,
    fonction VARCHAR(255) NOT NULL ,
    code_service_id INT  ,
    CONSTRAINT FK_service_employe FOREIGN KEY (code_service_id) REFERENCES service (code_service)

); 



```