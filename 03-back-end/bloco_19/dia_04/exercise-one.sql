-- Exercise 1
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username) 
VALUES ('Mateus', 'Alencar', 1, 'mtauws@gmail.com', 1, 1, 'mateusaa');

-- Exercise 2
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username) 
VALUES ('Saulo', 'Pereira', 2, 'sauloolider@gmail.com', 2, 2, 'dimen'),
	   ('Ramon', 'Valzes', 2, 'emanuelramon1@gmail.com', 2, 2, 'kiara');

-- Exercise 3
INSERT INTO actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer LIMIT 5;

-- Exercise 4
INSERT INTO category (name)
VALUES ('Anime'),
('Shoujo'),
('Jujutsu');

-- Exercise 5
INSERT INTO store (manager_staff_id, address_id)
VALUES (3, 3);

