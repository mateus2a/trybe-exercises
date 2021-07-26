-- Exercise 1
SELECT
  Id,
  Title
FROM
  hotel.books AS bo
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      hotel.books_lent
    WHERE
      bo.Id = book_id
  );
-- Exercise 2
SELECT
  Id,
  Title
FROM
  hotel.books AS bo
WHERE
  EXISTS (
    SELECT
      *
    FROM
      hotel.books_lent
    WHERE
      bo.Id = book_id
      AND bo.title LIKE '%lost%'
  );
-- Exercise 3
SELECT
  Name
FROM
  hotel.customers AS c
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      hotel.carsales AS ca
    WHERE
      c.CustomerId = ca.CustomerID
  );
-- Exercise 4
SELECT
  cus.name,
  car.name
FROM
  hotel.Cars AS car
  INNER JOIN hotel.Customers AS cus
WHERE
  EXISTS(
    SELECT
      *
    FROM
      hotel.CarSales
    WHERE
      CustomerID = cus.CustomerId
      AND carID = car.ID
  );