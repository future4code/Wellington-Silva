use julian_wellington_silva_db;

CREATE TABLE Actor(
id varchar(255) primary key,
name varchar (255) not null,
salary float not null,
birth_date date not null,
gender varchar (6) not null
);
## Exercicio1
### A) varchar são o modo de digitarmos as strings
### B) Ela lista o banco que possuimos privilégios
### C) Mostra o que contem em Actor

insert into Actor(id,name,salary,birth_date,gender)
values( "001", "Tony Ramos",400000,"1948-08-25", "male");

##EXERCICIO 2
### A) insert into Actor(id,name,salary,birth_date,gender)
### values( "002", "Glória Pires",1200000,"1963-08-23", "female", "1.63");
### B) 

### Exercício 3
SELECT * FROM Actor; 
SELECT id, salary FROM Actor WHERE  gender = "male";

### A)
SELECT name FROM Actor WHERE gender = "female";

### B)
SELECT salary FROM Actor where name = "Tony Ramos";

### C)
SELECT * FROM Actor WHERE gender = "invalid";

### D)
SELECT id, name, salary from Actor WHERE salary < 500000;

### E)
SELECT id, name from Actor WHERE id = "002";
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
  
CREATE TABLE Movies(
id varchar(255) primary key,
name varchar (255) not null,
sinopse varchar(255) not null,
lançamento date not null,
avaliação float not null
);

describe movies;