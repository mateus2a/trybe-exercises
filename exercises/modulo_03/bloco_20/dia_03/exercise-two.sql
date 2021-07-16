-- Exercise 1
SELECT * FROM sakila.film WHERE title LIKE '%ace%';

-- Exercise 2
SELECT description FROM sakila.film
WHERE description LIKE '%china';

-- Exercise 3
SELECT description FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

-- Exercise 4
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';

-- Exercise 5
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';

-- Exercise 6
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%'
LIMIT 2;

-- Exercise 7
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%'
LIMIT 6;