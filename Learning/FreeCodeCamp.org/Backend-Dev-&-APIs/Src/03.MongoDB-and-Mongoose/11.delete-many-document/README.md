# DDelete Many Documents with `model.remove()`
- The `Model.remove()` method in Mongoose is used to delete all documents that match the given criteria. This is very useful when you want to delete multiple documents at once based on certain conditions. 
- When using `Model.remove()`, keep in mind that this method does not return the deleted documents. Instead, this method returns a JSON object containing the result of the delete operation and the number of items affected.

## 🎯 Challenges
Modify the `removeManyPeople` function to delete all the people whose name is within the variable `nameToRemove`, using `Model.remove().` Pass it to a query document with the `name` field set, and a callback.

Note: The `Model.remove()` doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. Don’t forget to pass it to the `done()` callback, since we use it in tests.

```js
const removeManyPeople = (done) => {
  // Delete everyone with the matching name
  Person.remove({ name: "Mary" }, (err, result) => {
    if (err) {
      return done(err);
    }
    return done(null, result);
  });
};
```
