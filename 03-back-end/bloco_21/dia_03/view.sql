-- Exercise 1
CREATE VIEW sakila.film_with_categories AS
SELECT
  f.title,
  fc.category_id,
  c.name
FROM
  sakila.film f
  INNER JOIN sakila.film_category fc ON f.film_id = fc.film_id
  INNER JOIN sakila.category c ON fc.category_id = c.category_id
ORDER BY
  f.title ASC;
SELECT
  *
FROM
  sakila.film_with_categories;
-- Exercise 2
  CREATE VIEW sakila.film_info AS
SELECT
  fa.actor_id,
  CONCAT(a.first_name, ' ', a.last_name) actor,
  f.title
FROM
  sakila.film f
  INNER JOIN sakila.film_actor fa ON f.film_id = fa.film_id
  INNER JOIN sakila.actor a ON a.actor_id = fa.actor_id
ORDER BY
  actor;
SELECT
  *
FROM
  sakila.film_info;
-- Exercise 3
  CREATE VIEW sakila.address_info AS
SELECT
  a.address_id,
  a.address,
  a.district,
  c.city_id,
  c.city
FROM
  sakila.address a
  INNER JOIN sakila.city c ON c.city_id = a.city_id
ORDER BY
  c.city;
SELECT
  *
FROM
  sakila.address_info;
-- Exercise 4
  CREATE VIEW sakila.movies_languages AS
SELECT
  f.title,
  l.language_id,
  l.name
FROM
  sakila.film f
  INNER JOIN sakila.language l ON f.language_id = l.language_id;
SELECT
  *
FROM
  sakila.movies_languages;