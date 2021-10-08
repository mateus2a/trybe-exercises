// Exercise 1
/*
  db.bios.find({ "_id": 8 }).pretty()
*/
// Exercise 2
/*
  db.bios.find({"_id": 8}, {"name": 1}).pretty()
*/
// Exercise 3
/*
  db.bios.find({"_id": 8}, {"name": 1, "birth": 1, "_id": 0}).pretty()
*/
// Exercise 4
/*
  db.bios.find({"name.first": "John"}).pretty()
*/
// Exercise 5
/*
  db.bios.find().limit(3).pretty()
*/
// Exercise 6
/*
  db.bios.find().limit(2).skip(5).pretty()
*/
// Exercise 7
/*
  db.books.count()
*/
// Exercise 8
/*
  db.books.count({ status: "PUBLISH" })
*/
// Exercise 9
/*
  db.books.find({}, { _id: 0, title: 1, isbn: 1, pageCount: 1 }).limit(3).pretty()
*/
// Exercise 10
/*
db.books.find({status: "MEAP"}, { title: 1, authors: 1, status: 1 }).skip(5).limit(10).pretty()
*/
