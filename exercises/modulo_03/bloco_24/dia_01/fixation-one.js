db.movies.insertMany([
  {
    "title": "Batman",
    "category": [ "action", "adventure" ],
    "imdbRating": 7.6,
    "budget": 35
  },
  {
    "title": "Godzilla",
    "category": [ "action", "adventure", "sci-fi" ],
    "imdbRating": 6.6
  },
  {
    "title": "Home Alone",
    "category": [ "family", "comedy" ],
    "imdbRating": 7.4
  }
])

// Exercise 1
db.movies.update(
  {title: "Batman"},
  {$set: { imdbRating: 7.7 }}
);
// Exercise 2
db.movies.update(
  {title: "Godzilla"},
  {$set: { budget: 1 }}
);
// Exercise 3
db.movies.update(
  {title: "Home Alone"},
  {$set: { budget: 15, imdbRating: 5.5 }}
);
// Exercise 4
db.movies.update(
  {title: "Batman"},
  {$inc: { imdbRating: 2 }}
);
// Exercise 5
db.movies.update(
  {title: "Home Alone"},
  {$inc: { budget: 5 }}
);
// Exercise 6
db.movies.update(
  {title: "Batman"},
  {$mul: { imdbRating: 4 }}
);
// Exercise 7
db.movies.update(
  {title: "Batman"},
  {$rename: { budget: "estimatedBudget" }}
);
// Exercise 8
db.movies.update(
  {title: "Home Alone"},
  {$min: { budget: 5 }}
);
// Exercise 9
db.movies.update(
  {title: "Godzilla"},
  {
    $max: { imdbRating: 8.6 },
    $set: { "category.2": "thriller" }
  }
);
// Exercise 10
db.movies.updateOne(
  { title: "Home Alone" },
  {
currentDate: {
      lastUpdated: { $type: "timestamp" },
    },
  },
);
// Exercise 11
db.movies.updateMany(
  {},
  { $set: { sequels: 0 } },
);
// Exercise 12
db.movies.updateMany(
  {},
  {
unset: {
      budget: "",
      estimatedBudget: "",
    },
  },
);
// Exercise 13
db.movies.updateMany(
  {
or: [
      { title: "Batman" },
      { title: "Home Alone" },
    ],
  },
  {
max: {
      imdbRating: 17,
    },
  },
);