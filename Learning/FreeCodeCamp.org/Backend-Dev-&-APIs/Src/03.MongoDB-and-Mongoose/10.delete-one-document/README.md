# Delete One Document Using `model.findByIdAndRemove`
- The `findByIdAndRemove` and `findOneAndRemove` methods in Mongoose are used to delete documents from the database.
- This method is similar to the update method discussed earlier, but instead of updating the document, it deletes the document. After deletion, the deleted document will be restored from the database.
- When using this method, you must use the `personId` parameter as the search key to find the document you want to delete.

## 🎯 Challenges
Modify the `removeById` function to delete one person by the person's `_id`. You should use one of the methods `findByIdAndRemove()` or `findOneAndRemove()`.

```js
const removeById = (personId, done) => {
  // delete person by _id
  Person.findByIdAndRemove(personId, (err, removedPerson) => {
    if(err) {
      return done(err);
    }
    return done(null, removedPerson);
  });
};
```

### Ouput
```shell
{
  favoriteFoods: [ 'apples' ],
  _id: 6713da5466341d18c79070e6,
  name: 'Jason Bourne',
  age: 36,
  __v: 0
}
```
