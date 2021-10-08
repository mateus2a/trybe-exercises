// Exercise 1
db.restaurants.find({ rating: { $not: { $lte: 5 } } }).count();
// Exercise 2
db.restaurants
  .find({ $or: [{ rating: { $gte: 6 } }, { borough: 'Brooklyn' }] })
  .count();
// Exercise 3
db.restaurants
  .find({
    $and: [
      { borough: { $in: ['Queens', 'Staten Island', 'Broklyn '] } },
      { rating: { $gt: 4 } },
    ],
  })
  .count();
// Exercise 4
db.restaurants
  .find({ $and: [{ rating: { $ne: 1 } }, { cuisine: { $ne: 'American' } }] })
  .count();
// Exercise 5
db.restaurants
  .find(
    { rating: { $in: [6, 7, 8, 9, 10] } },
    { $and: { borough: 'Brooklyn' } },
    { $or: { cuisine: { $ne: 'Delicatessen' } } }
  )
  .count();
