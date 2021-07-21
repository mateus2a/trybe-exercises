-- Exercise 1
SELECT
  rating,
  AVG(length) AS media
FROM
  sakila.film
GROUP BY
  rating
HAVING
  media >= 115.0
  AND media <= 121.50
ORDER BY
  media DESC;
-- Exercise 2
SELECT
  rating,
  SUM(replacement_cost) AS soma
FROM
  sakila.film
GROUP by
  rating
HAVING
  soma > 3950.50
ORDER BY
  soma ASC;