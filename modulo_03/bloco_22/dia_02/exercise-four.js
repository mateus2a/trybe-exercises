// Exercise 1
db.restaurants.deleteOne({ cuisine: 'Ice Cream, Gelato, Yogurt, Ices' });
// Exercise 2
db.restaurants.deleteMany({
  cuisine: 'American',
});
