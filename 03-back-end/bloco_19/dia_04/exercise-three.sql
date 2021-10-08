SET SQL_SAFE_UPDATES = 0;

-- Exercise 1
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- Exercise 2
DELETE FROM sakila.film_actor
WHERE actor_id IN(8, 103, 181);

DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

-- Exercise 3
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

-- Exercise 4
TRUNCATE TABLE sakila.film_actor;
TRUNCATE TABLE sakila.film_category;

-- Exercise 6
DROP DATABASE sakila;
