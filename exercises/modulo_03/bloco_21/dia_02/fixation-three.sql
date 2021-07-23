-- Exercise 1
SELECT
  first_name,
  last_name
FROM
  sakila.staff
UNION
SELECT
  first_name,
  last_name
FROM
  sakila.actor;
-- Exercise 2
SELECT
  first_name
FROM
  sakila.customer
WHERE
  first_name LIKE '%tracy%'
UNION
SELECT
  first_name
FROM
  sakila.actor
WHERE
  first_name LIKE '%je%';
-- Exercise 3
  (
    SELECT
      first_name
    FROM
      sakila.actor
    ORDER BY
      actor_id DESC
    LIMIT
      5
  )
UNION
  (
    SELECT
      first_name
    FROM
      sakila.staff
    LIMIT
      1
  )
UNION
  (
    SELECT
      first_name
    FROM
      sakila.staff
    LIMIT
      5 OFFSET 15
  )
ORDER BY
  first_name ASC;
-- Exercise 4
SELECT
  first_name,
  last_name
FROM
  sakila.customer
UNION
SELECT
  first_name,
  last_name
FROM
  sakila.actor
LIMIT
  15 OFFSET 45;