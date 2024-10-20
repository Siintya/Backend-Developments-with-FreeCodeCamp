# Create and Save a Record of a Model
### Model 
Models are fancy constructors compiled from Schema definitions. An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.

### mongoose.model()
When you call mongoose.model() on a schema, Mongoose compiles a model for you. The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name.
### document.save()
Saves this document by inserting a new document into the database if document.isNew is true, or sending an update. One operation only modifies the database, in the latter case, it does not replace the entire document.

## Challenges
Within the createAndSavePerson function, create a document instance using the Person model constructor you built before. Pass to the constructor an object having the fields name, age, and favoriteFoods. Their types must conform to the ones in the personSchema. Then, call the method document.save() on the returned document instance. Pass to it a callback using the Node convention. This is a common pattern; all the following CRUD methods take a callback function like this as the last argument.

```js
let mongoose = require('mongoose'); 
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Create Schema
const personSchema = new mongoose.Schema ({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  favoriteFoods: [String],
});

// Create Model from Schema
const Person = mongoose.model("Person", personSchema);

// model.save()
const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'Sintya',
    age: 24,
    favoriteFoods: ['Noodle', 'Milk', 'Cheeses']
  });

  person.save((err, data) => {
    if (err) {
      return done(err);
    };

    done(null, data);
  });
};
```
