ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

## EXERCÍCIO 1

### A) ALTER TABLE Actor DROP COLUMN salary;
##### Ela ira deletar A coluna salario dos atores

### B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
####  o que era antes gender passou a se chamar sex

### C)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
#### qui ele possui um erro onde não encontra o gender

### D) como não existe mais o campo gender isso precisa ser feito agora no campo sex, ALTER TABLE Actor CHANGE  sex VARCHAR(100).

## EXERCÍCIO 2
### A) UPDATE Actor SET name = "Mari Rui Barbosa" WHERE id = "003"
### B) UPDATE Actor SET name = "JULIANA PÃES" WHERE id = "004";
###  UPDATE Actor SET name = "Juliana Paes" WHERE id = "004";
#### C) UPDATE Actor SET name = "Robert Downey Jr" WHERE id = "005";
#### UPDATE Actor SET salary = 7500000 WHERE id = "005";
#### UPDATE Actor SET birth_day = "1965-04-04" WHERE id = "005"

### D) Ele mudou o conteudo, assim que for criado ele já vai possuir essas informações.

## EXERCICIO 3
### A) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
### B) DELETE FROM Actor WHERE sex = "male" AND salary > 1000000;

## EXERCICIO 4
### A) SELECT MAX(salary) FROM Actor;
### B) SELECT MIN(salary) FROM Actor WHERE gender = "female";
### C) SELECT COUNT(*) FROM Actor WHERE gender = "female";
### D) SELECT SUM(salary) FROM Actor;


## EXERCICIO 5
### A) Ele ira ordenar todos os atores pelo seu genero.
### B) SELECT id, name FROM Actor ORDER BY name DESC;
### C) SELECT * FROM Actor ORDER BY salary;
### D) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
### E) SELECT AVG(salary), gender FROM Actor GROUP BY gender;


## EXERCICIO 6
### A) ALTER TABLE Movie ADD playing_limit_date DATE;
### B) ALTER TABLE Movie CHANGE rating rating FLOAT;
### C) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";
### D) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001"

## EXERCICIO 7
### A) SELECT COUNT(*) FROM Movie WHERE rating > 7.5; 
#### 3

### B) SELECT AVG(rating) FROM Movie;
#### 5.5

### C) SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
#### 5 filmes

### D) SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();
#### 2 filmes

### E) SELECT MAX(rating) FROM Movie;
#### 8.0

### F) SELECT MIN(rating) FROM Movie;
#### 5.0

##EXERCICIO 8
### A) SELECT * FROM Movie ORDER BY title;
### B) SELECT * FROM Movie ORDER BY title LIMIT 5;
### C) SELECT * FROM Movie ORDER BY title LIMIT 5;
### D) SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;








