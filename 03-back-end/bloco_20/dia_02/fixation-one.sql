-- Exercise 1
SELECT
  a.actor_id,
  a.first_name,
  f.film_id
FROM
  sakila.actor AS a
  INNER JOIN sakila.film_actor AS f ON a.actor_id = f.actor_id;
-- Exercise 2
SELECT
  s.first_name,
  s.last_name,
  a.address
FROM
  sakila.staff AS s
  INNER JOIN sakila.address AS a ON s.address_id = a.address_id;
-- Exercise 3
SELECT
  c.customer_id,
  c.first_name,
  c.email,
  a.address_id,
  a.address
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id;
-- Exercise 4
SELECT
  c.first_name,
  c.email,
  a.address_id,
  a.address,
  a.district
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id;
-- Exercise 5
SELECT
  c.first_name,
  COUNT(a.address_id)
FROM
  sakila.customer AS c
  INNER JOIN sakila.address AS a ON c.address_id = a.address_id
WHERE
  c.active = 1
GROUP BY
  c.first_name
ORDER BY
  c.first_name DESC;
-- Exercise 6
SELECT
  s.first_name,
  s.last_name,
  AVG(p.amount)
FROM
  sakila.staff AS s
  INNER JOIN sakila.payment AS p ON s.staff_id = p.staff_id
WHERE
  YEAR(p.payment_date) = 2006
GROUP BY
  s.first_name,
  s.last_name;
-- Exercise 7
SELECT
  A.actor_id,
  A.first_name,
  F.film_id,
  F.title
FROM
  sakila.actor AS A
  INNER JOIN sakila.film_actor AS FA ON A.actor_id = FA.actor_id
  INNER JOIN sakila.film AS F ON F.film_id = FA.film_id;