# Use `model.find()` to Search Your Database
- `model.find()`, accepts a query document (a JSON object) as the first argument, then a callback. It returns an array of matches from the collection for that model.

## 🎯 Challenges
Modify the findPeopleByName function to find all the people having a given name, using `Model.find() -> [Person]`

Use the function argument personName as the search key.

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

// model.create()
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) {
      return done(err); 
    }

    done(null, data); 
  });
};

// model.find()
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, peopleFound) => {
    if (err) {
      return done(err); 
    }
    return done(null, peopleFound); 
  });
};

// testing for model.find()
findPeopleByName('John', (err, peopleFound) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('People Found:', peopleFound);
  }
});
```
