-- Exercise 1
SELECT 'This is SQL Exercise, Practice and Solution';

-- Exercise 2
SELECT 21 AS column1, 23 AS column2, 27 AS column3; 

-- Exercise 3
SELECT 10 + 15 AS Soma;

-- Exercise 4
SELECT 15 - 10 AS Sub;

-- Exercise 5
SELECT * FROM scientists.scientists;

-- Exercise 6
SELECT name AS 'Nome do Projeto', hours AS 'Tempo de Trabalho' FROM scientists.projects;

-- Exercise 7
SELECT Name AS 'Nome do Cientista' FROM scientists.scientists ORDER BY name ASC;

-- Exercise 8
SELECT name AS 'Nome do Projeto' FROM scientists.projects ORDER BY name DESC;

-- Exercise 9
SELECT 'O projeto', Name AS Nome, 'precisou de', Hours AS 'horas para ser concluído.'  FROM scientists.projects;

-- Exercise 10
SELECT Name, Hours FROM scientists.projects ORDER BY Hours DESC LIMIT 3;

-- Exercise 11
SELECT DISTINCT Project FROM scientists.assignedto;

-- Exercise 12
SELECT Hours FROM scientists.projects ORDER BY Hours DESC;

-- Exercise 13
SELECT Name FROM scientists.projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;

-- Exercise 14
SELECT * FROM scientists.projects ORDER BY Hours ASC LIMIT 5;

-- Exercise 15
SELECT 'Existem', COUNT(Name), 'cientistas na tabela Scientists.' FROM scientists.scientists;