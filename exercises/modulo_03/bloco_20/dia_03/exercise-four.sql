-- Exercise 1
SELECT COUNT(*) FROM sakila.payment WHERE DATE(payment_date) = '2005-05-25';

-- Exercise 2
SELECT COUNT(*) FROM sakila.payment WHERE payment_date BETWEEN '2005-07-01 00:00:00' AND '2005-08-22 23:59:59';

-- Exercise 3
SELECT rental_date AS Data, 
YEAR(rental_date), 
MONTH(rental_date), 
DAY(rental_date), 
HOUR(rental_date), 
MINUTE(rental_date),
SECOND(rental_date)
FROM sakila.rental WHERE rental_id = 10330;

-- Exercise 4
SELECT * FROM sakila.payment WHERE payment_date BETWEEN '2005-07-28 22:00:00' AND '2005-07-28 23:59:59';
