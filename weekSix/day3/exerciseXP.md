-- 1.
-- select name from language
-- select * from FILM
-- SELECT * FROM language 
-- 2. 
--  SELECT film.title, film.description, language.name
--  FROM film 
--  LEFT JOIN language
--  ON film.language_id = language.language_id
-- 3.

-- CREATE TABLE new_film (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50)
-- )
-- INSERT INTO new_film( name)
-- VALUES('Aladdin'),
-- 	('Star Wars')
-- SELECT * FROM new_film
-- INSERT INTO new_film(name)
-- VALUES('Jumanji'),
-- 	('Fast and Furious')
-- 4.

-- CREATE TABLE customer_review(
-- 	review_id SERIAL PRIMARY KEY NOT NULL,
-- 	film_id INTEGER REFERENCES  new_film (id) ON DELETE CASCADE,
-- 	language_id INTEGER REFERENCES language (language_id),
-- 	title VARCHAR(50),
-- 	score INTEGER,
-- 	review_text VARCHAR(1000000),
-- 	last_update DATE
-- )

-- 5.
-- INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update)
-- VALUES (1, 1, 'Good movie', 8, 'It was a really nice movie, nice dances and good quality', '2021-04-21')
-- INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update)
-- VALUES (2, 1, 'Exellent', 10, 'Best movies ever, i like it all the characters', '2020-08-01')
-- INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update)
-- VALUES (3, 1, 'Scary', 9, 'I watched when i was i child and really scary me, what a nice movie', '2019-12-25'),
-- 		(4,1,'Family', 9, 'I learned the family is the most important thing in life', '2021-06-13')

-- select * from customer_review
-- 6.
-- DELETE FROM new_film WHERE name= 'Fast and Furious'


-- exercise 2 


-- part 2
-- SELECT*FROM film
--1
-- UPDATE film 
-- SET language_id = 2
-- WHERE film_id  BETWEEN 600 AND 900
--2
-- SELECT * FROM customer
-- their is two first the store_id and address_id this this mind that we are connected to 2 tables so for delete it 
-- it can be a problem

--3 
-- DROP TABLE IF EXISTS customer_review;
-- its easy because is not connected to any other table

--4
-- SELECT COUNT(*) FROM rental WHERE return_date  IS NULL
-- 183 DIDNT RETURN MOVIES

--5
-- SELECT * 
-- FROM rental 
-- inner join inventory 
-- on inventory.inventory_id = rental.inventory_id
-- inner join film 
-- on film.film_id = inventory.film_id 
-- WHERE return_date  IS NULL AND film.rental_rate > .95
-- limit 30
-- select * from inventory
-- SELECT film.replacement, rental. FROM film

--6
-- SELECT * 
-- FROM film 
-- INNER JOIN film_actor
-- ON film.film_id = film_actor.film_id
-- WHERE description ILIKE '%sumo wrestler%' AND actor_id = 120


-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- he want to watch the movie call Park Citizen id = 659

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- select * from film where rating = 'R' and length < 60 
-- he want to rent Crossing Divorce id = 192 

-- The 3rd film : A film that his friend Matthew Mahan rented.
-- He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
-- select * from customer where first_name = 'Matthew' and last_name = 'Mahan' 
-- customer id 323 store id 2 address id 328
-- select * from rental where customer_id = 323 and return_date BETWEEN '2005-07-28' AND '2005-08-01'
--RENTAL ID 7275, 7938, 8790  INVENTORY ID 775, 3944, 751
-- SELECT * FROM inventory WHERE inventory_id = 751
-- film_id 169, 859, 164
-- select * from film where film_id = 859
-- film 169 rental_rate = 2.99
-- film 859 rental_rate = 4.99
-- film 164 rental_rate = 0.99
-- their is no movie that Matthew rent for 4 dollars but if i have to gues he rent Sugar Wonka film_id 859

-- The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
-- SELECT * FROM film WHERE description ILIKE '%boat%'

-- WHERE customer_id = 323
-- WHERE description ILIKE '%boat%'

-- SELECT * 
-- FROM rental 
-- INNER JOIN customer
-- on customer.customer_id = 323
-- INNER JOIN inventory 
-- on inventory.inventory_id = rental.inventory_id 
-- INNER JOIN film 
-- on inventory.film_id = film.film_id WHERE description ILIKE '%boat%'
-- SELECT * 
-- FROM film 
-- WHERE description ILIKE '%boat%' and replacement_cost > 29

--  select * from rental
--  inner join inventory 
--  on inventory.inventory_id = rental.inventory_id
--  inner join film 
--  on film.film_id = inventory.film_id 
--  where customer_id = 323 and film.description ILIKE '%boat%'
-- film id 58, 105, 114, 140, 164, 169, 193, 224, 260, 292,303, 304, 368, 485, 494, 501, 562, 590, 601, 640, 787, 793, 848,859,875, 
--915, 928, 947, 979
-- he watched Stone Fire film_id 848 after many failed intents to find it i did it hurra
