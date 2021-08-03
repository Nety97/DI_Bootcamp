
-- CREATE TABLE table1 (
-- 	onetoone SERIAL PRIMARY KEY 
-- 	linktwo integer REFERENCES table2 (onetomany)
-- 	linkthree INTEGER REFERENCES table3 (manytomany) ON UPDATE CASCADE
-- 	name VARCHAR(50)
-- )

-- CREATE TABLE table2 (
-- 	onetomany SERIAL PRIMARY KEY 
-- 	linkone INTEGER REFERENCES table1 (onetoone)
-- 	linkthree INTEGER REFERENCES table3 (manytomany) ON UPDATE CASCADE
-- 	name VARCHAR(50)
-- )


-- CREATE TABLE table3 (
-- 	manytomany SERIAL 
-- 	linktwo integer REFERENCES table2 (onetomany)
-- 	PRIMARY KEY (manytomany)
-- 	name VARCHAR(50)
-- )