-- Exercise 1
SELECT
  active,
  COUNT(*)
FROM
  sakila.customer
GROUP BY
  active;
-- Exercise 2
SELECT
  store_id,
  active,
  COUNT(*)
FROM
  sakila.customer
GROUP BY
  store_id,
  active;
-- Exercise 3
SELECT
  AVG(length) AS duration,
  rating
FROM
  sakila.film
GROUP BY
  rating
ORDER BY
  duration;
-- Exercise 4
SELECT
  district,
  COUNT(address) as address
FROM
  sakila.address
GROUP BY
  district
ORDER BY
  address;