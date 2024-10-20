# Perform Classic Updates by Running Find, Edit, then Save
- In the context of Mongoose, if you want to edit a document, you typically need to go through three steps:
  - find the document,
  - edit it, and
  - then save the changes.
- Mongoose also provides a special update method, `Model.update()`.
- `Model.update()` is This method is bound to the low-level MongoDB driver and can be used to edit multiple documents that match certain criteria.
- However, `Model.update()` only returns a status message and does not return the updated documents.
- In addition, this method can make model validation difficult, because it directly calls the MongoDB driver.

## 🎯 Challenges
Modify the `findEditThenSave` function to find a person by `_id` (use any of the above methods) with the parameter `personId` as search key. Add `"hamburger"` to the list of the person's `favoriteFoods` (you can use `Array.push()`). Then - inside the find callback - `save()` the updated `Person`.

**Note:** This may be tricky, if in your Schema, you declared `favoriteFoods` as an Array, without specifying the type (i.e. `[String]`). In that case, `favoriteFoods` defaults to Mixed type, and you have to manually mark it as edited using `document.markModified('edited-field')`. <br>

See our [Mongoose article](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/).



```js
// connect to database
let mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Connection error', err);
});

// create schema
const personSchema = new mongoose.Schema ({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  favoriteFoods: [String],
});

// Buat model berdasarkan skema tersebut
const Person = mongoose.model("Person", personSchema);

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId, (err, personFound) => {
    if (err) {
      return done(err);
    }

    // add "hamburger" to favoriteFoods
    personFound.favoriteFoods.push(foodToAdd);

    // Save changes to a document
    personFound.save((err, updatedPerson) => {
      if (err) {
        return done(err);
      }
      return done(null, updatedPerson);
    }); 
  });
};
```
