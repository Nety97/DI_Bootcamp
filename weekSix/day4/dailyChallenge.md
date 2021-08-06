-- create table items(
-- 	item_id serial primary key,
-- 	price integer 
-- );

-- create table orders(
-- 	order_id serial primary key,
-- 	item_id integer not null references items (item_id),
-- 	product varchar(50)
-- );
-- create table users (
-- 	user_id serial primary key,
-- 	order_id integer not null references orders(order_id),
-- 	first_name varchar(50)
	
-- );

-- insert into items
-- values(1, 50),
-- (2, 100),
-- (3, 200),
-- (4, 500);

-- insert into orders (item_id, product)
-- values (2, 'pizza' ),
-- (4, 'steak'),
-- (1,'falafel'),
-- (3, 'hamburguer'),
-- (3, 'shnitzel'),
-- (1, 'snacks');

-- insert into users (order_id, first_name)
-- values (5, 'john'),
-- (2, 'nety'),
-- (4, 'dan'),
-- (5, 'david')

-- CREATE FUNCTION order_with (fn varchar(50)) 
-- RETURNS VARCHAR(100) AS $$
-- BEGIN
--    RETURN(SELECT CONCAT(orders.product, ' ', items.price) FROM orders inner join items on orders.item_id = items.item_id WHERE orders.product = fn ); 
-- END;
-- $$ 
-- LANGUAGE plpgsql;
select order_with ('falafel')
-- drop function order_with
