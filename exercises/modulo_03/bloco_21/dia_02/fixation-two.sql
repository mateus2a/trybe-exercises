-- Exercise 1
SELECT
  f1.film_id,
  f1.replacement_cost,
  f2.film_id,
  f2.replacement_cost
FROM
  sakila.film AS f1,
  sakila.film AS f2
WHERE
  f1.replacement_cost = f2.replacement_cost;
-- Exercise 2
SELECT
  f1.title,
  f1.rental_duration,
  f1.length,
  f2.title,
  f2.rental_duration,
  f2.length
FROM
  sakila.film AS f1,
  sakila.film AS f2
WHERE
  f1.length = f2.length
  AND f1.rental_duration BETWEEN 4
  AND 6
  AND f2.rental_duration BETWEEN 4
  AND 6;