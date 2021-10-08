-- Exercise 1
SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- Exercise 2
SELECT first_name, last_name FROM sakila.customer 
WHERE active = 0
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name ASC;

-- Exercise 3
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating = 'PG-13'
OR rating = 'PG'
OR rating = 'G'
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC LIMIT 100;

-- Exercise 4
SELECT COUNT(*) FROM sakila.customer
WHERE active = 1
AND store_id = 1;

-- Exercise 5
SELECT * FROM sakila.customer
WHERE store_id = 1
AND active = 0;

-- Exercise 6
SELECT title FROM sakila.film 
WHERE rating = 'NC-17' 
ORDER BY rental_rate ASC, title LIMIT 50;