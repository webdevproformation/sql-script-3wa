# Sécurité 

- injection SQL 
- <http://testfire.net/login.jsp>
- arriver à accéder à la page de l'admin du site internet SANS connaitre son login et son mot de passe 
- via une injection SQL 
- login : admin
- password : olfjoziehdfozie

Indice  1


SELECT * FROM user WHERE login = 'admin' AND password = 'olfjoziehdfozie'

- par contre nous allons réussir sans connaitre le vrai login et le bon mot de passe
 
Indice  2 bloquer la fin de la requête 

- SELECT * FROM user WHERE login = 'admin' -- AND password = 'olfjoziehdfozie'


<https://owasp.org/>