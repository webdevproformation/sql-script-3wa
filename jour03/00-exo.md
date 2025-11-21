
une base de donnée qui contient la table suivante


```sql
-- sélectionner la base mon_blog
USE mon_blog ;

-- supprimer la table exo10
DROP TABLE IF EXISTS exo10 ; 

CREATE TABLE exo10 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255)
);

INSERT INTO exo10 (id) VALUES (1);

-- qu'est qu'il se passe ?? 

SELECT * FROM exo10 ;

id 1
titre NULL

-- bonus 
-- connaitre la structure d'une table 
USE mon_blog ;
SHOW CREATE TABLE exo10 ;

-- MySQL ajouter des propriétés en + sur les colonnes (propriétés qui n'ont pas été mise dans le CREATE TABLE )

CREATE TABLE exo10 (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) DEFAULT NULL
);
```

via une DUMP de base de données

```sql
CREATE TABLE `exo10` (
  `id` int NOT NULL,
  `titre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `exo10`
--

INSERT INTO `exo10` (`id`, `titre`) VALUES
(1, NULL);


--
-- Index pour la table `exo10`
--
ALTER TABLE `exo10`
  ADD PRIMARY KEY (`id`);


--
-- AUTO_INCREMENT pour la table `exo10`
--
ALTER TABLE `exo10`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

```




```sql
CREATE TABLE exo2 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) DEFAULT 'bonjour'
);

INSERT INTO exo2 (id) VALUES (1);

id 1
titre 'bonjour'
```

```sql
USE mon_blog ;

DROP TABLE IF EXISTS exo30 ;

CREATE TABLE exo30 (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL DEFAULT 'bonjour'
);

INSERT INTO exo30 (id) VALUES (1); -- // OK 

SELECT * FROM exo30 ;

id 1
titre 'bonjour'

USE mon_blog ;

INSERT INTO exo30 (id , titre) VALUES (1, NULL); // ERREUR 
```

http://localhost:8081