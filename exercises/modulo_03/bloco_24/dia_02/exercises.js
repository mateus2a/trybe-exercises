// Exercise 1
db.movies.updateOne(
  {title: "Batman"},
  {$push: { category: 'superhero' }}
)
// Exercise 2
db.movies.updateOne(
  {title: "Batman"},
  {$push: { category: { $each: ['villain', 'comic-based'] }}}
)
// Exercise 3
db.movies.updateOne(
  {title: "Batman"},
  {$pop: { category: -1 }}
)
// Exercise 4
db.movies.updateOne(
  {title: "Batman"},
  {$pop: { category: -1 }}
)
// Exercise 5
db.movies.updateOne(
  {title: "Batman"},
  {$pop: { category: 1 }}
)
// Exercise 6
db.movies.updateOne(
  { title: 'Batman' },
  { $push: { category: 'action' } }
)
// Exercise 7
db.movies.updateMany(
  { $or: [{title: 'Batman'}, {title: 'Home Alone'}]},
  { $push: { category: "90's" } }
)
// Exercise 8
db.movies.updateOne(
  {title: 'Home Alone'},
  {$push: { cast: { $each: [{
    "actor": "Macaulay Culkin",
    "character": "Kevin"
  },
  {
    "actor": "Joe Pesci",
    "character": "Harry"
  },
  {
    "actor": "Daniel Stern"
  }] } }}
)
