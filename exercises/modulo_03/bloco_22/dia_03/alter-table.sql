-- Exercise 1
ALTER TABLE
  hr.locations CHANGE street_address address VARCHAR(40);
-- Exercise 2
ALTER TABLE
  hr.regions CHANGE region_name region VARCHAR(25);
-- Exercise 3
ALTER TABLE
  hr.countries CHANGE country_name country VARCHAR(40)