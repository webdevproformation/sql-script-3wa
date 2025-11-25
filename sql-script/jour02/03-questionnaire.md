# allez sur le elearning pour utiliser le formulaire à trou


<https://elearning.3wa.fr/mod/page/view.php?id=52424>


```sql
Création de la database
DATABASE
refuge;
DATABASE refuge
DEFAULT CHARACTER SET utf8mb4
DEFAULT
utf8mb4_general_ci;
USE refuge;

-- Création des tables
TABLE animal (
id INT
PRIMARY KEY,
name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE adoption (
id INT AUTO_INCREMENT
,
animal_id INT NOT NULL,
fk_adoption_animal
(animal_id) REFERENCES animal(id)
CASCADE
ON DELETE RESTRICT,
CONSTRAINT uq_adoption_one_per_animal UNIQUE (animal_id)
) ENGINE=InnoDB;

-- Insertion des données
INTO animal (name)
('Milou'), ('Idéfix'), ('Bill');

INSERT
adoption (animal_id) VALUES (1), (3);
```