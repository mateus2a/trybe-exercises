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