// Exercise 1
db.restaurants.find().sort({ name: 1 }).pretty().limit(5);
// Exercise 2
db.restaurants.find().sort({ rating: -1 }).pretty().limit(5);
