// Exercise 1
db.restaurants.count({
  borough: { $in: ['Queens', 'Staten Island', 'Bronx'] },
});
// Exercise 2
db.restaurants.count({ cuisine: { $nin: ['American'] } });
// Exercise 3
db.restaurants.count({ rating: { $gte: 8 } });
// Exercise 4
db.restaurants.count({ rating: { $lt: 4 } });
// Exercise 5
db.restaurants.count({ rating: { $nin: [5, 6, 7] } });
