-- Exercise 1
SELECT first_name, last_name, email FROM sakila.customer WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');

-- Exercise 2
SELECT email FROM sakila.customer WHERE address_id IN (172, 173, 174, 175, 176);

-- Exercise 3
SELECT COUNT(*) FROM sakila.payment WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';

-- Exercise 4
SELECT title, release_year, rental_duration FROM sakila.film 
WHERE rental_duration IN (3, 5, 6)
ORDER BY length DESC, title ASC;

-- Exercise 5
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13') 
ORDER BY title
LIMIT 500;