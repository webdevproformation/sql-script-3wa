# ensemble 2 jours 

- savoir créer des bases de données relationnelles 
- MySQL


# l'environnement d'éxecution

- Docker 
- serveur local => MAMP / XAMPP / WAMP / LARAGON


# docker 

```yml
services:
  db:
    image: mysql:latest
    container_name: db
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: app_db
      MYSQL_USER: db_user
      MYSQL_PASSWORD: db_user_pass
    ports:
      - "6033:3306"
    volumes:
      - dbdata:/var/lib/mysql
  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    container_name: pma
    links:
      - db
    environment:
      PMA_HOST: db
      PMA_PORT: 3306
      PMA_ARBITRARY: 1
    restart: always
    ports:
      - 8081:80
volumes:
  dbdata:
```

root / root les identifiants de connexion en tant qu'admin de la base de données 

```sh
cd jour01
docker compose up -d --build
```

# PHPMyAdmin

http://localhost:8081

- serveur : db
- login : root
- password : root

# Persistance des données sur l'image docker 

- jour01_dbdata : toutes les données sont stockées dans ce espace directement dans Docker Desktop
