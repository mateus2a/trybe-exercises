-- Exercise 1
SELECT
  m.title,
  b.domestic_sales,
  b.international_sales
FROM
  pixar.movies AS m
  INNER JOIN pixar.boxoffice AS b ON m.id = b.movie_id;
-- Exercise 2
SELECT
  m.title,
  b.domestic_sales,
  b.international_sales
FROM
  pixar.movies AS m
  INNER JOIN pixar.boxoffice AS b ON m.id = b.movie_id
WHERE
  b.international_sales > b.domestic_sales;
-- Exercise 3
SELECT
  m.title,
  b.rating
FROM
  pixar.movies AS m
  INNER JOIN pixar.boxoffice AS b ON m.id = b.movie_id
ORDER BY
  b.rating DESC;
-- Exercise 4
SELECT
  *
FROM
  pixar.theater AS t
  LEFT JOIN pixar.movies AS m ON t.id = m.theater_id
ORDER BY
  t.name ASC;
-- Exercise 5
SELECT
  *
FROM
  pixar.theater AS t
  RIGHT JOIN pixar.movies AS m ON t.id = m.theater_id;
-- Exercise 6
SELECT
  f.title
FROM
  pixar.movies f
WHERE
  f.id IN(
    SELECT
      movie_id
    FROM
      pixar.boxoffice b
    WHERE
      b.rating > 7.5
  );
SELECT
  f.title
FROM
  pixar.movies f
  INNER JOIN pixar.boxoffice b ON f.id = b.movie_id
WHERE
  b.rating > 7.5;
-- Exercise 7
SELECT
  b.rating
FROM
  pixar.boxoffice b
  INNER JOIN pixar.movies m ON b.movie_id = m.id
WHERE
  m.year > 2009;
SELECT
  b.rating
FROM
  pixar.boxoffice b
WHERE
  b.movie_id IN(
    SELECT
      id
    FROM
      pixar.movies m
    WHERE
      m.year > 2009
  );
-- Exercise 8
SELECT
  t.name,
  t.location
FROM
  pixar.theater t
WHERE
  EXISTS (
    SELECT
      *
    FROM
      pixar.movies m
    WHERE
      m.theater_id = t.id
  );
-- Exercise 9
SELECT
  t.name,
  t.location
FROM
  pixar.theater t
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      pixar.movies m
    WHERE
      m.theater_id = t.id
  );