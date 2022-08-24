db.Recipe.remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then((data) => {
    console.log(data.insertedIds.length + " recipe records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
