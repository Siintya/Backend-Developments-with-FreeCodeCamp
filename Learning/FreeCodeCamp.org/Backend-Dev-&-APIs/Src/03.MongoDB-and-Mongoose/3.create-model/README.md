# Create a Model
## Schema
- Schema is a structure that defines the form of documents in a MongoDB collection. Each schema is directly related to a collection in MongoDB.
- This schema functions to regulate the type and format of data stored in a document.
- Schema is the foundation for creating Models in Mongoose. This model allows us to create instances of objects called documents that will be stored in a MongoDB collection.

## Models & CRUD
- In this context, we will use models to Create data, which is part of the CRUD (Create, Read, Update, Delete) operations.
- On a real server (like Gitpod or a local server), interactions with the database are usually done inside handler functions. These handler functions are called when an event occurs, such as when someone accesses an API endpoint.

## Callback Implementation Example
Here is an example of using callback in a function: <br>
```js
/* Example */

const someFunc = function(done) {
  //... do something (risky) ...
  if (error) return done(error);
  done(null, result);
};
```

## 🎯 Challenges
Create a person schema called personSchema with the following shape:

- A required name field of type String
- An age field of type Number
- A favoriteFoods field of type [String]

Use the Mongoose basic schema types. If you want you can also add more fields, use simple validators like required or unique, and set default values. See our Mongoose article. <br>
Now, create a model from the personSchema and assign it to the existing variable Person.

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

// Callback (done)
const createPerson = (done) => {
  const newPerson = new Person({
    name: 'Sintya',
    age: 24,
    favoriteFoods: ['Noodle', 'Milk', 'Cheeses']
  });

  newPerson.save((err, person) => {
    if (err) return done(err);
    done(null, person);
  });

};


```
