SET SQL_SAFE_UPDATES = 0;

-- Exercise 1
UPDATE sakila.actor 
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- Exercise 2
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- Exercise 3
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100
AND rating <> 'NC-17'
AND replacement_cost > 20;

-- Exercise 4
UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);