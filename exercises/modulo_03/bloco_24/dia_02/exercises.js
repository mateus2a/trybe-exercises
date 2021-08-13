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