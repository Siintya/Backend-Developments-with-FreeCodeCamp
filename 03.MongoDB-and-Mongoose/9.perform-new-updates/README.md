# Chain Search Query Helpers to Narrow Search Results
- When using Mongoose to search the database, we can use search methods like `Model.find()` to get the data.
- If we don't include a callback as the last argument, the query won't be executed. We can store the query in a variable for later use.
- The query object allows us to build queries using chaining syntax.
- The actual search in the database will be done when we finally wrap the `.exec() `method. In this method, we should always pass our callback to the last method.
- Mongoose provides a variety of query helpers, and we'll use the most common ones in this lesson.

## 🎯 Challenges
Modify the `queryChain` function to find people who like the food specified by the variable named `foodToSearch`. Sort them by `name`, limit the results to two documents, and hide their age. Chain `.find()`, `.sort()`, `.limit()`, `.select()`, and then `.exec()`. Pass the `done(err, data)` callback to `exec()`.

```js
const queryChain = (done) => {
  const foodToSearch = "burrito";

  Person.find({ favoriteFoods: foodToSearch })
    .sort({ name:1 })
    .limit(2)
    .select({ age:0 })
    .exec((err, data) => {
      if (err) {
        return done(err);
      }

      return done(null, data);
    })
};
```
