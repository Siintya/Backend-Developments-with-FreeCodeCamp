# Use model.findOne() to Return a Single Matching Document from Your Database
`Model.findOne()` behaves like Model.findOne()`Model.findOne()`, but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique.

## 🎯 Challenges
Modify the `findOneByFood` function to find just one person which has a certain food in the person's favorites, using `Model.findOne() -> Person`. Use the function argument `food` as search key.

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

// model.findOne()
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, (err, personFound) => {
    if (err) {
      return done(err);
    }
    return done(null, personFound);
  });
};

// testing!
findOneByFood('Noodle', (err, personFound) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Person Found:', personFound);
  }
});
```
